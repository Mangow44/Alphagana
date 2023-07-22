<script setup lang="ts">
import { useModeStore } from '@/stores/modeStore'

const emit = defineEmits<{
  (e: 'closeOptionsPane'): void
}>()

const modeStore = useModeStore()
</script>

<template>
  <div class="blur" @click="emit('closeOptionsPane')" data-testid="blur"></div>

  <div class="options-pane">
    <button class="options-close" @click="emit('closeOptionsPane')" data-testid="options-close">
      <img src="@/assets/icons/x-circle.svg" alt="Close options" />
    </button>

    <div class="options-list">
      <div class="option" v-for="mode in modeStore.modes">
        <input
          class="choice"
          type="checkbox"
          :name="mode.name"
          :id="mode.name"
          v-model="mode.isActive"
        />
        <p>
          {{ mode.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blur {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 0.3;

  background-color: var(--c-gray);
}
.options-pane {
  position: absolute;
  top: calc(50% - (15rem / 2));
  left: calc(50% - (18rem / 2));

  display: flex;
  flex-direction: column;

  width: 18rem;
  height: 15rem;

  background-color: var(--c-white);
}

.options-pane .options-close {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.1rem 0;
  margin-left: auto;
  margin-right: 0.1rem;

  cursor: pointer;

  background-color: transparent;
  border: none;
}

.options-pane .options-close img {
  width: 100%;
  height: 100%;
}

.options-pane .options-list {
  width: 100%;
  height: 100%;

  overflow: auto;
}

.options-pane .option {
  display: flex;
  gap: 1rem;

  margin: 0.5rem 0;
  padding: 0.3rem;

  font-size: 0.7rem;
}

.options-pane .option .choice {
  margin-top: 0.1rem;
  margin-bottom: auto;
}
</style>
