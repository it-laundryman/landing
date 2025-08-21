<template>
  <section class="delivery">
    <div class="delivery__container">
      <div class="delivery__header">
        <div class="delivery__title-container">
          <div class="delivery__title-wrapper">
            <h2 class="delivery__heading">Why VERDANA Delivers Superior Returns</h2>
            <span class="delivery__subheading">grade investment</span>
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
          <span class="delivery__item-title">Guaranteed Rental Management</span>
          <p class="delivery__item-text">
            Professional rental optimization with guaranteed occupancy rates and transparent revenue sharing. Complete
            hands-off investment experience.
          </p>
        </div>
        <div class="delivery__item">
          <span class="delivery__item-title">Premium Location Appreciation</span>
          <p class="delivery__item-text">
            Sanur's 99% development completion ensures scarcity value. Historical 8-12% annual appreciation with strong
            future growth prospects.
          </p>
        </div>
        <div class="delivery__item">
          <span class="delivery__item-title">Tax Optimization Structure</span>
          <p class="delivery__item-text">
            Compliant ownership structure optimized for international investors. Professional tax planning and legal
            compliance included.
          </p>
        </div>
        <div class="delivery__item">
          <span class="delivery__item-title">Complete Legal Compliance</span>
          <p class="delivery__item-text">
            Institutional-level documentation, government permits, and transparent legal structure. Full due diligence
            support provided.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.delivery {
  background-color: $gray-light;
  padding: vw(30) vw(45) vw(45) vw(45);

  &__container {
    position: relative;
    border-left: vw(1) solid $yellow;
    border-right: vw(1) solid $yellow;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: vw(-45);
      right: vw(-45);
      height: vw(1);
      background-color: $yellow;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: vw(-45);
      right: vw(-45);
      height: vw(1);
      background-color: $yellow;
    }
  }

  &__header {
    padding: vw(50) vw(45);
    display: flex;
    gap: vw(10);
  }

  &__title-container {
    flex: 0 1 70%;
  }

  &__title-wrapper {
    width: min-content;
    display: grid;
    align-items: flex-end;
  }

  &__heading {
    font-family: 'Vollkorn';
    font-size: vw(48);
    line-height: vw(57);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $black;
    grid-row: 1;
    grid-column: 1;
  }

  &__subheading {
    font-family: 'Bikham Cyr Script';
    font-weight: 400;
    font-size: vw(65);
    line-height: 1;
    letter-spacing: 0px;
    color: $yellow;
    display: inline-block;
    grid-row: 1;
    grid-column: 1;
    position: relative;
    margin-left: auto;
    bottom: vw(-20);
    right: vw(-5);
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
    border-top: vw(1) solid $yellow;
  }

  &__item {
    padding: vw(45) vw(40);
    position: relative;

    &::after {
      position: absolute;
      top: 0;
      transform: translateY(-50%) translateX(-50%);
      left: vw(45);
      width: vw(22);
      height: vw(22);
      content: "";
      border-radius: 50%;
      background-color: $yellow;
    }
  }

  &__item:not(:last-child) {
    border-right: vw(1) solid $yellow;
  }

  &__item-title {
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