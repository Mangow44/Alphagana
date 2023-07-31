<script setup lang="ts">
import { useModeStore } from '@/stores/modeStore'

const modeStore = useModeStore()
</script>

<template>
  <div class="option" v-for="mode in modeStore.modes">
    <input
      class="choice"
      type="checkbox"
      :name="mode.name"
      :id="mode.name"
      v-model="mode.isActive"
      data-testid="option-input"
    />
    <p>
      {{ mode.description }}
    </p>
  </div>
</template>

<style scoped>
.option {
  display: flex;
  gap: 1rem;

  margin: 0.5rem 0;
  padding: 0.3rem;

  font-size: 0.7rem;
}

.choice {
  margin-top: 0.1rem;
  margin-bottom: auto;
}
</style>
