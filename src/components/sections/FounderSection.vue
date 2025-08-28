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
      <span class="founder__symbol">”</span>
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
  grid-template-columns: 1fr 1.3fr 1fr;
  column-gap: vw(55);
  padding: vw(45) vw(45) 0;
  align-items: flex-start;

  &__title {
    display: grid;
    width: min-content;
    grid-row: 1 / 3;
    grid-column: 1;
  }

  &__heading {
    font-family: 'Agatho';
    font-weight: 500;
    font-size: vw(56);
    line-height: vw(56);
    letter-spacing: 0px;
    text-transform: uppercase;
    color: $white;
  }

  &__subheading {
    font-family: 'MonteCarlo';
    font-weight: 400;
    font-size: vw(48);
    line-height: vw(65);
    letter-spacing: 0px;
    color: $yellow;
    display: inline-block;
    margin-left: auto;
    margin-right: vw(-19);
    margin-top: vw(-29);
  }

  &__image {
    grid-row: 1/4;
    grid-column: 2;
    position: relative;
    z-index: 1;
    display: inline-block;
    border-radius: vw(200) vw(200) vw(12) vw(12);
    overflow: hidden;
  }

  &__img {
    width: 100%;
    object-fit: cover;
  }

  &__description {
    grid-column: 3;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
  }

  &__symbol {
    font-family: 'Adamina';
    font-weight: 400;
    font-size: vw(128);
    line-height: vw(65);
    letter-spacing: 0px;
    color: $yellow-light;
    margin-bottom: vw(-25);
  }

  &__text {
    text-wrap: balance;
    font-family: 'Vollkorn500';
    font-size: vw(16);
    line-height: vw(22);
    letter-spacing: 0px;
    color: $white;
  }

  &__about {
    padding-top: vw(45);
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