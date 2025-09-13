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
          <span class="analysis__map_sticker" :class="{ 'analysis__map_sticker--active': activeFilter === filter.id }"
            v-for="filter in filters" :key="filter.id" @click="changeActiveFilter(filter.id)">{{ filter.label }}</span>
        </div>
        <div class="analysis__map_map">
          <AppMap :filters="filters" :activeFilter="activeFilter" @changeActiveFilter="changeActiveFilter"
            :changeActiveFilter="changeActiveFilter" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import AppMap from '../AppMap.vue';
import type { IFilterMap } from '@/utils/types';

const activeFilter = ref<string | null>(null)

const filters = [
  { label: "WALKABLE", value: "walk", id: 'walk' },
  { label: "FREE SHUTTLE", value: "shuttle", id: 'shuttle' },
  { label: "BY CAR", value: "car", id: 'car' }
]

const changeActiveFilter = (id: string) => {
  activeFilter.value = id
}

onMounted(() => {
  changeActiveFilter('walk')
})
</script>

<style scoped lang="scss">
.analysis {
  padding: vw(45) vw(43) vw(40) vw(43);
  background-color: $gray-light;

  @include mobile {
    padding: vmin(25) vmin(10) vmin(28) vmin(10);
  }

  &__header {
    display: grid;
    grid-template-columns: 1fr 29%;
    justify-content: space-between;
    margin-bottom: vw(60);

    @include mobile {
      grid-template-columns: 1fr;
      margin-bottom: vmin(20);
    }
  }

  &__title-block {
    display: grid;
    width: fit-content;
    grid-row: 1 / 3;
    grid-column: 1;
    width: min-content;
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

    @include mobile {
      font-size: vmin(38);
      line-height: vmin(39);
    }
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

    @include mobile {
      font-size: vmin(32);
      line-height: vmin(48);
      margin-right: vmin(-43);
      margin-top: vmin(-29);
    }
  }

  &__description {
    text-wrap: balance;
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(16);
    line-height: 130%;
    letter-spacing: 0px;
    color: $black-light;

    @include mobile {
      max-width: 80%;
      font-size: vmin(12);
    }
  }

  &__content {}

  &__tile {
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    @include mobile {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__tile-item {
    display: grid;
    grid-template-columns: 88%;
    padding: vw(25);
    border: vw(1) solid $yellow-middle;
    border-radius: 0 vw(12) vw(12) 0;
    position: relative;
    background-color: $gray-light;

    @include mobile {
      grid-template-columns: 1fr;
      padding: vmin(14) vmin(17);
      border-radius: 0 vmin(7) vmin(7) 0;
      border: vmin(1) solid $yellow-middle;
      border-top: none;
    }

    &:nth-child(1),
    &:nth-child(2) {
      @include mobile {
        border-top: vmin(1) solid $yellow-middle;
      }
    }

    // &:not(.analysis__tile-item:nth-child(1)) {
    //   @include mobile {
    //     border-top: none;
    //   }
    // }

    // &:not(.analysis__tile-item:nth-child(2)) {
    //   @include mobile {
    //     border-top: none;
    //   }
    // }
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

    @include mobile {
      margin-left: 0;
      padding: vmin(14) vmin(17);
    }
  }

  &__tile-item:first-child {
    @include mobile {
      padding: vmin(14) vmin(17);
    }
  }

  &__tile-item:nth-child(2n) {
    margin-left: vw(-10);
    padding-left: vw(35);

    @include mobile {
      margin-left: vmin(-10);
      padding-left: vmin(28);
    }
  }

  &__time {
    position: absolute;
    right: vw(10);
    top: vw(10);
    font-family: 'Wix Madefor Display';
    font-weight: 400;
    font-size: vw(9);
    line-height: vw(11);
    letter-spacing: 0%;
    text-align: center;
    color: $white;
    background-color: $green-light;
    padding: vw(6) vw(9);
    border-radius: vw(53);
    display: flex;
    width: fit-content;

    @include mobile {
      padding: vmin(3) vmin(5);
      font-size: vmin(5);
      line-height: vmin(6);
      border-radius: vmin(33);
    }
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

    @include mobile {
      font-size: vmin(11);
      line-height: vmin(11);
      margin-bottom: vmin(8);
    }
  }

  &__benefit {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-style: Regular;
    font-size: vw(14);
    line-height: 130%;
    letter-spacing: 0px;
    color: $black-light;

    @include mobile {
      font-size: vmin(8);
    }
  }

  &__map {
    position: relative;

    @include mobile {
      margin-top: vmin(16);
    }

    &_stickers {
      position: absolute;
      left: vw(25);
      top: vw(25);
      display: flex;
      gap: vw(5);
      z-index: 1;

      @include mobile {
        left: vmin(10);
        top: auto;
        bottom: vmin(15);
        gap: vmin(5);
      }
    }

    &_sticker {
      cursor: pointer;
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

      @include mobile {
        font-size: vmin(6);
        line-height: vmin(8);
        padding: vmin(4) vmin(8) vmin(4);
        border-radius: vw(39);
      }

      &::before {
        display: inline-block;
        content: "";
        width: vw(5);
        height: vw(5);
        background-color: $yellow-dark;
        border-radius: 50%;
        margin-right: vw(7);

        @include mobile {
          width: vmin(3);
          height: vmin(3);
          margin-right: vmin(7);
        }
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

    &_sticker--active {
      background-color: #5F5C56 !important;
      color: $white !important;
    }

    &_map {
      width: 100%;
      border-radius: 0 0 vw(15) vw(15);
      overflow: hidden;
      aspect-ratio: 16 / 5;

      @include mobile {
        aspect-ratio: 1;
        border-radius: vmin(10);
      }

      img {
        border-radius: 0 0 vw(15) vw(15);
        width: 100%;
        height: 100%;
        object-fit: cover;

        @include mobile {
          border-radius: vmin(10);
        }
      }
    }
  }

}
</style>