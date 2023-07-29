<script setup lang="ts">
import { ref, watch } from 'vue'
import Icon from './Icon.vue'

const props = defineProps<{
  trigger: boolean
}>()

const isModalDisplayed = ref<boolean>(false)

watch(props, () => (isModalDisplayed.value = true))
</script>

<template>
  <div
    v-if="isModalDisplayed"
    @click="isModalDisplayed = false"
    class="blur"
    data-testid="blur"
  ></div>

  <div v-if="isModalDisplayed" class="modal">
    <icon
      @click="isModalDisplayed = false"
      class="close-icon"
      :src="'/icons/x.svg'"
      :alt="'Close modal'"
    />
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
  top: calc(50% - (15rem / 2));
  left: calc(50% - (18rem / 2));

  display: flex;
  flex-direction: column;

  width: 18rem;
  height: 15rem;

  background-color: var(--c-white);
  border: solid 2px var(--c-black);
  box-shadow: var(--c-black) 4px 4px;
}

.modal .close-icon {
  height: 1.5rem;
  width: 1.5rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}

.modal .content {
  width: 100%;
  height: 100%;

  overflow: auto;
}
</style>
