<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useModeStore } from '@/infrastructure/driving/stores/modeStore'

const { t } = useI18n()
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
      {{ t(`mode.${mode.name}`) }}
    </p>
  </div>
</template>

<style scoped>
.option {
  display: flex;
  align-items: center;
  gap: 1rem;

  min-width: 15rem;
  height: fit-content;
  margin: 0.5rem 0;
  padding: 0.3rem;

  font-size: 0.9rem;
}

.choice {
  margin-top: 0.3rem;
  margin-bottom: auto;

  font-size: 0.7rem;
}
</style>
