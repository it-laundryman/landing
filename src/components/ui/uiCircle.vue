<template>
  <div class="circle">
    <div class="orbit" :style="{ transform: orbitTransform }">
      <div class="dot"></div>
    </div>
  </div>
  <slot name="content"></slot>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue';

type enumPosition = 'random' | 'default' | 'custom'
interface IProps {
  position?: enumPosition
}


const props = withDefaults(defineProps<IProps>(), {
  position: 'random'
})

const orbitTransform = ref('translate(-50%, -50%)')

const setPosition = () => {
  if (props.position === 'random') {
    const angle = Math.floor(Math.random() * 360)
    orbitTransform.value = `translate(-50%, -50%) rotate(${angle}deg)`
  } else if (props.position === 'default') {
    orbitTransform.value = `translate(-50%, -50%) rotate(0deg)`
  } else if (props.position === 'custom') {
    orbitTransform.value = `translate(-50%, -50%) rotate(90deg)`
  }
}

watch(() => props.position, () => {
  setPosition()
}, {
  immediate: true
})
</script>

<style scoped lang="scss">
.circle {
  position: absolute;
  inset: 0;
  border: 1px solid #b1975d;
  border-radius: 50%;
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  animation: spin 10s linear infinite;
}

.dot {
  position: absolute;
  top: 0;
  /* ставим сверху по окружности */
  left: 50%;
  width: vw(20);
  height: vw(20);
  background: #b1975d;
  border-radius: 50%;
  transform: translateX(-50%) translateY(vw(-10));
}

// @keyframes spin {
//   from {
//     transform: translate(-50%, -50%) rotate(0deg);
//   }

//   to {
//     transform: translate(-50%, -50%) rotate(360deg);
//   }
// }</style>