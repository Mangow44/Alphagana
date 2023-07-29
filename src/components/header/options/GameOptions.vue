<script setup lang="ts">
import { ref } from 'vue'
import Icon from '@/components/assets/Icon.vue'
import Modal from '@/components/assets/Modal.vue'
import Options from '@/components/header/options/Options.vue'

const isOptionsPaneDisplayed = ref<boolean>(false)
</script>

<template>
  <icon
    @click="isOptionsPaneDisplayed = !isOptionsPaneDisplayed"
    class="btn-options"
    :src="'/icons/gear.svg'"
    :alt="'Options'"
    data-testid="btn-options"
  />

  <modal :trigger="isOptionsPaneDisplayed">
    <options />
  </modal>
</template>

<style scoped>
.btn-options {
  margin-right: 1rem;
}
</style>
