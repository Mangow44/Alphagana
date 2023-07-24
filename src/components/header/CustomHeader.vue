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
  margin: auto 0;
  margin-right: auto;
  margin-left: 1rem;

  font-family: Hashiba, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 2.5rem;
}
</style>
