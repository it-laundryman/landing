<template>
  <section class="founder">
    <div class="founder__title">
      <h2 class="founder__heading">FOUNDER MESSAGE</h2>
      <span class="founder__subheading">We are</span>
    </div>
    <div class="founder__image">
      <img src="@/assets/images/founder.png" alt="founder" class="founder__img">
    </div>
    <div class="founder__description">
      <p class="founder__text">"During a motorcycle journey through the Himalayas, I realized that true luxury isn't
        about excess—it's about
        having everything you need without thinking about it. This insight became the foundation of LABNA CAPITAL's
        invisible service philosophy."</p>
    </div>
    <div class="founder__about">
      <p class="founder__about-text">
        What began as a personal search for meaningful and lasting value has grown into LABNA PROPERTIES — a company
        shaped by principles, not trends.</p>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.founder {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: vw(45);
  padding: vw(45) vw(45) 0;
  align-items: flex-start;

  &__title {
    display: grid;
    width: min-content;
    grid-row: 1 / 3;
    grid-column: 1;
  }

  &__heading {
    font-family: 'Koh Santepheap';
    font-size: vw(48);
    line-height: vw(57);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $white;
  }

  &__subheading {
    font-family: 'Bikham Cyr Script';
    font-size: vw(65);
    line-height: vw(65);
    letter-spacing: 0px;
    color: $yellow;
    display: inline-block;
    margin-left: auto;
    margin-right: vw(-30);
    margin-top: vw(-5);
  }

  &__image {
    grid-row: 1/4;
    grid-column: 2;
    position: relative;
    z-index: 1;
  }

  &__img {
    width: 100%;
    object-fit: cover;
  }

  &__description {
    grid-column: 3;
    grid-row: 1 / 3;
  }

  &__text {
    font-family: 'Vollkorn500';
    font-size: vw(16);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }

  &__about {
    padding-top: vw(45);
    border-top: vw(1) solid rgb($yellow, 0.26);
    margin-left: vw(-45);
    margin-right: vw(-45);
    padding-left: vw(45);
    padding-right: vw(45);
    grid-column: 1 / 4;
    grid-row: 3 / 5;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: vw(45);
  }

  &__about-text {
    font-family: 'Wix Madefor Display';
    font-size: vw(17);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }
}
</style>