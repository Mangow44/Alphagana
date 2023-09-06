<script setup lang="ts">
import { RouterView } from 'vue-router'
import ApplicationHeader from '@/infrastructure/driving/components/header/ApplicationHeader.vue'
import ApplicationFooter from '@/infrastructure/driving/components/footer/ApplicationFooter.vue'
</script>

<template>
  <application-header />

  <Suspense>
    <RouterView />
  </Suspense>

  <application-footer />
</template>
