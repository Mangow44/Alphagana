import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export default interface Mode {
  name: string
  isActive: boolean
  description: string
}

export const useModeStore = defineStore('mode', () => {
  const defaultModes: Array<Mode> = [
    { name: 'HiraganaToRomaji', isActive: true, description: 'Hiragana to Romaji' },
    { name: 'RomajiToHiragana', isActive: false, description: 'Romaji to Hiragana' }
  ]

  const modesState = ref<Array<Mode>>(defaultModes)

  const modes = computed<Array<Mode>>(() => modesState.value)

  return { modes }
})
