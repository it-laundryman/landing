<template>
  <div class="main-section">
    <div class="main-section_content">
      <div class="main-section__background"></div>
      <header class="header">
        <div class="header__burger" @click="toggleMenu">
          <span class="header__burger-line"></span>
          <span class="header__burger-line"></span>
        </div>

        <div class="header__logo">
          <img src="@/assets/images/logo.svg" width="145" height="160" alt="Verdana Residence" />
        </div>

        <div class="header__actions">
          <span class="header__lang">en</span>
          <UiButton class="header__btn" variant="solid-yellow" shape="rounded" size="lg">Contact us</UiButton>
        </div>
      </header>
    </div>
    <MainMenu :class="{ 'opened': isOpenMenu }" :isOpen="isOpenMenu" @close="toggleMenu" />
    <div class="main-info">
      <div class="main-info__content">
        <div class="main-info__title-wrapper">
          <h1 class="main-info__title">
            Invest<br />
            in VERDANA<br />Sanur
          </h1>
          <span class="main-info__description">Residences</span>
        </div>

        <div class="main-info__top">
          <p class="main-info__text">Invest in a premium Bali estate with turnkey management, transparent returns,
            and developer-direct access with full legal clarity.</p>
          <div class="main-info__actions">
            <UiButton class="main-info__button" variant="solid-yellow" shape="rounded" size="lg">Calculate Returns
            </UiButton>
            <UiButton class="main-info__button" variant="outline-transparent-yellow" shape="rounded" size="lg">View
              Presentation
            </UiButton>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import UiButton from '../ui/uiButton.vue';
import MainMenu from './main/mainMenu.vue';

const isOpenMenu = ref(false)

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<style scoped lang="scss">
.main-section {


  // height: calc(100vw / 2);
  height: calc(100svh - 200px);
  height: 100svh;
  padding: vw(30) vw(45) 0;
  // margin-bottom: 25%;



  &_content {
    position: relative;
    z-index: 2;
    margin: vw(-30) vw(-45) 0;
    padding: vw(30) vw(45) 0;
    // background-image: url('@/assets/images/background-home.png');
    // background-repeat: no-repeat;
    // background-size: cover;

    display: flex;
    flex-direction: column;
    height: 98svh;
  }

  &__background {
    z-index: 1;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    background-image: url('@/assets/images/background-home.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: calc(100svh - 12%);
  }
}


.header {
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  display: flex;
  // align-items: center;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 10;
  color: #fff;
}

/* бургер */
.header__burger {
  padding: vw(16) vw(25);
  border: vw(1.5) solid $yellow;
  border-radius: vw(50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: vw(6);
  cursor: pointer;
}

.header__burger-line {
  display: block;
  width: vw(20);
  height: vw(1);
  background-color: $yellow;
  border-radius: vw(2);
}

/* логотип */
.header__logo {
  flex: 1;
  display: flex;
  justify-content: center;
}

.header__logo img {
  width: vw(115);
  height: vw(130);
}

/* справа */
.header__actions {
  display: flex;
  align-items: center;
  gap: vw(20);
  margin-right: vw(-10);
}

.header__lang {
  color: #fff;
  font-family: "Plus Jakarta Sans";
  font-weight: 400;
  font-size: vw(20);
  line-height: 100%;
  letter-spacing: 0px;
}

.header__btn {
  background: $yellow;
  color: #000;
  padding: vw(12) vw(28);
  border-radius: vw(40);
  border: none;
  cursor: pointer;

  font-family: "Wix Madefor Display";
  font-weight: 400;
  font-style: "Regular";
  font-size: vw(14);
  line-height: vw(15);
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;

}

.main-info {
  position: relative;
  z-index: 2;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  left: vw(45);
  right: vw(45);
  display: grid;
  margin-bottom: 0;
  // padding-left: vw(45);
  // padding-right: vw(45);

  // width: calc(100% - vw(45));
  // width: 100%;
  // padding-right: vw(45);

  //  padding: vw(30) vw(45) 0;
  // height: ;

  &__content {
    position: relative;
    display: grid;
    grid-template-columns: 55% 45%;
  }

  &__title-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding-bottom: vw(65);
  }

  &__title {
    font-family: 'Agatho';
    font-weight: 500;
    font-size: vw(100);
    line-height: vw(89);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $white;
    grid-column: 1;
    grid-row: 1;
    align-self: start;
  }

  &__description {
    margin-bottom: vw(-6);
    margin-right: vw(180);
    grid-column: 1;
    grid-row: 1;
    align-self: end;
    justify-self: end;
    font-family: 'MonteCarlo';
    font-weight: 400;
    font-size: vw(52);
    line-height: vw(48);
    letter-spacing: 0px;
    color: $yellow;
    text-transform: initial;
    text-wrap: balance;
  }

  &__top {
    grid-column: 2;
    grid-row: 1;
    // display: grid;
    // justify-content: center;
    // justify-items: flex-end;
    position: relative;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: vw(48);
    margin-top: vw(35);
    align-items: flex-start;
    width: fit-content;
    justify-self: flex-end;
  }

  &__text {
    margin-left: vw(10);
    max-width: vw(370);
    font-family: 'Plus Jakarta Sans';
    font-size: vw(16);
    line-height: 100%;
    letter-spacing: 0px;
    color: $white;
  }

  &__actions {
    display: flex;
    align-items: flex-start;
    gap: vw(10);
  }

  &__button {
    font-family: 'Wix Madefor Display';
    text-transform: uppercase;
  }
}

.tile {
  grid-column: 1/3;
  grid-row: 3;
  display: flex;
  gap: vw(10);

  &__item {
    flex: 1;
    border: vw(1) solid rgb($yellow, 0.24);
    border-radius: vw(15);
    padding: vw(20) vw(45);
    display: flex;
    flex-direction: column;
    gap: vw(10);

  }

  &__count {
    font-family: 'Vollkorn';
    font-weight: 700;
    font-size: vw(40);
    line-height: 100%;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $yellow;
  }

  &__percent {
    font-family: 'Agatho';
    font-weight: 700;
    font-size: vw(40);
    line-height: 100%;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $yellow;
  }

  &__description {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(12);
    line-height: 100%;
    letter-spacing: 0px;
    color: rgb($white, 0.77);
  }
}


// .burger {
//   padding: vw(16) vw(25);
//   border: vw(1.5) solid #e6d1b4;
//   /* цвет обводки */
//   border-radius: vw(50);
//   /* скругление под "капсулу" */
//   display: inline-flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: vw(6);
//   /* расстояние между линиями */
//   cursor: pointer;
// }

// .burger span {
//   display: block;
//   width: vw(20);
//   height: vw(1);
//   background-color: #e6d1b4;
//   /* цвет линий */
//   border-radius: vw(2);
// }</style>