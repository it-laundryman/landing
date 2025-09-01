<template>
  <MainSection />
  <FounderSection id="about" />
  <DeliversSection id="residents" />
  <GallerySection />
  <InvestmentSection />
  <CalculatorSection id="calculator" />
  <AnalysisSection />
  <DecorSection />
  <PerfomanceSection id="location" />
  <DocumentationSection />
  <SecureSection />
  <AppFooter />
</template>

<script setup lang="ts">
import DeliversSection from '@/components/sections/DeliversSection.vue';
import FounderSection from '@/components/sections/FounderSection.vue';
import MainSection from '@/components/sections/MainSection.vue';
import GallerySection from '@/components/sections/GallerySection.vue';
import InvestmentSection from '@/components/sections/InvestmentSection.vue';
import CalculatorSection from '@/components/sections/CalculatorSection.vue';
import AnalysisSection from '@/components/sections/AnalysisSection.vue';
import DecorSection from '@/components/sections/DecorSection.vue';
import PerfomanceSection from '@/components/sections/PerfomanceSection.vue';
import DocumentationSection from '@/components/sections/DocumentationSection.vue';
import SecureSection from '../sections/SecureSection.vue';
import AppFooter from '../AppFooter.vue';
</script>

<style scoped lang="scss"></style>