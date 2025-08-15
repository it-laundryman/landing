<template>
  <header>
    <div class="container">
      <div class="header-content">
        <div class="logo">VERDANA BALI</div>
        <div class="header-right">
          <a href="#contact" class="contact-badge">Contact Us</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Screen 1: Investment-Focused Hero -->
  <section class="hero">
    <div class="hero-content">
      <h1>VERDANA Sanur: 12% Annual ROI</h1>
      <p class="hero-subtitle">Premium Bali real estate investment with complete management and transparent returns.
        Direct from developer with institutional-grade documentation.</p>

      <div class="investment-metrics">
        <div class="metric">
          <span class="metric-value">12%</span>
          <span class="metric-label">Annual ROI</span>
        </div>
        <div class="metric">
          <span class="metric-value">$245K</span>
          <span class="metric-label">Starting Investment</span>
        </div>
        <div class="metric">
          <span class="metric-value">Q4 2026</span>
          <span class="metric-label">Income Generation</span>
        </div>
        <div class="metric">
          <span class="metric-value">11</span>
          <span class="metric-label">Exclusive Units Only</span>
        </div>
      </div>

      <div class="hero-ctas">
        <a href="#calculator" class="btn btn-primary">Calculate Your Returns</a>
        <a href="#" class="btn btn-secondary">View Investment Presentation</a>
      </div>
    </div>
  </section>

  <!-- Screen 2: Founder Message -->
  <section class="founder-message">
    <div class="container">
      <div class="founder-content">
        <div class="founder-text-left">
          <span class="founder-label">we are</span>
          <h2 class="founder-title">FOUNDER<br>MESSAGE</h2>
          <p class="founder-description">What began as a personal search for meaningful and lasting value has grown into
            LABNA PROPERTIES — a company shaped by principles, not trends.</p>
        </div>

        <div class="founder-image">
          <img
            src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><rect width='400' height='500' fill='%23c0c0c0'/><text x='200' y='250' text-anchor='middle' fill='%23666' font-size='20'>Founder Photo</text></svg>"
            alt="Founder Photo" />
        </div>

        <div class="founder-text-right">
          <blockquote class="founder-quote">
            "During a motorcycle journey through the Himalayas, I realized that true luxury isn't about excess—it's
            about having everything you need without thinking about it. This insight became the foundation of LABNA
            CAPITAL's invisible service philosophy."
          </blockquote>
          <a href="#" class="read-story-link">read story <span>→</span></a>
        </div>
      </div>
    </div>
  </section>

  <!-- Screen 3: Investment Benefits -->
  <section class="investment-benefits">
    <div class="container">
      <h2 class="section-title">Why VERDANA Delivers Superior Returns</h2>
      <p class="section-subtitle">Institutional-grade investment opportunity with complete transparency, professional
        management, and performance in Bali's premium market.</p>

      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">💰</div>
          <div class="benefit-title">Guaranteed Rental Management</div>
          <p class="benefit-description">Professional rental optimization with guaranteed occupancy rates and
            transparent revenue sharing. Complete hands-off investment experience.</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">📈</div>
          <div class="benefit-title">Premium Location Appreciation</div>
          <p class="benefit-description">Sanur's 99% development completion ensures scarcity value. Historical 8-12%
            annual appreciation with strong future growth prospects.</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">🏛️</div>
          <div class="benefit-title">Tax Optimization Structure</div>
          <p class="benefit-description">Compliant ownership structure optimized for international investors.
            Professional tax planning and legal compliance included.</p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">📋</div>
          <div class="benefit-title">Complete Legal Compliance</div>
          <p class="benefit-description">Institutional-level documentation, government permits, and transparent legal
            structure. Full due diligence support provided.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Screen 3: Interactive Masterplan -->
  <section class="masterplan">
    <div class="container">
      <h2 class="section-title">Select Your Investment Unit</h2>
      <p class="section-subtitle">Interactive masterplan showing all available villas with real-time pricing and ROI
        calculations. Click any unit to see detailed investment analysis.</p>

      <div class="masterplan-container">
        <div class="masterplan-map">
          <div class="map-placeholder">
            <h3>Interactive VERDANA Masterplan</h3>
            <p>Click on available villas to see detailed investment metrics</p>
            <p style="margin-top: 2rem; opacity: 0.8;">• Green units: Available for investment</p>
            <p style="opacity: 0.8;">• Yellow units: Reserved</p>
            <p style="opacity: 0.8;">• Red units: Sold</p>
          </div>
        </div>

        <div class="villa-selector">
          <h3 style="margin-bottom: 1.5rem; color: #2c4a3b;">Available Investment Units</h3>

          <!-- Finishing Type Selector -->
          <div class="finishing-selector" style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 1rem; color: #2c4a3b; font-size: 1rem;">Choose type of finish:</h4>
            <div class="finishing-filters">
              <button class="finishing-btn active" data-finishing="premium">Premium</button>
              <button class="finishing-btn" data-finishing="balanced">Balanced</button>
            </div>
          </div>

          <!-- Villa Type Selector -->
          <div class="villa-type-selector" style="margin-bottom: 1.5rem;">
            <h4 style="margin-bottom: 1rem; color: #2c4a3b; font-size: 1rem;">Choose Type of Villa:</h4>
          </div>

          <div class="villa-filters">
            <button class="filter-btn active" data-filter="all">All Units</button>
            <button class="filter-btn" data-filter="2br">2 Bedroom</button>
            <button class="filter-btn" data-filter="3br-basic">3 Bedroom (Basic)</button>
            <button class="filter-btn" data-filter="3br-premium">3 Bedroom (Premium)</button>
            <button class="filter-btn" data-filter="4br">4 Bedroom</button>
            <button class="filter-btn" data-filter="best-roi">Best ROI</button>
          </div>

          <div class="villa-list">
            <!-- All Units Tab -->
            <div class="villa-item selected" data-category="all">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 8 - 2BR</h4>
                  <div class="villa-specs">88m² • Garden View</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$240,721</div>
                    <div class="phase-badge">Phase 1</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 10.6%</div>
                </div>
              </div>
            </div>

            <div class="villa-item" data-category="all">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 2 - 3BR</h4>
                  <div class="villa-specs">127m² • Basic Configuration</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$281,239</div>
                    <div class="phase-badge">Phase 1</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 10.0%</div>
                </div>
              </div>
            </div>

            <div class="villa-item" data-category="all">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 7 - 4BR</h4>
                  <div class="villa-specs">160m² • Premium Location</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$375,702</div>
                    <div class="phase-badge">Phase 3</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 11.5%</div>
                </div>
              </div>
            </div>

            <!-- 2 Bedroom Tab -->
            <div class="villa-item" data-category="2br" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 8 - 2BR</h4>
                  <div class="villa-specs">88m² • Garden View</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$240,721</div>
                    <div class="phase-badge">Phase 1</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 10.6%</div>
                </div>
              </div>
            </div>

            <!-- 3 Bedroom Basic Tab -->
            <div class="villa-item" data-category="3br-basic" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 2 - 3BR</h4>
                  <div class="villa-specs">127m² • Basic Configuration</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$281,239</div>
                    <div class="phase-badge">Phase 1</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 10.0%</div>
                </div>
              </div>
            </div>

            <div class="villa-item" data-category="3br-basic" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 3 - 3BR</h4>
                  <div class="villa-specs">127m² • Basic Configuration</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$281,239</div>
                    <div class="phase-badge">Phase 2</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 10.0%</div>
                </div>
              </div>
            </div>

            <div class="villa-item" data-category="3br-basic" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 4 - 3BR</h4>
                  <div class="villa-specs">127m² • Basic Configuration</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$281,239</div>
                    <div class="phase-badge">Phase 2</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 10.0%</div>
                </div>
              </div>
            </div>

            <!-- 3 Bedroom Premium Tab -->
            <div class="villa-item" data-category="3br-premium" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 1 - 3BR</h4>
                  <div class="villa-specs">127m² • Premium Configuration</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$299,532</div>
                    <div class="phase-badge">Phase 1</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 12.1%</div>
                </div>
              </div>
            </div>

            <div class="villa-item" data-category="3br-premium" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 11 - 3BR</h4>
                  <div class="villa-specs">127m² • Premium Configuration</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$294,044</div>
                    <div class="phase-badge">Phase 2</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 12.3%</div>
                </div>
              </div>
            </div>

            <div class="villa-item" data-category="3br-premium" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 9 - 3BR</h4>
                  <div class="villa-specs">127m² • Premium Configuration</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$299,532</div>
                    <div class="phase-badge">Phase 2</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 12.1%</div>
                </div>
              </div>
            </div>

            <!-- 4 Bedroom Tab -->
            <div class="villa-item" data-category="4br" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 7 - 4BR</h4>
                  <div class="villa-specs">160m² • Premium Location</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$375,702</div>
                    <div class="phase-badge">Phase 3</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 11.5%</div>
                </div>
              </div>
            </div>

            <!-- Best ROI Tab -->
            <div class="villa-item" data-category="best-roi" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 7 - 4BR</h4>
                  <div class="villa-specs">160m² • Premium Location</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$375,702</div>
                    <div class="phase-badge">Phase 3</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 11.5%</div>
                </div>
              </div>
            </div>

            <div class="villa-item" data-category="best-roi" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 11 - 3BR</h4>
                  <div class="villa-specs">127m² • Premium Configuration</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$294,044</div>
                    <div class="phase-badge">Phase 2</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 12.3%</div>
                </div>
              </div>
            </div>

            <div class="villa-item" data-category="best-roi" style="display: none;">
              <div class="villa-info">
                <div class="villa-details">
                  <h4>Unit 9 - 3BR</h4>
                  <div class="villa-specs">127m² • Premium Configuration</div>
                  <div class="villa-info-row">
                    <div class="villa-price">$299,532</div>
                    <div class="phase-badge">Phase 2</div>
                  </div>
                </div>
                <div class="villa-badges">
                  <div class="finishing-badge">Premium</div>
                  <div class="villa-roi">Annualised ROI: 12.1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Screen 4: Investment Calculator -->
  <section class="calculator" id="calculator">
    <div class="container">
      <h2 class="section-title">Investment Calculator</h2>
      <p class="section-subtitle">Calculate your detailed returns including taxes, management fees, and seasonal
        variations. Real-time analysis based on current market conditions.</p>

      <!-- Integrated VERDANA ROI Calculator -->
      <div class="verdana-calculator">
        <div class="calculator-form">
          <div class="form-group">
            <label class="input-label" for="phase">Construction Phase</label>
            <select class="input-field" id="phase">
              <option value="1">Phase 1 (Early Bird - 9% Discount)</option>
              <option value="2">Phase 2 (Mid Construction - 5% Discount)</option>
              <option value="3" selected>Phase 3 (Final - Current Pricing)</option>
            </select>
          </div>

          <div class="form-group">
            <label class="input-label" for="unit">Villa Unit Selection</label>
            <select class="input-field" id="unit">
              <option value="1">Unit 1 - 3BR Villa</option>
              <option value="7">Unit 7 - 4BR Villa</option>
              <option value="11">Unit 11 - 3BR Premium Villa</option>
            </select>
          </div>

          <div class="form-group">
            <label class="input-label">Choose Type of Finish</label>
            <div class="finishing-filters">
              <button type="button" class="finishing-btn active" data-finishing="premium">Premium</button>
              <button type="button" class="finishing-btn" data-finishing="balanced">Balanced</button>
            </div>
          </div>

          <div class="form-group">
            <label class="input-label" for="strategy">Rental Strategy</label>
            <select class="input-field" id="strategy">
              <option value="daily">Daily Vacation Rentals</option>
              <option value="monthly">Monthly Long-term Rentals</option>
            </select>
          </div>

          <div class="form-group">
            <label class="input-label">ADR Scenario</label>
            <div class="adr-filters">
              <button type="button" class="adr-btn active" data-adr="optimistic">Optimistic</button>
              <button type="button" class="adr-btn" data-adr="base">Base</button>
            </div>
          </div>

          <div class="form-group">
            <label class="input-label">Display Currency</label>
            <div class="currency-toggle">
              <label class="radio-label">
                <input type="radio" name="currency" value="IDR" checked>
                <span>Indonesian Rupiah (IDR)</span>
              </label>
              <label class="radio-label">
                <input type="radio" name="currency" value="USD">
                <span>US Dollar (USD)</span>
              </label>
            </div>
          </div>
        </div>

        <div class="calculator-results">
          <h3 style="margin-bottom: 2rem; color: #2c4a3b; text-align: center;">Investment Analysis Results</h3>

          <div
            style="margin-bottom: 2rem; padding: 1.5rem; background: #f0f7f2; border-radius: 10px; border-left: 4px solid #2c4a3b;">
            <p style="margin: 0; color: #666; font-size: 0.9rem; line-height: 1.5;">
              <strong>Investment Parameters:</strong> Analysis based on <span id="occupancyRate">70%</span> occupancy
              rate,
              <span id="marketingFee">15%</span> marketing fee, <span id="managementFee">30%</span> management fee.
              Net monthly proceedings: <span id="netMonthlyProceedings">IDR 0</span>.
              Calculations reflect current market conditions and selected rental strategy.
            </p>
          </div>

          <div class="result-item">
            <span class="result-label">Purchase Price</span>
            <span class="result-value" id="priceDisplay">IDR 5,275,000,000</span>
          </div>

          <div class="result-item">
            <span class="result-label">Monthly ROI</span>
            <span class="result-value result-highlight-metric" id="monthlyROI">0.89%</span>
          </div>

          <div class="result-item">
            <span class="result-label">Annualised ROI</span>
            <span class="result-value result-highlight-metric" id="annualROI">11.3%</span>
          </div>

          <div class="result-item">
            <span class="result-label">Payback Period</span>
            <span class="result-value" id="payback">8.8 years</span>
          </div>

          <div
            style="margin-top: 2rem; padding: 1.5rem; background: #f0f7f2; border-radius: 10px; border-left: 4px solid #2c4a3b;">
            <p style="margin: 0; color: #666; font-size: 0.9rem; line-height: 1.5;">
              <strong>Note:</strong> The information provided is theoretical data for which is not responsible.
              Decisions are made by the user independently at their own risk. This is not an investment recommendation.
            </p>
          </div>

          <button class="btn btn-primary" style="width: 100%; margin-top: 2rem;">Request Detailed Financial
            Analysis</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Screen 5: Location Analysis -->
  <section class="location-analysis">
    <div class="container">
      <h2 class="section-title">Strategic Location Analysis</h2>
      <p class="section-subtitle">Comprehensive location intelligence for informed investment decisions. Analyze local
        infrastructure and regional connectivity.</p>

      <div class="location-switcher">
        <button class="switch-btn active" data-target="sanur">Explore Sanur</button>
        <button class="switch-btn" data-target="bali">Explore Bali</button>
      </div>

      <div class="location-content active" id="sanur">
        <h3 style="text-align: center; color: #2c4a3b; margin-bottom: 2rem;">Local Infrastructure & Investment
          Fundamentals</h3>
        <div class="location-grid">
          <div class="location-map">
            <div class="map-placeholder">
              <h4>Sanur Investment Map</h4>
              <p>Interactive map showing VERDANA location relative to key investment infrastructure</p>
              <div style="margin-top: 2rem;">
                <p style="font-size: 0.9rem;">🏗️ VERDANA Location</p>
                <p style="font-size: 0.9rem;">🏫 International Schools</p>
                <p style="font-size: 0.9rem;">🏥 Medical Facilities</p>
                <p style="font-size: 0.9rem;">🛍️ Commercial Centers</p>
                <p style="font-size: 0.9rem;">🏖️ Beach Access Points</p>
              </div>
            </div>
          </div>

          <div class="location-details">
            <div class="location-item">
              <div class="location-icon">🏫</div>
              <div class="location-info">
                <h4>Bali International School</h4>
                <p>Premium education drives family rental demand</p>
              </div>
              <div class="location-distance">5 min</div>
            </div>

            <div class="location-item">
              <div class="location-icon">🏥</div>
              <div class="location-info">
                <h4>International Hospital</h4>
                <p>World-class healthcare supports premium positioning</p>
              </div>
              <div class="location-distance">7 min</div>
            </div>

            <div class="location-item">
              <div class="location-icon">🛍️</div>
              <div class="location-info">
                <h4>ICON BALI Mall</h4>
                <p>New retail hub increases area desirability</p>
              </div>
              <div class="location-distance">10 min</div>
            </div>

            <div class="location-item">
              <div class="location-icon">🏖️</div>
              <div class="location-info">
                <h4>Sanur Beach</h4>
                <p>Safe family beach drives tourist rental demand</p>
              </div>
              <div class="location-distance">4 min</div>
            </div>

            <div class="location-item">
              <div class="location-icon">🏪</div>
              <div class="location-info">
                <h4>Local Markets & Dining</h4>
                <p>Authentic experiences enhance rental appeal</p>
              </div>
              <div class="location-distance">2 min</div>
            </div>
          </div>
        </div>
      </div>

      <div class="location-content" id="bali">
        <h3 style="text-align: center; color: #2c4a3b; margin-bottom: 2rem;">Regional Connectivity & Tourism
          Infrastructure</h3>
        <div class="location-grid">
          <div class="location-map">
            <div class="map-placeholder">
              <h4>Bali Tourism Map</h4>
              <p>Strategic location analysis showing accessibility to major Bali attractions and tourist flows</p>
              <div style="margin-top: 2rem;">
                <p style="font-size: 0.9rem;">✈️ Airport Connections</p>
                <p style="font-size: 0.9rem;">🏛️ Cultural Sites</p>
                <p style="font-size: 0.9rem;">🌋 Natural Attractions</p>
                <p style="font-size: 0.9rem;">🏖️ Beach Destinations</p>
                <p style="font-size: 0.9rem;">🛣️ Transport Routes</p>
              </div>
            </div>
          </div>

          <div class="location-details">
            <div class="location-item">
              <div class="location-icon">✈️</div>
              <div class="location-info">
                <h4>Ngurah Rai Airport</h4>
                <p>Direct international access drives rental demand</p>
              </div>
              <div class="location-distance">25 min</div>
            </div>

            <div class="location-item">
              <div class="location-icon">🏛️</div>
              <div class="location-info">
                <h4>Ubud Cultural Center</h4>
                <p>Major tourist destination - 45min drive</p>
              </div>
              <div class="location-distance">45 min</div>
            </div>

            <div class="location-item">
              <div class="location-icon">🌋</div>
              <div class="location-info">
                <h4>Mount Batur Sunrise</h4>
                <p>Popular excursion accessible from Sanur</p>
              </div>
              <div class="location-distance">90 min</div>
            </div>

            <div class="location-item">
              <div class="location-icon">🏖️</div>
              <div class="location-info">
                <h4>Nusa Dua Beach Club</h4>
                <p>Luxury beach destination for premium guests</p>
              </div>
              <div class="location-distance">20 min</div>
            </div>

            <div class="location-item">
              <div class="location-icon">🛣️</div>
              <div class="location-info">
                <h4>Canggu Surf Scene</h4>
                <p>Trendy destination attracting younger demographics</p>
              </div>
              <div class="location-distance">35 min</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Screen 6: Financial Performance -->
  <section class="financial-performance">
    <div class="container">
      <h2 class="section-title">Market Performance & Projections</h2>
      <p class="section-subtitle">Historical data and future projections based on Sanur market analysis and tourism
        growth trends in Bali.</p>

      <div class="performance-grid">
        <div class="performance-card">
          <div class="performance-value">8.5%</div>
          <div class="performance-label">Historical Annual Appreciation</div>
          <div class="performance-trend">↗ Consistent growth since 2018</div>
        </div>

        <div class="performance-card">
          <div class="performance-value">78%</div>
          <div class="performance-label">Average Annual Occupancy</div>
          <div class="performance-trend">↗ +12% vs 2019 levels</div>
        </div>

        <div class="performance-card">
          <div class="performance-value">$285</div>
          <div class="performance-label">Average Daily Rate (ADR)</div>
          <div class="performance-trend">↗ Premium market positioning</div>
        </div>

        <div class="performance-card">
          <div class="performance-value">12%</div>
          <div class="performance-label">Projected Net Yield</div>
          <div class="performance-trend">↗ Conservative estimate</div>
        </div>

        <div class="performance-card">
          <div class="performance-value">99%</div>
          <div class="performance-label">Sanur Development Completion</div>
          <div class="performance-trend">↗ Scarcity value protection</div>
        </div>

        <div class="performance-card">
          <div class="performance-value">15M+</div>
          <div class="performance-label">Annual Bali Visitors</div>
          <div class="performance-trend">↗ Growing tourism demand</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Screen 7: Legal & Documentation -->
  <section class="legal-docs">
    <div class="container">
      <h2 class="section-title">Legal Structure & Documentation</h2>
      <p class="section-subtitle">Comprehensive legal compliance and documentation for secure international investment.
        Institutional-grade transparency and investor protection.</p>

      <div class="docs-grid">
        <div class="doc-card">
          <div class="doc-header">
            <div class="doc-icon">📋</div>
            <div class="doc-title">Ownership Structure</div>
          </div>
          <ul class="doc-list">
            <li>Indonesian company formation (PT PMA)</li>
            <li>Hak Pakai land rights (25+25 years)</li>
            <li>Nominee director arrangements</li>
            <li>Shareholder agreements</li>
            <li>Exit strategy protocols</li>
          </ul>
        </div>

        <div class="doc-card">
          <div class="doc-header">
            <div class="doc-icon">🏛️</div>
            <div class="doc-title">Government Compliance</div>
          </div>
          <ul class="doc-list">
            <li>Building permits & approvals</li>
            <li>Environmental compliance certificates</li>
            <li>Tourism business licenses</li>
            <li>Tax compliance documentation</li>
            <li>Local authority agreements</li>
          </ul>
        </div>

        <div class="doc-card">
          <div class="doc-header">
            <div class="doc-icon">🛡️</div>
            <div class="doc-title">Investor Protection</div>
          </div>
          <ul class="doc-list">
            <li>Rental guarantee agreements</li>
            <li>Property management contracts</li>
            <li>Insurance coverage policies</li>
            <li>Dispute resolution procedures</li>
            <li>Performance monitoring systems</li>
          </ul>
        </div>

        <div class="doc-card">
          <div class="doc-header">
            <div class="doc-icon">💰</div>
            <div class="doc-title">Financial Transparency</div>
          </div>
          <ul class="doc-list">
            <li>Developer financial statements</li>
            <li>Project budget breakdowns</li>
            <li>Revenue sharing models</li>
            <li>Quarterly reporting systems</li>
            <li>Independent auditing processes</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Screen 8: Final CTA -->
  <section class="final-cta">
    <div class="container">
      <h2 class="cta-title">Secure Your VERDANA Investment Position</h2>
      <p class="cta-subtitle">Limited availability: Only 11 exclusive units in Bali's premium location. Professional
        investment team ready to guide you through the complete process.</p>

      <div class="cta-options">
        <div class="cta-option">
          <h4>Schedule Investment Consultation</h4>
          <p>Comprehensive analysis with our investment specialists. Review financial projections, legal structure, and
            complete documentation.</p>
        </div>

        <div class="cta-option">
          <h4>Request Financial Model</h4>
          <p>Detailed investment analysis including cash flow projections, tax implications, and scenario planning for
            informed decisions.</p>
        </div>

        <div class="cta-option">
          <h4>Book Site Visit</h4>
          <p>Experience VERDANA in person with guided tour of show units, location analysis, and investment facilities
            overview.</p>
        </div>
      </div>

      <div class="cta-buttons">
        <a href="#" class="btn btn-primary">Schedule Investment Consultation</a>
      </div>

      <div style="margin-top: 3rem;">
        <p style="opacity: 0.9;">by LABNA CAPITAL</p>
        <p style="margin-top: 1rem; opacity: 0.8;">All investment consultations include detailed financial analysis,
          legal review, and no-obligation professional guidance</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import '@/js/script'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  scroll-behavior: smooth;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
header {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c4a3b;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}



.contact-badge {
  background: #2c4a3b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-badge:hover {
  background: #1a3329;
  color: white;
}

/* Screen 1: Investment-Focused Hero */
.hero {
  min-height: 100vh;
  background: linear-gradient(rgba(44, 74, 59, 0.8), rgba(44, 74, 59, 0.6)),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="investorGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%232c4a3b;stop-opacity:1" /><stop offset="100%" style="stop-color:%23164a2e;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23investorGrad)"/><rect x="80" y="180" width="320" height="240" fill="%23fff" opacity="0.15" rx="15"/><rect x="100" y="220" width="120" height="100" fill="%232c4a3b" opacity="0.8" rx="8"/><circle cx="250" cy="270" r="40" fill="%23fff" opacity="0.2"/><rect x="800" y="350" width="280" height="150" fill="%23fff" opacity="0.12" rx="12"/></svg>') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  padding: 12rem 0 6rem;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content h1 {
  font-size: 3.2rem;
  font-weight: 400;
  margin-bottom: 1.8rem;
  letter-spacing: 0.5px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 3.5rem;
  max-width: 750px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.5;
  margin-left: auto;
  margin-right: auto;
}

.investment-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.8rem;
  margin-bottom: 3.5rem;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
}

.metric {
  background: rgba(255, 255, 255, 0.15);
  padding: 1.8rem 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.metric:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.metric-value {
  font-size: 2.0rem;
  font-weight: 700;
  display: block;
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.85rem;
  opacity: 0.9;
  line-height: 1.1;
  white-space: nowrap;
}

.hero-ctas {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.btn {
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
}

.btn-primary {
  background: #ffd700;
  color: #2c4a3b;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.4);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Screen 2: Founder Message */
.founder-message {
  padding: 8rem 0;
  background: #2c4a3b;
  color: white;
}

.founder-content {
  display: grid;
  grid-template-columns: 1fr 400px 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.founder-text-left {
  text-align: left;
}

.founder-label {
  font-size: 0.9rem;
  text-transform: lowercase;
  opacity: 0.8;
  margin-bottom: 1rem;
  display: block;
}

.founder-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 0.9;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

.founder-description {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 300px;
}

.founder-image {
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  background: #3a5a4b;
}

.founder-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.founder-text-right {
  text-align: left;
  padding-left: 2rem;
}

.founder-quote {
  font-size: 1.1rem;
  line-height: 1.6;
  font-style: italic;
  margin: 0 0 3rem 0;
  opacity: 0.95;
  border: none;
  padding: 0;
}

.read-story-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border-bottom: 1px solid transparent;
}

.read-story-link:hover {
  color: #ffd700;
  border-bottom-color: #ffd700;
}

.read-story-link span {
  transition: transform 0.3s ease;
}

.read-story-link:hover span {
  transform: translateX(5px);
}

/* Responsive Design for Founder Message */
@media (max-width: 1200px) {
  .founder-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    max-width: 800px;
  }

  .founder-text-left,
  .founder-text-right {
    text-align: center;
    padding: 0;
  }

  .founder-description {
    max-width: none;
    margin: 0 auto;
  }

  .founder-image {
    height: 400px;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .founder-message {
    padding: 5rem 0;
  }

  .founder-title {
    font-size: 2.8rem;
  }

  .founder-quote {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .founder-image {
    height: 350px;
  }
}

/* Screen 3: Investment Benefits */
.investment-benefits {
  padding: 6rem 0;
  background: #f8fbf9;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 300;
  color: #2c4a3b;
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.benefit-card {
  background: white;
  padding: 1.8rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-left: 3px solid #2c4a3b;
  text-align: center;
}

.benefit-icon {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.benefit-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c4a3b;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.benefit-description {
  color: #666;
  line-height: 1.5;
  font-size: 0.9rem;
}

/* Screen 3: Interactive Masterplan */
.masterplan {
  padding: 6rem 0;
  background: white;
}

.masterplan-container {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  margin-top: 3rem;
  align-items: start;
}

.masterplan-map {
  background: #f0f7f2;
  border-radius: 15px;
  padding: 2rem;
  height: 600px;
  min-height: 600px;
  position: relative;
}

.map-placeholder {
  background: #2c4a3b;
  color: white;
  padding: 3rem;
  border-radius: 10px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.villa-selector {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.villa-filters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.filter-btn {
  padding: 0.35rem 0.7rem;
  border: 2px solid #e8f4ea;
  background: white;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;
  text-align: center;
}

.filter-btn.active {
  background: #2c4a3b;
  color: white;
  border-color: #2c4a3b;
}

.finishing-filters {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.finishing-btn {
  padding: 0.5rem 1.2rem;
  border: 2px solid #e8f4ea;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;
}

.finishing-btn.active {
  background: #2c4a3b;
  color: white;
  border-color: #2c4a3b;
}

.finishing-btn:hover {
  border-color: #2c4a3b;
  transform: translateY(-1px);
}

.adr-filters {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.adr-btn {
  padding: 0.5rem 1.2rem;
  border: 2px solid #e8f4ea;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;
}

.adr-btn.active {
  background: #2c4a3b;
  color: white;
  border-color: #2c4a3b;
}

.adr-btn:hover {
  border-color: #2c4a3b;
  transform: translateY(-1px);
}

.villa-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 600px;
  overflow-y: auto;
}

.villa-item {
  padding: 0.7rem;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}

.villa-item:hover {
  border-color: #2c4a3b;
  box-shadow: 0 3px 8px rgba(44, 74, 59, 0.12);
  transform: translateY(-1px);
}

.villa-item.selected {
  border-color: #2c4a3b;
  background: #f8fbf9;
  box-shadow: 0 3px 8px rgba(44, 74, 59, 0.15);
}

.villa-info {
  display: block;
}

.villa-details h4 {
  color: #2c4a3b;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.villa-specs {
  color: #666;
  font-size: 0.75rem;
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.villa-price {
  font-weight: 700;
  color: #28a745;
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  display: block;
}

.villa-info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.villa-badges {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
}

.villa-roi {
  background: #2c4a3b;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
}

.phase-badge {
  background: #ffd700;
  color: #2c4a3b;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  font-size: 0.65rem;
  font-weight: 600;
}

.finishing-badge {
  background: #6c757d;
  color: white;
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  font-size: 0.65rem;
  font-weight: 600;
}

/* Screen 4: Investment Calculator */
.calculator {
  padding: 6rem 0;
  background: #f8fbf9;
}

/* Updated Calculator Styles */
.verdana-calculator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
}

.calculator-form {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 2rem;
}

.currency-toggle {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.radio-label:hover {
  background-color: #f0f7f2;
}

.radio-label input[type="radio"] {
  width: auto;
  margin: 0;
}

@media (max-width: 768px) {
  .verdana-calculator {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Remove old calculator styles and update JavaScript functionality */

.input-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c4a3b;
}

.input-field {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e8f4ea;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #2c4a3b;
}

.calculator-results {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f8fbf9;
  border-radius: 8px;
}

.result-label {
  font-weight: 500;
  color: #333;
}

.result-value {
  font-weight: 700;
  color: #2c4a3b;
  font-size: 1.1rem;
}

.result-highlight {
  background: #2c4a3b;
  color: white;
  font-size: 1.3rem;
}

/* Screen 5: Location Analysis */
.location-analysis {
  padding: 6rem 0;
  background: white;
}

.location-switcher {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.switch-btn {
  padding: 1rem 2rem;
  border: 2px solid #2c4a3b;
  background: white;
  color: #2c4a3b;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.switch-btn.active {
  background: #2c4a3b;
  color: white;
}

.location-content {
  display: none;
}

.location-content.active {
  display: block;
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.location-map {
  background: #f0f7f2;
  border-radius: 15px;
  padding: 2rem;
  min-height: 500px;
}

.location-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.location-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f8fbf9;
  border-radius: 12px;
  border-left: 4px solid #2c4a3b;
}

.location-icon {
  width: 50px;
  height: 50px;
  background: #2c4a3b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.location-info h4 {
  color: #2c4a3b;
  margin-bottom: 0.5rem;
}

.location-distance {
  background: #2c4a3b;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-left: auto;
}

/* Screen 6: Financial Performance */
.financial-performance {
  padding: 6rem 0;
  background: #f8fbf9;
}

.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.performance-card {
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.performance-value {
  font-size: 3rem;
  font-weight: 700;
  color: #2c4a3b;
  margin-bottom: 0.5rem;
}

.performance-label {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
}

.performance-trend {
  color: #28a745;
  font-weight: 600;
}

/* Screen 7: Legal & Documentation */
.legal-docs {
  padding: 6rem 0;
  background: white;
}

.docs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.doc-card {
  background: white;
  padding: 0.5rem 1.8rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-left: 3px solid #2c4a3b;
  text-align: left;
}

.doc-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.doc-icon {
  font-size: 2.2rem;
  margin: 0;
  flex-shrink: 0;
}

.doc-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c4a3b;
  margin: 0;
  line-height: 1.3;
}

.doc-list {
  list-style: none;
  margin-bottom: 2rem;
  text-align: left;
}

.doc-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e8f4ea;
  color: #666;
  font-size: 0.9rem;
}

/* Mobile responsive layout for legal docs section */
@media (max-width: 768px) {
  .docs-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Mobile responsive order swap for masterplan section */

/* Screen 8: Final CTA */
.final-cta {
  padding: 6rem 0;
  background: linear-gradient(135deg, #2c4a3b, #1a3329);
  color: white;
  text-align: center;
}

.cta-title {
  font-size: 2.8rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
}

.cta-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.cta-option {
  background: rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.cta-option h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
}

/* Mobile responsive order swap for masterplan section */
@media (max-width: 768px) {
  .masterplan-container {
    display: flex;
    flex-direction: column;
  }

  .villa-selector {
    order: -1;
    /* Move villa selector above masterplan */
  }

  .masterplan-map {
    order: 1;
    /* Move masterplan below villa selector */
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;
  }

  .hero-content {
    padding: 0 1rem;
  }

  .hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  .investment-metrics {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    margin-bottom: 2.5rem;
  }

  .metric {
    padding: 1.5rem 1rem;
  }

  .metric-value {
    font-size: 1.8rem;
  }

  .metric-label {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .investment-metrics {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .masterplan-container,
  .calculator-container,
  .location-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title,
  .cta-title {
    font-size: 2.2rem;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .benefit-card {
    padding: 2rem;
  }

  .benefit-icon {
    font-size: 2.8rem;
    margin-bottom: 1.2rem;
  }

  .benefit-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .benefit-description {
    font-size: 1rem;
  }
}
</style>
