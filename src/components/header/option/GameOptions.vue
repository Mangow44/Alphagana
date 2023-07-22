<script setup lang="ts">
import { ref } from 'vue'
import OptionsPane from '@/components/header/option/OptionsPane.vue'

const isOptionsPaneDisplayed = ref<boolean>(false)
</script>

<template>
  <button
    class="btn-options"
    @click="isOptionsPaneDisplayed = !isOptionsPaneDisplayed"
    data-testid="btn-options"
  >
    <img src="@/assets/icons/gear.svg" alt="Options" />
  </button>

  <options-pane
    v-if="isOptionsPaneDisplayed"
    @close-options-pane="() => (isOptionsPaneDisplayed = false)"
  />
</template>

<style scoped>
.btn-options {
  width: 2rem;
  height: 2rem;
  margin: auto 0;
  margin-right: 1rem;

  cursor: pointer;

  border: none;
  background-color: transparent;
}

.btn-options img {
  width: 100%;
  height: 100%;
}
</style>
