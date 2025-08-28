<template>
  <section class="secure">
    <div class="secure__header">
      <div class="secure__title-block">
        <h2 class="secure__heading">Secure Your<br />VERDANA Investment Position</h2>
        <span class="secure__subheading">Premium location</span>
      </div>
      <div class="secure__header-content">
        <p class="secure__description">Limited availability: Only 11 exclusive units in Bali's premium location.
          Professional investment team ready to guide you through the complete process.</p>
        <UiButton class="secure__button" variant="solid-yellow" size="md" shape="rounded">
          Explore Complete VERDANA Experience </UiButton>
      </div>
    </div>
    <div class="secure__list">
      <div class="secure__item">
        <UiCircle>
          <template #content>
            <div class="secure__item-content">
              <span class="secure__item-title">Schedule<br />Investment Consultation</span>
              <p class="secure__item-description"> Comprehensive analysis with our investment specialists. Review
                financial
                projections, legal structure, and complete documentation. </p>
            </div>
          </template>
        </UiCircle>
      </div>
      <div class="secure__item">
        <UiCircle>
          <template #content>
            <div class="secure__item-content">
              <span class="secure__item-title">Request
                Financial Model</span>
              <p class="secure__item-description">Detailed investment analysis including cash flow projections, tax
                implications, and scenario planning for informed decisions.
              </p>
            </div>
          </template>
        </UiCircle>
      </div>
      <div class="secure__item">
        <UiCircle>
          <template #content>
            <div class="secure__item-content">
              <span class="secure__item-title">Book<br />Site Visit
              </span>
              <p class="secure__item-description">Experience VERDANA in person with guided tour of show units, location
                analysis, and investment facilities overview.
              </p>
            </div>
          </template>
        </UiCircle>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiButton from '../ui/uiButton.vue';
import UiCircle from '../ui/uiCircle.vue';


</script>

<style scoped lang="scss">
.secure {
  padding: vw(45) vw(43) 0 vw(43);
  margin-bottom: vw(-45);
  overflow: hidden;

  &__header {
    display: grid;
    grid-template-columns: 1fr 28%;
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
    margin-right: vw(65);
    margin-top: vw(-65);
  }

  &__header-content {}

  &__description {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(16);
    line-height: 100%;
    letter-spacing: 0px;
    color: $white;
  }

  &__button {
    padding-top: vw(15);
    padding-bottom: vw(15);
    margin-top: vw(20);
    font-family: 'Wix Madefor Display';
    font-weight: 400;
    font-size: vw(14);
    line-height: vw(15);
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    color: $black;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: vw(45) vw(105);
    margin: vw(-45);
    overflow: hidden;
  }

  &__item {
    width: 100%;
    aspect-ratio: 1;
    position: relative;

    &::before {
      z-index: 0;
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: vw(1) solid $yellow;
    }

    &::after {
      z-index: 0;
      position: absolute;
      content: "";
      width: vw(24);
      height: vw(24);
    }
  }

  &__item-content {
    width: 100%;
    aspect-ratio: 1;
    padding: vw(67) vw(65) vw(65) vw(67);
    display: flex;
    flex-direction: column;
  }

  &__item-title {
    text-wrap: balance;
    font-family: 'Agatho';
    font-weight: 500;
    font-style: Medium;
    font-size: vw(26);
    line-height: vw(27);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $yellow-light;
    margin-bottom: vw(20);
    display: inline-block;
  }

  &__item-description {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(16);
    line-height: 100%;
    letter-spacing: 0px;
    color: $white;
  }
}
</style>