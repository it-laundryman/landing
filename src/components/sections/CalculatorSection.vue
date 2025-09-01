<template>
  <section class="calculator">
    <div class="calculator__header">
      <h4 class="calculator__title">Investment Calculator</h4>
      <span class="calculator__subtitle">Calculate detailed</span>
    </div>

    <div class="calculator__content">
      <div class="calculator__intro">
        <p class="calculator__description">
          Calculate your detailed returns including taxes, management fees, and seasonal
          variations. Real-time analysis based on current market conditions.
        </p>
        <div class="calculator__field">
          <span class="calculator__label">Construction Phase</span>
          <el-select v-model="val" placeholder="Select" class="calculator__select" :suffix-icon="IconPlus">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="calculator__field">
          <span class="calculator__label">Villa Unit Selection</span>
          <el-select v-model="val" placeholder="Select" class="calculator__select" :suffix-icon="IconPlus">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="calculator__field">
          <span class="calculator__label">Choose Type of Finish</span>
          <div class="calculator__field__buttons">
            <UiButton class="calculator__field__button" variant="outline-yellow" shape="rounded" size="lg">premium
            </UiButton>
            <UiButton class="calculator__field__button" variant="outline-yellow" shape="rounded" size="lg">balanced
            </UiButton>
          </div>

        </div>
        <div class="calculator__field">
          <span class="calculator__label">Rental Strategy</span>
          <el-select v-model="val" placeholder="Select" class="calculator__select" :suffix-icon="IconPlus">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <div class="calculator__field">
          <span class="calculator__label">ADR Scenario</span>
          <div class="calculator__field__buttons">
            <UiButton class="calculator__field__button" variant="outline-yellow" shape="rounded" size="lg">Optimistic
            </UiButton>
            <UiButton class="calculator__field__button" variant="outline-yellow" shape="rounded" size="lg">Base
            </UiButton>
          </div>
        </div>
        <div class="calculator__field">
          <span class="calculator__label">Display Currency</span>
          <el-radio-group class="calculator__radio" v-model="val">
            <!-- works when >=2.6.0, recommended ✔️ not work when <2.6.0 ❌ -->
            <el-radio value="Value 1">Indonesian Rupiah (IDR)</el-radio>
            <!-- works when <2.6.0, deprecated act as value when >=3.0.0 -->
            <el-radio label="Label 2 & Value 2">US Dollar (USD)</el-radio>
          </el-radio-group>
        </div>
      </div>

      <div class="calculator__results">
        <div class="calculator__results-item calculator__chart">
          <span class="calculator__chart-label">Investment Analysis Results</span>
          <p class="calculator__chart-desc">Investment Parameters: Analysis based on N/A occupancy rate, 0% marketing
            fee, 30% management fee. Net monthly proceedings: IDR 0. Calculations reflect current market conditions and
            selected rental strategy.</p>
        </div>

        <div class="calculator__results-item calculator__result">
          <span class="calculator__result-label">Purchase Price</span>
          <span class="calculator__result-value">$287 149,39</span>
        </div>

        <div class="calculator__results-item calculator__result">
          <span class="calculator__result-label">Monthly ROI</span>
          <span class="calculator__result-value">0,82%</span>
        </div>

        <div class="calculator__results-item calculator__result">
          <span class="calculator__result-label">Annualised ROI</span>
          <span class="calculator__result-value">10,26%</span>
        </div>

        <div class="calculator__results-item calculator__result">
          <span class="calculator__result-label">Payback Period</span>
          <span class="calculator__result-value">10,19 years</span>
        </div>

        <div class="calculator__note">
          <p class="calculator__note-text">
            Note: The information provided is theoretical data for which is not responsible.
            Decisions are made by the user independently at their own risk.
            This is not an investment recommendation.
          </p>
          <UiButton variant="solid-yellow" shape="rounded" size="lg" class="calculator__button">
            Detailed Financial Analysis
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import IconPlus from '../icons/IconPlus.vue';
import UiButton from '../ui/uiButton.vue';
const val = ref(1)
const options = [
  {
    value: 'Phase 2 (Mid Construction - 5% Discount)',
    label: 'Phase 2 (Mid Construction - 5% Discount)',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style scoped lang="scss">
:deep(.el-select__popper.el-popper) {
  border: vw(1) solid rgb($yellow, 0.26);
  background: #012210;
  box-shadow: var(--el-box-shadow-light);
}

.calculator {
  padding: vw(65) vw(43) vw(90);

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: vw(50);
  }

  &__title {
    font-family: 'Agatho';
    font-weight: 400;
    font-size: vw(56);
    line-height: vw(56);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $white;
  }

  &__subtitle {
    font-family: 'MonteCarlo';
    font-weight: 400;
    font-size: vw(48);
    line-height: vw(65);
    letter-spacing: 0px;
    text-align: right;
    color: $yellow;
  }

  &__content {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
  }

  &__intro {
    padding-right: vw(98);
    display: flex;
    flex-direction: column;
    gap: vw(25);
  }

  &__description {
    margin-top: vw(-25);
    margin-bottom: vw(25);
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(16);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }

  &__field {
    width: 100%;
    display: grid;
    gap: 20px;
  }

  &__field__buttons {
    display: flex;
    gap: vw(15);
  }

  &__field__button {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(14);
    line-height: vw(15);
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
  }

  &__label {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(17);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }

  &__select {
    --el-fill-color-blank: transparent;
    --el-border-color: transparent;
    --el-select-input-color: #{$yellow};
    --el-select-input-focus-border-color: transparent;

    border-bottom: vw(1) solid $yellow;

    :deep(.el-select__wrapper) {
      padding: vw(4) vw(6) vw(12) 0;
    }

    :deep(.el-select__wrapper.is-focused) {
      box-shadow: none;
    }

    :deep(.el-select__wrapper.is-hovering:not(.is-focused)) {
      box-shadow: none;
    }

    :deep(.el-select__placeholder) {
      font-family: 'Plus Jakarta Sans';
      font-weight: 400;
      font-size: vw(14);
      line-height: vw(15);
      letter-spacing: 0%;
      text-transform: uppercase;
      color: $yellow;
    }

    :deep(.el-select__caret) {
      width: vw(14);
      height: vw(8);
    }

    :deep(.el-icon svg) {
      width: vw(14);
      height: vw(8);
    }
  }

  &__radio {
    --el-color-primary: #{$yellow};
    --el-text-color-regular: #{$yellow};


    display: flex;
    flex-wrap: wrap;
    gap: vw(15);
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(14);
    line-height: vw(15);
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;

    :deep(.el-radio) {
      margin-right: 0;
    }

    :deep(.el-radio__inner) {
      --el-radio-input-height: #{vw(20)};
      --el-radio-input-width: #{vw(20)};
      --el-radio-input-bg-color: transparent;
      --el-radio-input-border: #{vw(1)} solid #{$yellow};
    }

    :deep(.el-radio__label) {
      font-size: vw(14);
      padding-left: vw(10);
    }

    :deep(.el-radio__inner:after) {
      // position: absolute;
      height: vw(10);
      width: vw(10);
      // left: 50%;
      // top: 50%;
      // transform: translate(-50%, -50%) scale(0);
      transition: transform .15s ease-in;
    }

    :deep(.el-radio__input.is-checked .el-radio__inner) {
      background: transparent;
    }

    :deep(.el-radio__input.is-checked .el-radio__inner:after) {
      background-color: #{$yellow};
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &__results {
    border: vw(1) solid rgb($yellow, 0.26);
    padding: vw(10);
    border-radius: vw(15);
    display: grid;
    gap: vw(10);
  }

  &__results-item {
    border: vw(1) solid rgb($yellow, 0.26);
    padding: vw(30);
    border-radius: vw(15);
    display: flex;
    gap: vw(70);
    justify-content: space-between;
  }

  &__chart {}

  &__chart-label {
    font-family: 'Agatho';
    font-weight: 500;
    font-style: Medium;
    font-size: vw(26);
    line-height: vw(30);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $yellow;
    flex: 0 1 50%;
  }

  &__chart-desc {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(16);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
    flex: 0 1 50%;
  }

  &__result {}

  &__result-label {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(17);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }

  &__result-value {
    font-family: 'Vollkorn';
    font-weight: 400;
    font-size: vw(24);
    line-height: 100%;
    letter-spacing: 0px;
    text-align: right;
    text-transform: uppercase;
    color: $yellow;
  }

  &__note {
    margin-top: vw(20);
    margin-bottom: vw(20);
    padding-left: vw(30);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: vw(28);
    align-items: start;
  }

  &__note-text {
    font-family: 'Vollkorn500';
    font-weight: 500;
    font-style: Italic;
    font-size: vw(16);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }

  &__button {
    width: fit-content;
    padding-top: vw(20);
    padding-bottom: vw(20);
    align-self: center;
    font-family: 'Wix Madefor Display';
    font-weight: 400;
    font-size: vw(14);
    line-height: vw(15);
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    color: $black;
  }
}
</style>