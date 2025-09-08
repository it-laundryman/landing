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
        <div class="calculator__filter">
          <UiButton class="calculator__button-flt" variant="outline-yellow" shape="rounded" size="md"
            @click="toggleFilters">filter Analysis
            Results
          </UiButton>
        </div>
        <Transition name="slide-left">
          <div class="calculator__fields" v-if="isHiddenFilters">
            <span class="calculator__fields-title">filter</span>
            <span class="calculator__fields-close" @click="toggleFilters"><img src="@/assets/images/close.svg"
                alt="close"></span>
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
                <UiButton class="calculator__field__button" variant="outline-yellow" shape="rounded" size="lg">
                  Optimistic
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
        </Transition>

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

import { computed, ref } from 'vue';
import IconPlus from '../icons/IconPlus.vue';
import UiButton from '../ui/uiButton.vue';
import { useBreakpoint } from "@/composables/useBreakpoint"

const { isMobile } = useBreakpoint()
const val = ref(1)
const isOpenFilters = ref(false);

const isHiddenFilters = computed(() => {
  if (!isMobile.value) {
    return true;
  } else {
    return isOpenFilters.value
  }
})
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

const toggleFilters = () => {
  if (isMobile.value) {
    isOpenFilters.value = !isOpenFilters.value
  }
}
</script>

<style scoped lang="scss">
:deep(.el-select__popper.el-popper) {
  border: vw(1) solid rgb($yellow, 0.26);
  background: #012210;
  box-shadow: var(--el-box-shadow-light);

  @include mobile {
    border: vmin(0.65) solid rgb($yellow, 0.26);
  }
}

.calculator {
  padding: vw(65) vw(43) vw(90);

  @include mobile {
    padding: vmin(40) vmin(10);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: vw(50);

    @include mobile {
      flex-direction: column;
      margin-bottom: vmin(20);
    }
  }

  &__title {
    font-family: 'Agatho';
    font-weight: 400;
    font-size: vw(56);
    line-height: vw(56);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $white;

    @include mobile {
      font-size: vmin(38);
      line-height: vmin(36);
    }
  }

  &__subtitle {
    font-family: 'MonteCarlo';
    font-weight: 400;
    font-size: vw(48);
    line-height: vw(65);
    letter-spacing: 0px;
    text-align: right;
    color: $yellow;

    @include mobile {
      font-size: vmin(32);
      line-height: vmin(42);
      margin-top: vmin(-20);
      margin-right: vmin(17);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 0.7fr 1fr;

    @include mobile {
      display: contents;
    }

  }

  &__button-flt {
    display: none;

    @include mobile {
      display: flex;
      font-family: 'Plus Jakarta Sans';
      font-weight: 400;
      font-size: vmin(9);
      line-height: vmin(9);
      letter-spacing: 0%;
      text-align: center;
      text-transform: uppercase;
      color: $white;
      padding: vmin(5) vmin(20);
      margin-bottom: vmin(20);
    }
  }

  &__fields {
    display: flex;
    flex-direction: column;
    gap: vw(25);

    @include mobile {
      overflow-y: auto;
      max-height: 100%;
      gap: vmin(20);
      min-width: vmin(320);
      background-color: $green;
      padding: vmin(25);
      // display: none;
      z-index: 10;
      position: fixed;
      left: 0;
      // width: 100%;
      top: 0;

      // TODO: add modal
    }

    &-title {
      display: none;
      font-family: 'Agatho';
      font-weight: 400;
      font-size: vmin(32);
      line-height: vmin(36);
      letter-spacing: 0px;
      text-transform: uppercase;
      color: $white;
      margin-bottom: vmin(15);

      @include mobile {
        display: block;
      }
    }

    &-close {
      display: none;
      cursor: pointer;
      position: absolute;
      z-index: 2;
      right: vw(30);
      top: vw(50);
      width: vw(40);
      height: vw(40);
      justify-content: center;
      align-items: center;
      justify-items: center;

      border: vw(0.56) solid $yellow-middle;

      @include mobile {
        display: grid;
        right: vmin(15);
        top: vmin(15);
        width: vmin(25);
        height: vmin(25);
        border: vmin(0.56) solid $yellow-middle;
      }

      img {
        margin-top: vw(3);
        width: 80%;
        aspect-ratio: 1;

        @include mobile {
          margin-top: vmin(2);
          width: 80%;
        }
      }
    }
  }

  &__intro {
    padding-right: vw(98);
    display: flex;
    flex-direction: column;
    gap: vw(25);

    @include mobile {
      gap: vmin(15);
      padding-right: 0;
    }
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

    @include mobile {
      font-size: vmin(12);
      line-height: vmin(14);
    }
  }

  &__field {
    width: 100%;
    display: grid;
    gap: vw(20);

    @include mobile {
      gap: vmin(8);
    }
  }

  &__field__buttons {
    display: flex;
    gap: vw(8);

    @include mobile {
      gap: vmin(10);
    }
  }

  &__field__button {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(14);
    line-height: vw(15);
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;

    @include mobile {
      font-size: vmin(9);
      line-height: vmin(9);
      padding: vmin(8) vmin(15);
    }
  }

  &__label {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(17);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;

    @include mobile {
      font-size: vmin(11);
      line-height: vmin(14);
    }
  }

  &__select {
    --el-fill-color-blank: transparent;
    --el-border-color: transparent;
    --el-select-input-color: #{$yellow};
    --el-select-input-focus-border-color: transparent;

    border-bottom: vw(1) solid $yellow;

    @include mobile {
      border-bottom: vmin(0.65) solid $yellow;
    }

    :deep(.el-select__wrapper) {
      padding: vw(4) vw(6) vw(12) 0;

      @include mobile {
        padding: vmin(4) vmin(6) vmin(12) 0;
      }
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

      @include mobile {
        font-size: vmin(9);
        line-height: vmin(9);
      }
    }

    :deep(.el-select__caret) {
      width: vw(14);
      height: vw(8);

      @include mobile {
        width: vmin(7);
        height: vmin(3);
      }
    }

    :deep(.el-icon svg) {
      width: vw(14);
      height: vw(8);

      @include mobile {
        width: vmin(7);
        height: vmin(3);
      }
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

    @include mobile {
      gap: vmin(10);
      font-size: vmin(9);
      line-height: vmin(9);
    }

    :deep(.el-radio) {
      margin-right: 0;
    }

    :deep(.el-radio__inner) {
      --el-radio-input-height: #{vw(20)};
      --el-radio-input-width: #{vw(20)};
      --el-radio-input-bg-color: transparent;
      --el-radio-input-border: #{vw(1)} solid #{$yellow};

      @include mobile {
        --el-radio-input-height: #{vmin(14)};
        --el-radio-input-width: #{vmin(14)};
        --el-radio-input-border: #{vmin(0.65)} solid #{$yellow};
      }
    }

    :deep(.el-radio__label) {
      font-size: vw(14);
      padding-left: vw(10);

      @include mobile {
        font-size: vmin(9);
        padding-left: vmin(5);
      }
    }

    :deep(.el-radio__inner:after) {
      // position: absolute;
      height: vw(10);
      width: vw(10);
      // left: 50%;
      // top: 50%;
      // transform: translate(-50%, -50%) scale(0);
      transition: transform .15s ease-in;

      @include mobile {
        height: vmin(6);
        width: vmin(6);
      }
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

    @include mobile {
      border: vmin(1) solid rgb($yellow, 0.26);
      padding: vmin(5);
      border-radius: vmin(9);
      display: grid;
      gap: vmin(5);
    }
  }

  &__results-item {
    border: vw(1) solid rgb($yellow, 0.26);
    padding: vw(30);
    border-radius: vw(15);
    display: flex;
    gap: vw(70);
    justify-content: space-between;

    @include mobile {
      border: vmin(1) solid rgb($yellow, 0.26);
      padding: vmin(13) vmin(10);
      border-radius: vmin(7);
      display: flex;
      gap: vmin(10);
    }

    &:first-child {
      @include mobile {
        flex-direction: column;
      }
    }
  }

  &__chart {
    @include mobile {}
  }

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

    @include mobile {
      display: inline-block;
      flex: 1;
      max-width: 55%;
      font-size: vmin(16);
      line-height: vmin(16);
    }
  }

  &__chart-desc {
    text-wrap: balance;
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(16);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
    flex: 0 1 50%;

    @include mobile {
      font-size: vmin(10);
      line-height: vmin(14);
      flex: 1;
    }
  }

  &__result {}

  &__result-label {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(17);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;

    @include mobile {
      font-size: vmin(10);
      line-height: vmin(14);
    }
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

    @include mobile {
      font-size: vmin(16);
    }
  }

  &__note {
    margin-top: vw(15);
    margin-bottom: vw(20);
    padding-left: vw(30);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: vw(28);
    align-items: start;

    @include mobile {
      grid-template-columns: 1fr;
      margin-top: vmin(15);
      margin-bottom: vmin(5);
      padding-left: vmin(10);
      padding-right: vmin(10);
      gap: vmin(20);
    }
  }

  &__note-text {
    font-family: 'Vollkorn500';
    font-weight: 500;
    font-style: Italic;
    font-size: vw(16);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;

    @include mobile {
      font-size: vmin(10);
      line-height: vmin(14);
    }
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

    @include mobile {
      width: calc(100% + vmin(20));
      padding-top: vmin(10);
      padding-bottom: vmin(10);
      font-size: vmin(9);
      line-height: vmin(9);
      margin-left: vmin(-10);
    }
  }
}
</style>