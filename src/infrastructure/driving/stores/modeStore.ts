import { defineStore } from 'pinia'
import { ref } from 'vue'
import type Mode from '@/domain/models/Mode'

export const useModeStore = defineStore('mode', () => {
  const modes = ref<Mode[]>([])

  return { modes }
})
