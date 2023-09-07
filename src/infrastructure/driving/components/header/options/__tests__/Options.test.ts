import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createI18n } from 'vue-i18n'
import Options from '@/infrastructure/driving/components/header/options/Options.vue'

import fr from '@/infrastructure/driving/lang/fr.json'
import en from '@/infrastructure/driving/lang/en.json'

describe('Options', () => {
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
    wrapper = shallowMount(Options, { global: { plugins: [mockI18n] } })
  })

  it('On click, toggle is options pane display', async () => {
    // Given
    const oldIsGameOptionsDisplayed: boolean = wrapper.vm.isGameOptionsDisplayed
    const btnOptions = wrapper.find(btnOptionsDataTestId)

    // When
    await btnOptions.trigger('click')
    const newIsGameOptionsDisplayed: boolean = wrapper.vm.isGameOptionsDisplayed

    // Then
    expect(newIsGameOptionsDisplayed).not.toEqual(oldIsGameOptionsDisplayed)
    expect(newIsGameOptionsDisplayed).toEqual(!oldIsGameOptionsDisplayed)
  })
})
