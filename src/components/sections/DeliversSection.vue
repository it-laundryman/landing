<template>
  <section class="delivery">
    <div class="delivery__container">
      <div class="delivery__header">
        <div class="delivery__title-container">
          <div class="delivery__title-wrapper">
            <h2 class="delivery__heading">Why VERDANA Delivers Superior Returns</h2>
            <span class="delivery__subheading"><span>grade</span> <span>investment</span></span>
          </div>
        </div>

        <div class="delivery__intro">
          <p class="delivery__intro-text">
            Institutional-grade investment opportunity with complete transparency, professional management, and
            performance in Bali's premium market.
          </p>
        </div>
      </div>
      <div class="delivery__tile">
        <div class="delivery__item">
          <UiCircle>
            <template #content>
              <div class="delivery__item-content">
                <span class="delivery__item-title">Guaranteed Rental Management</span>
                <p class="delivery__item-text">
                  Professional rental optimization with guaranteed occupancy rates and transparent revenue sharing.
                  Complete
                  hands-off investment experience.
                </p>
              </div>
            </template>
          </UiCircle>
        </div>
        <div class="delivery__item">
          <UiCircle>
            <template #content>
              <div class="delivery__item-content">
                <span class="delivery__item-title">Premium Location Appreciation</span>
                <p class="delivery__item-text">
                  Sanur's 99% development completion ensures scarcity value. Historical 8-12% annual appreciation with
                  strong
                  future growth prospects.
                </p>
              </div>
            </template>
          </UiCircle>
        </div>
        <div class="delivery__item">
          <UiCircle>
            <template #content>
              <div class="delivery__item-content">
                <span class="delivery__item-title">Tax Optimization Structure</span>
                <p class="delivery__item-text">
                  Compliant ownership structure optimized for international investors. Professional tax planning and
                  legal
                  compliance included.
                </p>
              </div>
            </template>
          </UiCircle>

        </div>
        <div class="delivery__item">
          <UiCircle>
            <template #content>
              <div class="delivery__item-content">
                <span class="delivery__item-title">Complete<br />Legal<br />Compliance</span>
                <p class="delivery__item-text">
                  Institutional-level documentation, government permits, and transparent legal structure. Full due
                  diligence
                  support provided.
                </p>
              </div>
            </template>
          </UiCircle>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiCircle from '../ui/uiCircle.vue';


</script>

<style scoped lang="scss">
.delivery {
  background-color: $gray-light;
  padding: vw(30) vw(45) vw(45) vw(45);

  &__container {
    position: relative;

  }

  &__header {
    padding: vw(50) 0;
    display: flex;
    gap: vw(10);
  }

  &__title-container {
    flex: 0 1 70%;
  }

  &__title-wrapper {
    display: grid;
    align-items: flex-end;
    width: 76%;
  }

  &__heading {
    font-family: 'Agatho';
    font-weight: 500;
    font-size: vw(56);
    line-height: vw(56);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $black;
    grid-row: 1;
    grid-column: 1;

  }

  &__subheading {

    font-family: 'MonteCarlo';
    font-weight: 400;
    font-size: vw(52);
    line-height: vw(48);
    letter-spacing: 0px;
    color: $yellow;
    display: inline-block;
    grid-row: 1;
    grid-column: 1;
    position: relative;
    margin-left: auto;
    bottom: vw(-20);
    right: vw(50);

    span:first-child {
      text-transform: capitalize;
    }
  }

  &__intro {
    flex: 0 1 30%;
  }

  &__intro-text {
    font-family: 'Wix Madefor Display';
    font-size: vw(17);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $black-light;
  }

  &__tile {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: vw(40);
    margin: vw(-40);
    overflow: hidden;
  }

  &__item {
    width: 100%;
    aspect-ratio: 1;
    position: relative;
  }

  &__item-content {
    display: flex;
    flex-direction: column;
    padding: vw(45) vw(40);
    padding: vw(60) vw(40);
    width: 100%;
    height: 100%;
  }

  &__item-title {
    text-wrap: balance;
    font-family: 'Vollkorn';
    font-size: vw(24);
    line-height: vw(30);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $yellow;
    display: block;
    margin-bottom: vw(10);
  }

  &__item-text {
    font-family: 'Wix Madefor Display';
    font-size: vw(14);
    line-height: 100%;
    letter-spacing: 0px;
    color: $black-light;
  }
}
</style>