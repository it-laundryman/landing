<template>
  <section class="documentation">
    <div class="documentation__header">
      <div class="documentation__title-block">
        <h2 class="documentation__heading">Legal Structure
          & Documentation</h2>
      </div>
      <p class="documentation__description">
        VERDANA combines Balinese heritage with modern luxury, creating the perfect retreat for discerning individuals
        seeking authentic tropical living.
      </p>
    </div>
    <div class="documentation__list">
      <div class="documentation__item">
        <IconFolder class="documentation__item-icon" />
        <span class="documentation__item-title">Ownership Structure</span>
        <ul class="documentation__item-list">
          <li class="documentation__item-list_item">Indonesian company formation (PT PMA)</li>
          <li class="documentation__item-list_item">Hak Pakai land rights (25+25 years)</li>
          <li class="documentation__item-list_item">Nominee director arrangements</li>
          <li class="documentation__item-list_item">Shareholder agreements</li>
          <li class="documentation__item-list_item">Exit strategy protocols</li>
        </ul>
      </div>
      <div class="documentation__item">
        <IconMuseum class="documentation__item-icon" />
        <span class="documentation__item-title">Government Compliance</span>
        <ul class="documentation__item-list">
          <li class="documentation__item-list_item">Building permits & approvals</li>
          <li class="documentation__item-list_item">Environmental compliance certificates</li>
          <li class="documentation__item-list_item">Tourism business licenses</li>
          <li class="documentation__item-list_item">Tax compliance documentation</li>
          <li class="documentation__item-list_item">Local authority agreements</li>
        </ul>
      </div>
      <div class="documentation__item">
        <IconUnlock class="documentation__item-icon documentation__item-icon--unlock" />
        <span class="documentation__item-title">Investor  Protection</span>
        <ul class="documentation__item-list">
          <li class="documentation__item-list_item">Rental guarantee agreements</li>
          <li class="documentation__item-list_item">Property management contracts</li>
          <li class="documentation__item-list_item">Insurance coverage policies</li>
          <li class="documentation__item-list_item">Dispute resolution procedures</li>
          <li class="documentation__item-list_item">Performance monitoring systems</li>
        </ul>
      </div>
    </div>
    <div class="documentation__list-buttons">
      <div class="documentation__list-button documentation__list-button--left">
        <IconArrowLeft />
      </div>
      <div class="documentation__list-button documentation__list-button--right">
        <IconArrowLeft />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconFolder from '../icons/iconFolder.vue';
import IconArrowLeft from '../icons/IconArrowLeft.vue';
import IconMuseum from '../icons/iconMuseum.vue';
import IconUnlock from '../icons/iconUnlock.vue';


</script>

<style scoped lang="scss">
.documentation {
  padding: vw(45) vw(43) vw(40) vw(43);
  background-color: $gray-light;

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
  }

  &__heading {
    text-wrap: balance;
    color: $black-light;
    font-family: 'Agatho';
    font-weight: 500;
    font-style: Medium;
    font-size: vw(56);
    line-height: vw(56);
    letter-spacing: 0px;
    text-transform: uppercase;
  }

  &__description {
    font-family: 'Plus Jakarta Sans';
    font-weight: 400;
    font-size: vw(16);
    line-height: 100%;
    letter-spacing: 0px;
    color: $black-light;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: vw(10);
  }

  &__item {
    display: grid;
    padding: vw(35) vw(30);
    border-radius: vw(15);
    border: vw(1) solid rgb($yellow, 0.6);
  }

  &__item-icon {
    width: vw(50);
    margin-bottom: vw(45);

    &--unlock {
      width: vw(35);
    }
  }

  &__item-title {
    font-family: 'Agatho';
    font-weight: 500;
    font-size: vw(24);
    line-height: 100%;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $yellow-middle;
    width: min-content;
  }

  &__item-list {
    margin-top: vw(20);
    list-style-type: none;
    padding-left: 0;

    &_item {
      font-family: 'Plus Jakarta Sans';
      font-weight: 400;
      font-size: vw(14);
      line-height: vw(22);
      letter-spacing: 0px;
      color: $black-light;

      &::before {
        content: "";
        margin-right: vw(8);
        display: inline-block;
        width: vw(7);
        height: vw(7);
        background-color: rgb($yellow-middle, 0.6);
      }
    }
  }

  &__list-buttons {
    display: flex;
    gap: vw(10);
    margin-top: vw(20);
  }

  &__list-button {
    display: grid;
    align-items: center;
    justify-content: center;
    width: vw(43);
    height: vw(43);
    border-radius: vw(12);
    border: vw(1) solid $yellow-light;

    svg {
      width: vw(10);
    }
  }

  &__list-button--left {}

  &__list-button--right {
    svg {
      transform: rotateZ(-180deg);
    }
  }

}
</style>