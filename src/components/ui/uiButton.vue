<script setup lang="ts">

import { computed, defineProps } from "vue";

type ButtonVariant = "solid" | "solid-yellow" | "solid-green" | "outline" | "outline-yellow" | "outline-dark-yellow" | "outline-brown" | "outline-transparent-yellow" | "ghost";
type ButtonShape = "rounded" | "circle";
type ButtonSize = "sm" | "md" | "lg";

const props = defineProps<{
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  icon?: boolean; // если true, то слот будет только для иконки
}>();

const classes = computed(() => {
  return [
    "base-button",
    props.variant ? `base-button--${props.variant}` : "base-button--solid",
    props.shape ? `base-button--${props.shape}` : "base-button--rounded",
    props.size ? `base-button--${props.size}` : "base-button--md",
    props.icon ? "base-button--icon" : ""
  ];
});
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  // font-family: "Wix Madefor Display";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  // font-family: inherit;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* размеры */
.base-button--sm {
  padding: 4px 12px;
  font-size: 14px;
}

.base-button--md {
  padding: vw(8) vw(12);
  font-size: vw(12);

  @include mobile {
    padding: vmin(5) vmin(9);
  }
}

.base-button--lg {
  padding: vw(12) vw(28);
  font-size: vw(14);

  @include mobile {
    padding: vmin(10) vmin(15);
    font-size: vmin(10);
  }
}

/* формы */
.base-button--rounded {
  border-radius: vw(40);

  @include mobile {
    border-radius: vmin(50);
  }
}

.base-button--circle {
  border-radius: 50%;
  // width: 80px;
  // height: 80px;
  // padding: 0;
}

/* варианты */
.base-button--solid-green {
  background-color: $green;
  color: $white;

  &:hover {
    background-color: $yellow-light;
  }
}

.base-button--solid-yellow {
  background-color: $yellow;
  color: $black;

  &:hover {
    background-color: $brown;
    color: $yellow-dark;
  }
}

// .base-button--solid-yellow:hover {
//   opacity: 0.9;
// }

.base-button--outline-yellow {
  background: transparent;
  border: vw(1) solid $yellow;
  color: $yellow;
}

.base-button--outline-dark-yellow {
  background: transparent;
  border: vw(1) solid $yellow-dark;
  color: $yellow;


}

.base-button--outline-transparent-yellow {
  background: transparent;
  border: vw(1) solid rgb($yellow, 0.26);
  color: $yellow;

  &:hover {
    border: vw(1) solid $yellow;
  }
}

.base-button--outline-yellow:hover {
  background-color: $yellow;
  color: $black;
}

.base-button--outline-brown {
  background: transparent;
  border: vw(1) solid $brown;
  color: $brown;
}

.base-button--outline-brown.active {
  background: $brown;
  border: vw(1) solid $brown;
  color: $white;
}

.base-button--ghost {
  background: transparent;
  color: #d4b97f;
}

.base-button--ghost:hover {
  background-color: rgba(212, 185, 127, 0.1);
}

/* иконка */
.base-button--icon {
  width: 48px;
  height: 48px;
  padding: 0;
}
</style>