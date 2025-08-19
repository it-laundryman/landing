<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue';
// import TestPage from '@/components/testPage.vue';
import HomePage from '@/components/pages/HomePage.vue';


const rows = ref<string[][]>([])

onMounted(async () => {
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
})
</script>

<template>
  <main>
    <!-- <TestPage /> -->
    <HomePage />
  </main>
</template>

<style scoped></style>
