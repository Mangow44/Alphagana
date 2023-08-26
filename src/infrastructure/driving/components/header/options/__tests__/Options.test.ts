import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { shallowMount } from '@vue/test-utils'
import Options from '@/infrastructure/driving/components/header/options/Options.vue'

describe('Options pane', () => {
  vi.mock('@/stores/modeStore', () => ({
    useModeStore: vi.fn().mockReturnValue({
      modes: [
        { name: 'HiraganaToRomaji', isActive: true, description: 'Hiragana to Romaji' },
        { name: 'RomajiToHiragana', isActive: false, description: 'Romaji to Hiragana' }
      ]
    })
  }))

  let wrapper: any
  const optionInputDataTestId = "[data-testid='option-input']"

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = shallowMount(Options)
  })

  it('Should create options for each mode is mode store', async () => {
    // Given
    const optionsInput = wrapper.findAll(optionInputDataTestId)

    // When

    // Then
    expect(optionsInput[0].wrapperElement._modelValue).toBeTruthy()
    expect(optionsInput[1].wrapperElement._modelValue).toBeFalsy()
  })
})
