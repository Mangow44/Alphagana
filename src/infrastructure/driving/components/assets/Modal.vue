<script setup lang="ts">
import Icon from '@/infrastructure/driving/components/assets/Icon.vue'
import { ref, watch } from 'vue'

const props = defineProps<{
  header: string
  showModal: boolean
}>()

const emit = defineEmits<{
  (e: 'closeModal'): void
}>()

watch(props, () => {
  if (props.showModal) dialog.value?.showModal()
  if (!props.showModal) dialog.value?.close()
})

const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <dialog ref="dialog" @click.self="emit('closeModal')" data-testid="dialog">
    <div class="modal">
      <div class="header">
        <span class="title">{{ header }}</span>
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
  </dialog>
</template>

<style scoped>
dialog {
  margin: auto;
}

.modal {
  display: flex;
  flex-direction: column;

  width: fit-content;
  height: fit-content;

  background-color: var(--c-white);
  border: solid 2px var(--c-black);
  box-shadow: var(--c-black) 4px 4px;
}

.header {
  display: flex;
  align-items: center;
  padding: 0.2rem 0.2rem;
}

.title {
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
