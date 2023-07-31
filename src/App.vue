<script setup lang="ts">
import { RouterView } from 'vue-router'
import ApplicationHeader from '@/components/header/ApplicationHeader.vue'
import ApplicationFooter from '@/components/footer/ApplicationFooter.vue'
</script>

<template>
  <application-header />

  <RouterView />

  <application-footer />
</template>
