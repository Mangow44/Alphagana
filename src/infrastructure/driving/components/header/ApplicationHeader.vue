<script setup lang="ts">
import Options from '@/infrastructure/driving/components/header/options/Options.vue'
</script>

<template>
  <header>
    <h1 class="title">ALPHAGANA</h1>

    <options />
  </header>
</template>

<style scoped>
header {
  display: flex;
  gap: 1rem;

  padding: 0.4rem 1rem;
}

.title {
  position: relative;

  width: 100%;

  font-family: Marko One, sans-serif;
  font-size: 2.4rem;
  letter-spacing: -2px;

  color: var(--c-white);
  -webkit-text-stroke: 2px var(--c-black);
}

.title::before {
  z-index: -1;

  position: absolute;
  top: 3px;
  left: 2px;

  content: 'ALPHAGANA';

  color: var(--c-black);
}
</style>
