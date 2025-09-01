<template>
  <section class="perfomance">
    <div class="perfomance__header">
      <div class="perfomance__title-block">
        <h2 class="perfomance__heading">Market Performance & Projections</h2>
        <span class="perfomance__subheading">Future projections</span>
      </div>
      <p class="perfomance__description">
        Historical performance and forward-looking projections from Sanur’s real estate and tourism growth trends.
      </p>
    </div>
    <div class="perfomance__list">
      <div class="perfomance__item">
        <span class="perfomance__item-count">8.5<span class="perfomance__item-percent">%</span></span>
        <p class="perfomance__item-decription">Historical Annual Appreciation</p>
        <UiButton class="perfomance__item-button" variant="solid-yellow" size="md" shape="rounded">
          <IconArrowTopRight /><span>Consistent growth since 2018</span>
        </UiButton>
      </div>
      <div class="perfomance__item">
        <span class="perfomance__item-count">78<span class="perfomance__item-percent">%</span></span>
        <p class="perfomance__item-decription">Average Annual Occupancy</p>
        <UiButton class="perfomance__item-button" variant="solid-yellow" size="md" shape="rounded">
          <IconArrowTopRight /><span> +12% vs 2019 levels</span>
        </UiButton>
      </div>
      <div class="perfomance__item">
        <span class="perfomance__item-count">$285</span>
        <p class="perfomance__item-decription">Average Daily Rate (ADR)</p>
        <UiButton class="perfomance__item-button" variant="solid-yellow" size="md" shape="rounded">
          <IconArrowTopRight /><span>Premium market positioning</span>
        </UiButton>
      </div>
      <div class="perfomance__item">
        <span class="perfomance__item-count">12<span class="perfomance__item-percent">%</span></span>
        <p class="perfomance__item-decription">Projected Net Yield</p>
        <UiButton class="perfomance__item-button" variant="solid-yellow" size="md" shape="rounded">
          <IconArrowTopRight /><span>Conservative estimate</span>
        </UiButton>
      </div>
      <div class="perfomance__item">
        <span class="perfomance__item-count">99<span class="perfomance__item-percent">%</span></span>
        <p class="perfomance__item-decription">Sanur Development Completion</p>
        <UiButton class="perfomance__item-button" variant="solid-yellow" size="md" shape="rounded">
          <IconArrowTopRight /><span>Scarcity value protection</span>
        </UiButton>
      </div>
      <div class="perfomance__item">
        <span class="perfomance__item-count">15M<span class="perfomance__item-percent">+</span></span>
        <p class="perfomance__item-decription">Annual Bali Visitors</p>
        <UiButton class="perfomance__item-button" variant="solid-yellow" size="md" shape="rounded">
          <IconArrowTopRight /><span>Growing tourism demand</span>
        </UiButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconArrowTopRight from '../icons/IconArrowTopRight.vue';
import UiButton from '../ui/uiButton.vue';


</script>

<style scoped lang="scss">
.perfomance {
  padding: vw(45) vw(43) vw(40) vw(43);

  &__header {
    display: grid;
    grid-template-columns: 1fr 24%;
    justify-content: space-between;
    margin-bottom: vw(60);
  }

  &__title-block {
    display: grid;
    width: fit-content;
    grid-row: 1 / 3;
    grid-column: 1;
    width: 67%;
  }

  &__heading {
    text-wrap: balance;
    color: $white;
    font-family: 'Agatho';
    font-weight: 500;
    font-style: Medium;
    font-size: vw(56);
    line-height: vw(56);
    letter-spacing: 0px;
    text-transform: uppercase;
  }

  &__subheading {
    font-family: 'MonteCarlo';
    font-weight: 400;
    font-size: vw(48);
    line-height: vw(65);
    letter-spacing: 0px;
    color: $yellow-middle;

    display: inline-block;
    margin-left: auto;
    margin-top: vw(-65);
    margin-right: vw(-55);
  }

  &__description {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(16);
    line-height: 100%;
    letter-spacing: 0px;
    color: $white;
  }

  &__list {
    border: vw(1) solid rgb($yellow, 0.26);
    border-radius: vw(15);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  &__item {
    aspect-ratio: 3 / 2;
    padding: vw(35) vw(55);
    display: flex;
    flex-direction: column;
    /* Добавляем внутренние границы */
    border-right: vw(1) solid rgb($yellow, 0.26);
    border-bottom: vw(1) solid rgb($yellow, 0.26);

    /* Убираем границы у последних элементов в ряду */
    &:nth-child(3n) {
      border-right: none;
    }

    /* Убираем границы у последнего ряда */
    &:nth-last-child(-n+3) {
      border-bottom: none;
    }
  }

  &__item-count {
    font-family: 'Agatho';
    font-weight: 500;
    font-size: vw(64);
    line-height: 100%;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $yellow-light;
    display: inline-block;
  }

  &__item-percent {
    font-family: 'Vollkorn';
  }

  &__item-decription {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(14);
    line-height: 100%;
    letter-spacing: 0px;
    color: $white;
  }

  &__item-button {
    margin-top: auto;
    width: fit-content;
    display: flex;
    gap: vw(8);
    padding-left: vw(15);
    padding-right: vw(15);

    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(12);
    line-height: vw(15);
    letter-spacing: 0%;

    svg {
      width: vw(10);
    }
  }

}
</style>