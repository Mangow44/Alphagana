import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'
import GameOptions from '@/infrastructure/driving/components/header/options/GameOptions.vue'

import fr from '@/infrastructure/driving/lang/fr.json'
import en from '@/infrastructure/driving/lang/en.json'

describe('Game options', () => {
  let wrapper: any

  const messages = { fr, en }
  const mockI18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'en',
    messages
  })

  const btnOptionsDataTestId: string = "[data-testid='btn-options']"

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = shallowMount(GameOptions, { global: { plugins: [mockI18n] } })
  })

  it('On click, toggle is options pane display', async () => {
    // Given
    const oldIsOptionsPaneDisplayed: boolean = wrapper.vm.isOptionsPaneDisplayed
    const btnOptions = wrapper.find(btnOptionsDataTestId)

    // When
    await btnOptions.trigger('click')
    const newIsOptionsPaneDisplayed: boolean = wrapper.vm.isOptionsPaneDisplayed

    // Then
    expect(newIsOptionsPaneDisplayed).not.toEqual(oldIsOptionsPaneDisplayed)
    expect(newIsOptionsPaneDisplayed).toEqual(!oldIsOptionsPaneDisplayed)
  })
})
