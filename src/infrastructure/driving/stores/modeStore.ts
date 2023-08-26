import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type Mode from '@/infrastructure/driving/models/Mode'

export const useModeStore = defineStore('mode', () => {
  const { t } = useI18n()

  const defaultModes: Array<Mode> = [
    {
      name: 'HiraganaToRomaji',
      isActive: true,
      description: t('mode.HiraganaToRomaji'),
      keys: { from: 'hiragana', to: 'romaji' }
    },
    {
      name: 'KatakanaToRomaji',
      isActive: false,
      description: t('mode.KatakanaToRomaji'),
      keys: { from: 'katakana', to: 'romaji' }
    },
    {
      name: 'RomajiToHiragana',
      isActive: false,
      description: t('mode.RomajiToHiragana'),
      keys: { from: 'romaji', to: 'hiragana' }
    },
    {
      name: 'RomajiToKatakana',
      isActive: false,
      description: t('mode.RomajiToKatakana'),
      keys: { from: 'romaji', to: 'katakana' }
    }
  ]

  const modesState = ref<Array<Mode>>(defaultModes)

  const modes = computed<Array<Mode>>(() => modesState.value)

  return { modes }
})
