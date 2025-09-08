<template>
  <div class="modal">
    <div class="modal__content">

      <div class="modal__container" ref="modalContainer">
        <span class="modal__close" @click="$emit('closeForm')"><img src="@/assets/images/close.svg" alt="close"></span>
        <div class="form">
          <p class="form__title">Fill the form below and we'll contact you as soon as possible</p>
          <form class="form__form">
            <el-input class="form__field" v-model="formData.name" placeholder="Please input" />
            <el-input class="form__field" v-model="formData.phone" placeholder="Please input" />
            <el-checkbox class="form__checkbox" label="By clicking the button, you agree to the privacy policy"
              :value="formData.checked" />
            <UiButton class="form__button" variant="solid-yellow" shape="rounded" size="lg">Start Investment</UiButton>
          </form>
        </div>
        <div class="modal__background"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const emit = defineEmits(['closeForm'])

const formData = ref({
  name: '',
  phone: '',
  checked: true
})

const modalContainer = ref<HTMLElement>()

onClickOutside(
  modalContainer,
  event => emit('closeForm'),
  { ignore: ['.header__burger'] },
)
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: #0A0A0A33;
  backdrop-filter: blur(8.7px);
  padding: vw(20);

  @include mobile {
    padding: vmin(20);
  }

  &__background {
    z-index: 1;
    // top: 0;
    // height: vw(65);
    left: 0;
    padding-bottom: 5.5%;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: vw(45);
    background-image: url('@/assets/images/background-modal.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    // padding-bottom: calc(100svh - 12%);

    @include mobile {
      aspect-ratio: 18 / 1;
      height: auto;
      width: auto;
      padding-bottom: 16.5%;
    }
  }

  &__content {
    overflow-y: auto;
    max-height: 100%;
    background-color: $green;
    border-radius: vw(15);

    @include mobile {
      border-radius: vmin(15);
    }
  }

  &__container {
    overflow: hidden;
    position: relative;
    padding: vw(30);
    gap: vw(30);
    display: grid;
    max-width: vw(805);
    width: 100%;
    margin: 0 auto;



    @include mobile {
      padding: vmin(15);
      gap: vmin(10);
      // border-radius: vmin(15);
      max-width: 100%;
    }
  }

  &__close {
    cursor: pointer;
    width: vw(40);
    height: vw(40);
    display: grid;
    justify-content: center;
    align-items: center;
    justify-items: center;

    border: vw(0.56) solid $yellow-middle;
    border-radius: 50%;
    justify-self: flex-end;

    @include mobile {
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

.form {
  display: flex;
  justify-content: space-between;
  padding-bottom: vw(90);

  @include mobile {
    flex-direction: column;
    padding-bottom: vmin(70);
    gap: vmin(30);
  }

  &__title {
    font-family: 'Agatho';
    font-weight: 400;
    font-size: vw(36);
    line-height: 100%;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $yellow-light;
    max-width: vw(275);
    width: 100%;

    @include mobile {
      font-size: vmin(24);
      max-width: none;
    }
  }

  &__form {
    display: grid;
    max-width: vw(350);
    width: 100%;
    gap: vw(10);

    @include mobile {
      max-width: none;
      gap: vmin(10);
    }
  }

  &__field {
    &:deep(.el-input__wrapper) {
      padding: vw(14) vw(19);
      box-shadow: none;
      border-radius: vw(10);
      border: vw(1) solid rgb($yellow-dark, 0.6);
      background-color: transparent;

      @include mobile {
        padding: vmin(14) vmin(19);
        border-radius: vmin(10);
        border: vmin(1) solid rgb($yellow-dark, 0.6);
      }
    }

    &:deep(.el-input__wrapper.is-focus) {
      border: vw(1) solid rgb($yellow-dark, 0.6);
      box-shadow: none;

      @include mobile {
        border: vmin(1) solid rgb($yellow-dark, 0.6);
      }
    }

    &:deep(.el-input__inner),
    &:deep(.el-input__inner::placeholder) {
      height: auto;
      font-family: 'Plus Jakarta Sans';
      font-weight: 400;
      font-size: vw(14);
      line-height: 100%;
      letter-spacing: 0px;
      color: $white;

      @include mobile {
        font-size: vmin(14);
      }
    }
  }

  &__checkbox {
    &:deep(.el-checkbox__inner) {
      border: vw(1) solid $yellow-light;
      border-radius: 0px;
      background-color: transparent;
      width: vw(14);
      height: vw(14);

      @include mobile {
        border: vmin(1) solid $yellow-light;
        width: vmin(14);
        height: vmin(14);
      }
    }

    &:deep(.el-checkbox__label) {
      padding-left: vw(15);
      font-family: 'Plus Jakarta Sans';
      font-weight: 400;
      font-size: vw(12);
      line-height: 100%;
      letter-spacing: 0px;
      color: #B4B5B6;

      @include mobile {
        text-wrap: balance;
        font-size: vmin(12);
        padding-left: vmin(15);
      }

    }

    &:deep(.el-checkbox__inner:after) {
      height: vw(5);
      width: vw(3);
      border-color: $yellow-light;

      @include mobile {
        height: vmin(5);
        width: vmin(3);
      }
    }

    &:deep(.el-checkbox__input.is-checked+.el-checkbox__label) {
      color: #B4B5B6;
    }

  }

  &__button {
    margin-top: vw(15);
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(14);
    line-height: vw(15);
    letter-spacing: 0%;
    text-align: center;
    text-transform: uppercase;
    color: $black;

    @include mobile {
      margin-top: vmin(15);
      font-size: vmin(14);
      line-height: vmin(15);
      padding: vmin(15);
    }
  }
}
</style>