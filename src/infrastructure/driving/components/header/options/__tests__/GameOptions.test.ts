import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { shallowMount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import GameOptions from '@/infrastructure/driving/components/header/options/GameOptions.vue'

import fr from '@/infrastructure/driving/lang/fr.json'
import en from '@/infrastructure/driving/lang/en.json'
import { useModeStore } from '@/infrastructure/driving/stores/modeStore'

describe('Game options pane', () => {
  let wrapper: any

  const optionInputDataTestId: string = "[data-testid='option-input']"
  const messages = { fr, en }
  const mockI18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages
  })

  beforeEach(() => {
    setActivePinia(createPinia())
    useModeStore().modes = [
      {
        name: 'HiraganaToRomaji',
        isActive: true,
        traduction: { from: 'hiragana', to: 'romaji' }
      },
      {
        name: 'KatakanaToRomaji',
        isActive: false,
        traduction: { from: 'katakana', to: 'romaji' }
      }
    ]
    wrapper = shallowMount(GameOptions, { global: { plugins: [mockI18n] } })
  })

  it('Should create options for each mode in mode store', async () => {
    // Given
    const optionsInput = wrapper.findAll(optionInputDataTestId)

    // When

    // Then
    expect(optionsInput[0].wrapperElement._modelValue).toBeTruthy()
    expect(optionsInput[1].wrapperElement._modelValue).toBeFalsy()
  })
})
