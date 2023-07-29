<script setup lang="ts">
import { RouterView } from 'vue-router'
import ApplicationHeader from '@/components/header/ApplicationHeader.vue'
import CustomFooter from '@/components/footer/CustomFooter.vue'
</script>

<template>
  <application-header />

  <RouterView />

  <custom-footer />
</template>
