// Current finishing type
let currentFinishing = 'premium';

// Base prices and ROI data for different finishing types
const finishingData = {
  premium: {
    priceMultiplier: 1.0,
    roiMultiplier: 1.0
  },
  balanced: {
    priceMultiplier: 0.85, // 15% cheaper
    roiMultiplier: 0.95    // Slightly lower ROI due to lower rent potential
  }
};

// Villa filtering functionality
function filterVillas(filterText) {
  const allVillas = document.querySelectorAll('.villa-item');
  const filterMap = {
    'All Units': 'all',
    '2 Bedroom': '2br',
    '3 Bedroom (Basic)': '3br-basic',
    '3 Bedroom (Premium)': '3br-premium',
    '4 Bedroom': '4br',
    'Best ROI': 'best-roi'
  };

  const filterValue = filterMap[filterText] || 'all';

  allVillas.forEach(villa => {
    const category = villa.getAttribute('data-category');
    if (filterValue === 'all' || category === filterValue) {
      villa.style.display = 'block';
    } else {
      villa.style.display = 'none';
    }
  });
}

// Update villa prices and ROI based on finishing type
function updateVillaPricesAndROI() {
  const allVillas = document.querySelectorAll('.villa-item');
  const finishingMultipliers = finishingData[currentFinishing];

  if (!finishingMultipliers) {
    console.warn('Finishing multipliers not found for:', currentFinishing);
    return;
  }

  allVillas.forEach(villa => {
    const priceElement = villa.querySelector('.villa-price');
    const roiElement = villa.querySelector('.villa-roi');
    const finishingBadge = villa.querySelector('.finishing-badge');

    if (!priceElement || !roiElement) {
      console.warn('Required villa elements not found');
      return;
    }

    // Get base price from data attribute or calculate it
    let basePrice = villa.getAttribute('data-base-price');
    if (!basePrice) {
      // Extract current price and store as base price (assuming it's premium)
      const currentPriceText = priceElement.textContent.replace(/[$,]/g, '');
      basePrice = parseInt(currentPriceText);
      villa.setAttribute('data-base-price', basePrice);
    }

    // Get base ROI from data attribute or calculate it
    let baseROI = villa.getAttribute('data-base-roi');
    if (!baseROI) {
      // Extract current ROI
      const roiText = roiElement.textContent;
      const roiMatch = roiText.match(/(\d+\.\d+)%/);
      if (roiMatch) {
        baseROI = parseFloat(roiMatch[1]);
        villa.setAttribute('data-base-roi', baseROI);
      }
    }

    // Calculate new price and ROI
    const newPrice = Math.round(basePrice * finishingMultipliers.priceMultiplier);
    const newROI = (baseROI * finishingMultipliers.roiMultiplier).toFixed(1);

    // Update display
    priceElement.textContent = `$${newPrice.toLocaleString()}`;
    roiElement.textContent = `Annualised ROI: ${newROI}%`;

    // Update finishing badge
    if (finishingBadge) {
      finishingBadge.textContent = currentFinishing === 'premium' ? 'Premium' : 'Balanced';
    }
  });
}

// Handle finishing type selection
function selectFinishingType(finishingType) {
  currentFinishing = finishingType;

  // Update button states
  document.querySelectorAll('.finishing-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-finishing="${finishingType}"]`).classList.add('active');

  // Update villa prices and ROI
  updateVillaPricesAndROI();

  // Update calculator if needed
  if (typeof updateROICalculator === 'function') {
    updateROICalculator();
  }
}

// Update calculator with selected villa data
function updateCalculator(selectedVilla) {
  const villaInfoEl = selectedVilla.querySelector('.villa-details h4');
  const villaPriceEl = selectedVilla.querySelector('.villa-price');
  const villaROIEl = selectedVilla.querySelector('.villa-roi');

  if (!villaInfoEl || !villaPriceEl || !villaROIEl) {
    console.warn('Required villa elements not found for calculator update');
    return;
  }

  const villaInfo = villaInfoEl.textContent;
  const villaPrice = villaPriceEl.textContent;
  const villaROI = villaROIEl.textContent;

  // Extract unit number from villa info (e.g., "Unit 8 - 2BR" -> "8")
  const unitMatch = villaInfo.match(/Unit (\d+)/);
  if (unitMatch) {
    const unitNumber = unitMatch[1];
    const unitSelect = document.getElementById('unit');

    // Find and select the corresponding option in the calculator
    for (let option of unitSelect.options) {
      if (option.textContent.includes(`Unit ${unitNumber}`)) {
        unitSelect.value = option.value;
        break;
      }
    }

    // Trigger calculator update
    if (typeof updateROICalculator === 'function') {
      updateROICalculator();
    }
  }

  console.log(`Selected villa: ${villaInfo}, Price: ${villaPrice}, ROI: ${villaROI}`);
}

// Location switcher functionality
document.addEventListener('DOMContentLoaded', function () {
  // Location switcher
  document.querySelectorAll('.switch-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const target = this.getAttribute('data-target');

      // Update button states
      document.querySelectorAll('.switch-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Update content visibility
      document.querySelectorAll('.location-content').forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(target).classList.add('active');
    });
  });

  // Villa selector functionality
  document.querySelectorAll('.villa-item').forEach(item => {
    item.addEventListener('click', function () {
      document.querySelectorAll('.villa-item').forEach(i => i.classList.remove('selected'));
      this.classList.add('selected');

      // Update calculator with selected villa data
      updateCalculator(this);
    });
  });

  // Filter functionality
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter villa list based on selection
      filterVillas(this.textContent);
    });
  });

  // Finishing type selector functionality
  document.querySelectorAll('.finishing-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const finishingType = this.getAttribute('data-finishing');
      selectFinishingType(finishingType);
    });
  });

  // VERDANA ROI Calculator Integration
  const unitData = {
    1: { type: '3BR', price: 5275000000, adr: 3500000, monthly: 52500000 },
    7: { type: '4BR', price: 6610000000, adr: 4500000, monthly: 70000000 },
    11: { type: '3BR Premium', price: 5175000000, adr: 3750000, monthly: 55000000 }
  };

  const discounts = { 1: 0.09, 2: 0.05, 3: 0.0 };
  const usdRate = 16400;

  window.updateROICalculator = function () {
    // Check if required elements exist
    const phaseEl = document.getElementById("phase");
    const unitEl = document.getElementById("unit");
    const strategyEl = document.getElementById("strategy");
    const currencyEl = document.querySelector("input[name='currency']:checked");

    if (!phaseEl || !unitEl || !strategyEl || !currencyEl) {
      console.warn('Required calculator elements not found');
      return;
    }

    const phase = parseInt(phaseEl.value);
    const unitId = parseInt(unitEl.value);
    const strategy = strategyEl.value;
    const currency = currencyEl.value;

    // Get finishing type from calculator
    const calculatorFinishingBtn = document.querySelector('.calculator-form .finishing-btn.active');
    const calculatorFinishing = calculatorFinishingBtn ? calculatorFinishingBtn.getAttribute('data-finishing') : 'premium';

    // Get ADR scenario from calculator
    const calculatorAdrBtn = document.querySelector('.calculator-form .adr-btn.active');
    const adrScenario = calculatorAdrBtn ? calculatorAdrBtn.getAttribute('data-adr') : 'optimistic';

    const villa = unitData[unitId];
    if (!villa) {
      console.warn('Villa data not found for unit ID:', unitId);
      return;
    }

    const finishingMultipliers = finishingData[calculatorFinishing];
    if (!finishingMultipliers) {
      console.warn('Finishing data not found for:', calculatorFinishing);
      return;
    }

    const basePrice = villa.price * (1 - discounts[phase]);
    const finalPrice = basePrice * finishingMultipliers.priceMultiplier;

    let gross, net;
    if (strategy === 'daily') {
      const occupancy = 0.7;
      const marketing = 0.15;
      const manager = 0.3;

      // Apply ADR scenario multiplier (only for daily rentals)
      const adrMultiplier = adrScenario === 'optimistic' ? 1.15 : 1.0;
      const adjustedAdr = villa.adr * adrMultiplier;

      gross = adjustedAdr * occupancy * 30;
      net = gross * (1 - marketing) * (1 - manager);
    } else {
      const marketing = 0.0;
      const manager = 0.3;
      gross = villa.monthly;
      net = gross * (1 - marketing) * (1 - manager);
    }

    const monthlyROI = (net / finalPrice) * 100;
    const annualROI = (Math.pow(1 + monthlyROI / 100, 12) - 1) * 100;
    const payback = (finalPrice / (net * 12));

    const format = (n) => n.toLocaleString(undefined, { maximumFractionDigits: 2 });

    const priceDisplay = currency === "USD"
      ? `$${format(finalPrice / usdRate)}`
      : `IDR ${format(finalPrice)}`;

    // Update display elements with null checks
    const priceDisplayEl = document.getElementById("priceDisplay");
    const monthlyROIEl = document.getElementById("monthlyROI");
    const annualROIEl = document.getElementById("annualROI");
    const paybackEl = document.getElementById("payback");

    if (priceDisplayEl) priceDisplayEl.innerText = priceDisplay;
    if (monthlyROIEl) monthlyROIEl.innerText = `${format(monthlyROI)}%`;
    if (annualROIEl) annualROIEl.innerText = `${format(annualROI)}%`;
    if (paybackEl) paybackEl.innerText = `${format(payback)} years`;

    // Update dynamic disclaimer parameters
    const occupancyRateEl = document.getElementById("occupancyRate");
    const marketingFeeEl = document.getElementById("marketingFee");
    const managementFeeEl = document.getElementById("managementFee");
    const netMonthlyProceedingsEl = document.getElementById("netMonthlyProceedings");

    if (strategy === 'daily') {
      if (occupancyRateEl) occupancyRateEl.innerText = `${(occupancy * 100).toFixed(0)}%`;
      if (marketingFeeEl) marketingFeeEl.innerText = `${(marketing * 100).toFixed(0)}%`;
      if (managementFeeEl) managementFeeEl.innerText = `${(manager * 100).toFixed(0)}%`;
    } else {
      if (occupancyRateEl) occupancyRateEl.innerText = "N/A";
      if (marketingFeeEl) marketingFeeEl.innerText = "0%";
      if (managementFeeEl) managementFeeEl.innerText = `${(manager * 100).toFixed(0)}%`;
    }

    const netDisplay = currency === "USD"
      ? `$${format(net / usdRate)}`
      : `IDR ${format(net)}`;

    if (netMonthlyProceedingsEl) netMonthlyProceedingsEl.innerText = netDisplay;
  };

  // ROI Calculator event listeners
  document.querySelectorAll("#phase, #unit, #strategy").forEach(el => {
    if (el) {
      el.addEventListener("change", updateROICalculator);
    }
  });

  document.querySelectorAll("input[name='currency']").forEach(el => {
    if (el) {
      el.addEventListener("change", updateROICalculator);
    }
  });

  // Calculator finishing type selector functionality
  document.querySelectorAll('.calculator-form .finishing-btn[data-finishing]').forEach(btn => {
    btn.addEventListener('click', function () {
      // Update calculator finishing buttons state
      document.querySelectorAll('.calculator-form .finishing-btn[data-finishing]').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Update calculator with new finishing type
      updateROICalculator();
    });
  });

  // Calculator ADR scenario selector functionality
  document.querySelectorAll('.calculator-form .adr-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      // Update calculator ADR scenario buttons state
      document.querySelectorAll('.calculator-form .adr-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Update calculator with new ADR scenario
      updateROICalculator();
    });
  });

  // Initial call with error handling
  try {
    updateROICalculator();
  } catch (error) {
    console.warn('Error during initial calculator update:', error);
  }

  // Initialize finishing selector
  updateVillaPricesAndROI();

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Header scroll effect
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
  });
});
