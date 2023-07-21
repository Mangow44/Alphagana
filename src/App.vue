<script setup lang="ts">
import { RouterView } from 'vue-router'
import CustomHeader from '@/components/header/CustomHeader.vue'
import CustomFooter from '@/components/footer/CustomFooter.vue'
</script>

<template>
  <custom-header />

  <RouterView />

  <custom-footer />
</template>
