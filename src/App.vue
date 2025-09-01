<script setup lang="ts">
// @ts-nocheck
import axios from 'axios'
import { onMounted, onUnmounted, ref, nextTick, watch } from 'vue';
import { updateBreakpoints, useMq } from "vue3-mq";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
// import TestPage from '@/components/testPage.vue';
import HomePage from '@/components/pages/HomePage.vue';
import {
  animateDelivery,
  animateGallery,
  animateSecure

} from "@/utils/animations";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const rows = ref<string[][]>([])
const breakpointsMq = useMq();

let currentTimeline: gsap.core.Timeline | null = null;
let scrollTriggers: ScrollTrigger[] = [];


// Функция для очистки всех анимаций
const cleanupAnimations = () => {
  if (currentTimeline) {
    currentTimeline.kill();
    currentTimeline = null;
  }

  // Очищаем все ScrollTriggers
  scrollTriggers.forEach(trigger => {
    trigger.kill();
  });
  scrollTriggers = [];

  // Дополнительно убиваем все ScrollTriggers
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger === ".main" || trigger.trigger === ".gallery") {
      trigger.kill();
    }
  });
};

// Функция для создания десктопных анимаций
const createDesktopAnimations = () => {
  cleanupAnimations();
  currentTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: `+=30000`,
      scrub: 1,
      id: "main-timeline"
    },
  });

  currentTimeline.add(animateGallery(gsap, currentTimeline));
  // Добавьте другие анимации...
};

// Функция для создания мобильных анимаций
const createMobileAnimations = () => {
  cleanupAnimations();

  // Создаем мобильные анимации (если нужны)
  // const mobileTimeline = gsap.timeline({});
  // mobileTimeline.add(animateHeaderMobile(gsap, mobileTimeline));
  // Добавьте другие мобильные анимации...
};


onMounted(async () => {
  updateBreakpoints({
    breakpoints: {
      mobile: 0,
      desktop: 576
    },
  });
  try {
    const sheetId = '1CDaIrPsdO4MWI7h80yWNcow9Od0U_SDZGJvd2Z9Vigo' // твой ID
    const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSkiSxlkiKCITuSRhwufp436BFpHg3BF1A2pZobmSMOvrAUQ-FRPVsXOe-iLDq60A/pub?gid=48642444&single=true&output=csv`
    const { data } = await axios.get(url)

    // CSV → массив
    rows.value = data
      .split('\n')
      .map((row: string) => row.split(','))
  } catch (e) {
    console.error('Ошибка при загрузке таблицы', e)
  }
  await nextTick();

  watch(
    () => breakpointsMq.mobile,
    (isMobile) => {
      nextTick(() => {
        if (!isMobile) {
          createDesktopAnimations();
          animateDelivery(gsap)
          animateSecure(gsap)
        } else {
          createMobileAnimations();
        }
      });
    },
    { immediate: true }
  );
})

// onUnmounted(() => {
//   // Очистка при размонтировании компонента
//   if (currentTimeline) {
//     currentTimeline.kill();
//   }
//   ScrollTrigger.getAll().forEach(trigger => {
//     trigger.kill();
//   });
// });
</script>

<template>
  <main class="main">
    <!-- <TestPage /> -->
    <div class="content">
      <HomePage />
    </div>
  </main>
</template>

<style scoped></style>
