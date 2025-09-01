<template>
  <section class="analysis">
    <div class="analysis__header">
      <div class="analysis__title-block">
        <h2 class="analysis__heading">Strategic Analysis</h2>
        <span class="analysis__subheading">Location</span>
      </div>
      <p class="analysis__description">
        Verdana is ideally located in the heart of Sanur. It offers swift access to the amenities and lifestyle features
        most valued by both residents and renters.

      </p>
    </div>

    <div class="analysis__content">
      <div class="analysis__tile">
        <div class="analysis__tile-item">
          <span class="analysis__time">5 min</span>
          <p class="analysis__place">Bali International School</p>
          <p class="analysis__benefit">Drives family rentals and long-term value</p>
        </div>
        <div class="analysis__tile-item">
          <span class="analysis__time">7 min</span>
          <p class="analysis__place">International Hospital</p>
          <p class="analysis__benefit">attraction point for medical tourism</p>
        </div>
        <div class="analysis__tile-item">
          <span class="analysis__time">10 min</span>
          <p class="analysis__place">ICON<br />BALI Mall</p>
          <p class="analysis__benefit">Upscale retail adds lifestyle value and convenience</p>
        </div>
        <div class="analysis__tile-item">
          <span class="analysis__time">4 min</span>
          <p class="analysis__place">Sanur Beach</p>
          <p class="analysis__benefit">Safe, family-friendly, and always in demand</p>
        </div>
        <div class="analysis__tile-item">
          <span class="analysis__time">2 min</span>
          <p class="analysis__place">Local Markets & Dining</p>
          <p class="analysis__benefit">Authentic Bali vibes that guests love</p>
        </div>
      </div>
      <div class="analysis__map">
        <div class="analysis__map_stickers">
          <span class="analysis__map_sticker">WALKABLE</span>
          <span class="analysis__map_sticker">FREE SHUTLE</span>
          <span class="analysis__map_sticker">BY CAR</span>
        </div>
        <div class="analysis__map_map">
          <img src="@/assets/images/map.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.analysis {
  padding: vw(45) vw(43) vw(40) vw(43);
  background-color: $gray-light;

  &__header {
    display: grid;
    grid-template-columns: 1fr 29%;
    justify-content: space-between;
    margin-bottom: vw(60);
  }

  &__title-block {
    display: grid;
    width: fit-content;
    grid-row: 1 / 3;
    grid-column: 1;
  }

  &__heading {
    color: $black-second;
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
    margin-right: vw(-30);
    margin-top: vw(-32);
  }

  &__description {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(16);
    line-height: 100%;
    letter-spacing: 0px;
    color: $black-light;
  }

  &__content {}

  &__tile {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  &__tile-item {
    display: grid;
    grid-template-columns: 88%;
    padding: vw(25);
    border: vw(1) solid $yellow-middle;
    border-radius: 0 vw(12) vw(12) 0;
    position: relative;
    background-color: $gray-light;
  }

  &__tile-item:nth-child(1) {
    z-index: 5;
  }

  &__tile-item:nth-child(2) {
    z-index: 4;
  }

  &__tile-item:nth-child(3) {
    z-index: 3;
  }

  &__tile-item:nth-child(4) {
    z-index: 2;
  }

  &__tile-item:nth-child(5) {
    z-index: 1;
  }

  &__tile-item:not(:first-child) {
    margin-left: vw(-10);
    padding-left: vw(35);
  }

  &__time {
    position: absolute;
    right: vw(10);
    top: vw(10);
    font-family: 'Wix Madefor Display';
    font-weight: 400;
    font-size: vw(9);
    line-height: 11px;
    letter-spacing: 0%;
    text-align: center;
    color: $white;
    background-color: $green-light;
    padding: vw(6) vw(9);
    border-radius: vw(53);
    display: flex;
    width: fit-content;
  }

  &__place {
    text-wrap: balance;
    color: $yellow-middle;
    font-family: 'Agatho';
    font-weight: 500;
    font-style: Medium;
    font-size: vw(18);
    line-height: vw(18);
    letter-spacing: 0px;
    text-transform: uppercase;
    margin-bottom: vw(12);
  }

  &__benefit {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-style: Regular;
    font-size: vw(14);
    line-height: 100%;
    letter-spacing: 0px;
    color: $black-light;
  }

  &__map {
    position: relative;

    &_stickers {
      position: absolute;
      left: vw(25);
      top: vw(25);
      display: flex;
      gap: vw(5);
    }

    &_sticker {
      display: flex;
      align-items: center;
      font-family: 'Wix Madefor Display';
      font-weight: 400;
      font-size: vw(9);
      line-height: vw(11);
      letter-spacing: 0%;
      text-align: center;
      padding: vw(6) vw(13);
      border-radius: vw(53);
      background-color: $green-light;

      &::before {
        display: inline-block;
        content: "";
        width: vw(5);
        height: vw(5);
        background-color: $yellow-dark;
        border-radius: 50%;
        margin-right: vw(7);
      }
    }

    &_sticker:nth-child(1) {
      background-color: $green-light;
      color: $white;
    }

    &_sticker:nth-child(2) {
      background-color: $yellow-middle;
      color: $black-second;

      &::before {
        background-color: $green;
      }
    }

    &_sticker:nth-child(3) {
      background-color: $brown;
      color: $white;
    }

    &_map {
      width: 100%;
      aspect-ratio: 16 / 5;

      img {
        border-radius: 0 0 vw(15) vw(15);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

}
</style>