<script setup lang="ts">
import { defineProps, computed } from "vue";

type ButtonVariant = "solid" | "solid-yellow" | "outline" | "outline-yellow" | "outline-transparent-yellow" | "ghost";
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
  padding: 8px 20px;
  font-size: 16px;
}

.base-button--lg {
  padding: vw(12) vw(28);
  font-size: vw(14);
}

/* формы */
.base-button--rounded {
  border-radius: vw(40);
}

.base-button--circle {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding: 0;
}

/* варианты */
.base-button--solid-yellow {
  background-color: $yellow;
  color: $black;
}

.base-button--solid-yellow:hover {
  opacity: 0.9;
}

.base-button--outline-yellow {
  background: transparent;
  border: 1px solid $yellow;
  color: $yellow;
}

.base-button--outline-transparent-yellow {
  background: transparent;
  border: 1px solid rgb($yellow, 0.26);
  color: $yellow;
}

.base-button--outline-yellow:hover {
  background-color: $yellow;
  color: $black;
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