<template>
  <section class="decor">
    <img src="@/assets/images/decor.png" alt="decor">
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.decor {
  width: 100%;
  aspect-ratio: 16/7;

  @include mobile {
    aspect-ratio: 16/11;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>