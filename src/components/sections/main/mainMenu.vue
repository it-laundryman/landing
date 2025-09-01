<template>
  <div class="menu" ref="menu">
    <span class="menu__close" @click="$emit('close')"><img src="@/assets/images/close.svg" alt="close"></span>
    <nav class="menu__nav">
      <div class="menu__logo">
        <img src="@/assets/images/logo-menu.svg" alt="logo" class="menu__logo-img">
      </div>
      <ul class="menu__list">
        <li class="menu__item">
          <span class="menu__link">about us</span>
        </li>
        <li class="menu__item">
          <span class="menu__link">select residents</span>
        </li>
        <li class="menu__item">
          <span class="menu__link">Investment calculator</span>
        </li>
        <li class="menu__item">
          <span class="menu__link">location</span>
        </li>
      </ul>
      <div class="menu__contacts">
        <a href="tel:+6281245555555" class="menu__phone">+62 81 245 555 555</a>
        <UiButton class="menu__contact" variant="solid-yellow" shape="rounded" size="lg">Contact us</UiButton>
      </div>
    </nav>
    <div class="menu__background">
      <img class="menu__background-image" src="@/assets/images/bg-investment.svg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
interface IProps {
  isOpen: boolean
}
import { onClickOutside } from '@vueuse/core'
import UiButton from '@/components/ui/uiButton.vue';
import { ref } from 'vue';

const emit = defineEmits(['close'])
const props = defineProps<IProps>()

const menu = ref<HTMLElement>(null)

const closeMenu = () => {
  console.log(menu)
  if (props.isOpen) {
    emit('close')
  }
}


onClickOutside(
  menu,
  event => closeMenu(),
  { ignore: ['.header__burger'] },
)

defineExpose({ menu })
</script>

<style scoped lang="scss">
.menu {
  top: 0;
  left: 0;
  position: absolute;
  background-color: $green;
  padding: vw(30) vw(55) vw(50) vw(50);
  max-width: vw(450);
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 10;
  transition: transform .7s ease-in-out, visibility .7s ease-in-out;
  // opacity: 0;
  visibility: hidden;
  transform: translateX(-100vw);

  &.opened {
    // opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  &__background {
    position: absolute;
    bottom: -10vw;
    left: 0;
    width: 100%;
  }

  &__background-image {
    width: 100%;
    object-fit: contain;
  }

  &__close {
    cursor: pointer;
    position: absolute;
    z-index: 2;
    right: vw(30);
    top: vw(50);
    width: vw(40);
    height: vw(40);
    display: grid;
    justify-content: center;
    align-items: center;
    justify-items: center;

    border: vw(0.56) solid $yellow-middle;

    img {
      margin-top: vw(3);
      width: 80%;
      aspect-ratio: 1;
    }
  }

  &__nav {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }

  &__logo {
    width: vw(105);
    height: vw(115);
    margin-bottom: vw(30);
  }

  &__logo-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__list {
    list-style-type: none;
    padding-left: 0;
    margin-bottom: vw(30);
    display: flex;
    flex-direction: column;
    gap: vw(20);
  }

  &__item {}

  &__link {
    cursor: pointer;
    font-family: 'Agatho';
    font-weight: 400;
    font-size: vw(24);
    line-height: vw(36);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $white;
    transition: all .3s ease-in-out;

    &.active,
    &:hover {
      color: $yellow-middle;
    }

  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: vw(15);
  }

  &__phone {
    font-family: 'Agatho';
    font-weight: 700;
    font-style: Bold;
    font-size: vw(30);
    line-height: 100%;
    letter-spacing: 0px;
    color: $yellow-middle;
    text-decoration: none;
  }

  &__contact {
    width: fit-content;
    text-transform: uppercase;
  }
}
</style>