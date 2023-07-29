import { shallowMount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import GameOptions from '@/components/header/options/GameOptions.vue'

describe('Game options', () => {
  let wrapper: any
  const btnOptionsDataTestId: string = "[data-testid='btn-options']"

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = shallowMount(GameOptions)
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
