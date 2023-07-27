<script setup lang="ts">
import { ref } from 'vue'
import ClickableIcon from '@/components/assets/ClickableIcon.vue'
import OptionsPane from '@/components/header/option/OptionsPane.vue'

const isOptionsPaneDisplayed = ref<boolean>(false)
</script>

<template>
  <clickable-icon
    class="btn-options"
    @click="isOptionsPaneDisplayed = !isOptionsPaneDisplayed"
    :src="'/public/icons/gear.svg'"
    :alt="'Options'"
    data-testid="btn-options"
  />

  <options-pane
    v-if="isOptionsPaneDisplayed"
    @close-options-pane="() => (isOptionsPaneDisplayed = false)"
  />
</template>

<style scoped>
.btn-options {
  margin-right: 1rem;
}
</style>
