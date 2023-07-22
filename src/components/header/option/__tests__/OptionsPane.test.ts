import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { shallowMount } from '@vue/test-utils'
import OptionsPane from '@/components/header/option/OptionsPane.vue'

describe('Options pane', () => {
  let wrapper: any
  const blurDataTestId = "[data-testid='blur']"
  const optionsCloseDataTestId = "[data-testid='options-close']"

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = shallowMount(OptionsPane)
  })

  it('Emit close options pane: blur', async () => {
    // Given
    const blur = wrapper.find(blurDataTestId)

    // When
    await blur.trigger('click')

    // Then
    expect(wrapper.emitted('closeOptionsPane')).toBeTruthy()
  })

  it('Emit close options pane: options-close', async () => {
    // Given
    const optionsClose = wrapper.find(optionsCloseDataTestId)

    // When
    await optionsClose.trigger('click')

    // Then
    expect(wrapper.emitted('closeOptionsPane')).toBeTruthy()
  })
})
