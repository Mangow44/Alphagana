import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type Mode from '@/models/Mode'

export const useModeStore = defineStore('mode', () => {
  const { t } = useI18n()

  const defaultModes: Array<Mode> = [
    { name: 'HiraganaToRomaji', isActive: true, description: t('mode.HiraganaToRomaji') },
    { name: 'RomajiToHiragana', isActive: false, description: t('mode.RomajiToHiragana') }
  ]

  const modesState = ref<Array<Mode>>(defaultModes)

  const modes = computed<Array<Mode>>(() => modesState.value)

  return { modes }
})
