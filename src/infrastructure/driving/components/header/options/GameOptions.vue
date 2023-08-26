<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/infrastructure/driving/components/assets/Icon.vue'
import Modal from '@/infrastructure/driving/components/assets/Modal.vue'
import Options from '@/infrastructure/driving/components/header/options/Options.vue'

const { t } = useI18n()
const isOptionsPaneDisplayed = ref<boolean>(false)
</script>

<template>
  <icon
    :src="'/icons/gear.svg'"
    :alt="'Options'"
    @click="isOptionsPaneDisplayed = !isOptionsPaneDisplayed"
    class="btn-options"
    data-testid="btn-options"
  />

  <modal
    v-if="isOptionsPaneDisplayed"
    :header="t('options')"
    @close-modal="isOptionsPaneDisplayed = false"
  >
    <options />
  </modal>
</template>

<style scoped>
.btn-options {
  margin-right: 1rem;
}
</style>
