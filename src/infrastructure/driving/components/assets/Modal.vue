<script setup lang="ts">
import Icon from '@/infrastructure/driving/components/assets/Icon.vue'

defineProps<{
  header: string
}>()

const emit = defineEmits<{
  (e: 'closeModal'): void
}>()
</script>

<template>
  <div @click="emit('closeModal')" class="blur" data-testid="blur"></div>

  <div class="modal">
    <div class="header">
      <p>{{ header }}</p>
      <icon
        :src="'/icons/x.svg'"
        :alt="'Close modal'"
        @click="emit('closeModal')"
        class="close-icon"
        data-testid="btn-close"
      />
    </div>

    <div class="content">
      <slot></slot>
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

.modal {
  position: absolute;
  top: calc(50%);
  left: calc(50%);

  display: flex;
  flex-direction: column;

  width: fit-content;
  height: fit-content;

  background-color: var(--c-white);
  border: solid 2px var(--c-black);
  box-shadow: var(--c-black) 4px 4px;
  transform: translate3d(-50%, -50%, 0);
}

.header {
  display: flex;
  align-items: center;
  padding: 0.2rem 0.2rem;
}

.header p {
  margin: 0 0.3rem;

  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
}

.close-icon {
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.3rem;
}

.content {
  width: 100%;
  height: 100%;

  padding: 0.2rem;

  overflow: auto;
}
</style>
