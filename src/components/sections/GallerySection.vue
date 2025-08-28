<template>
  <section class="gallery">
    <div class="gallery__container">
      <div class="gallery__list-container">
        <h5 class="gallery__title">True luxury</h5>
        <div class="gallery__list">
          <div class="gallery__item">
            <img src="@/assets/images/gallery-image-1.png" alt="" class="gallery__img">
          </div>
          <div class="gallery__item">
            <img src="@/assets/images/gallery-image-2.png" alt="" class="gallery__img">
          </div>
          <div class="gallery__item">
            <img src="@/assets/images/gallery-image-3.png" alt="" class="gallery__img">
          </div>
        </div>
      </div>


      <UiButton class="gallery__button" variant="solid-green" shape="circle" size="lg">
        <span class="gallery__button-text">LEARN MORE</span>
      </UiButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiButton from '../ui/uiButton.vue';

</script>

<style scoped lang="scss">
.gallery {
  padding-top: vw(60);

  &__container {
    position: relative;
    z-index: 1;
  }

  &__title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;

    font-family: 'MonteCarlo';
    font-weight: 400;
    font-size: vw(96);
    line-height: vw(65);
    letter-spacing: 0px;
    text-align: center;
    color: $yellow;
  }

  &__list-container {
    width: 100%;
    overflow: hidden; // скрываем лишнее за пределами
    margin-bottom: vw(40);
    position: relative;
  }

  &__list {
    display: flex;
    gap: vw(35);
    will-change: transform;
    transition: transform 0.3s ease;
    width: max-content;
    position: relative;
  }

  &__item {
    // position: absolute;
    // flex: 0 0 auto;
    // flex: 1;
  }

  &__img {
    width: vw(619);
    height: initial;
    aspect-ratio: 619 / 550;
    border-radius: vw(15);
  }

  &__button {
    position: absolute;
    left: 50%;
    bottom: -15%;
    transform: translateX(-50%) translateY(15%);
    aspect-ratio: 1;
    height: vw(160);
    border: vw(2) solid $yellow;
    // position: absolute;
    // left: 50%;
  }

  &__button-text {

    font-family: 'Plus Jakarta Sans';
    font-size: vw(17);
    line-height: vw(18);
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    width: min-content;
    color: $white;
  }
}
</style>