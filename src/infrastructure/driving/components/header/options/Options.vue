<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/infrastructure/driving/components/assets/Icon.vue'
import Modal from '@/infrastructure/driving/components/assets/Modal.vue'
import GameOptions from '@/infrastructure/driving/components/header/options/GameOptions.vue'

const { t } = useI18n()
const isGameOptionsDisplayed = ref<boolean>(false)
</script>

<template>
  <icon
    :src="'/icons/gear.svg'"
    :alt="'Options'"
    @click="isGameOptionsDisplayed = true"
    data-testid="btn-options"
  />

  <modal
    :header="t('options')"
    :show-modal="isGameOptionsDisplayed"
    @close-modal="isGameOptionsDisplayed = false"
  >
    <game-options />
  </modal>
</template>
