<script setup lang="ts">
import { RouterView } from 'vue-router'
import ApplicationHeader from '@/infrastructure/driving/components/header/ApplicationHeader.vue'
import ApplicationFooter from '@/infrastructure/driving/components/footer/ApplicationFooter.vue'
</script>

<template>
  <application-header />

  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>

  <application-footer />
</template>

<style scoped>
main {
  display: flex;

  width: 100%;
  height: 100%;
}
</style>
