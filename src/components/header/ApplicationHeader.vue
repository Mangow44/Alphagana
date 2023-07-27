<script setup lang="ts">
import GameOptions from '@/components/header/option/GameOptions.vue'
</script>

<template>
  <header>
    <h1 class="title">ALPHAGANA</h1>

    <game-options />
  </header>
</template>

<style scoped>
header {
  display: flex;

  padding: 0.4rem 0;
}
header .title {
  position: relative;

  margin: auto 0;
  margin-right: auto;
  margin-left: 1rem;
  letter-spacing: -2px;

  color: var(--c-white);
  -webkit-text-stroke: 2px var(--c-black);

  font-family: Marko One, Hashiba, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.4rem;
}

header .title::before {
  z-index: -1;
  position: absolute;

  content: 'ALPHAGANA';

  top: 3px;
  left: 2px;

  color: var(--c-black);
}
</style>
