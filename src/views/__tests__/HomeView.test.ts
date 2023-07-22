import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import type Guess from '@/models/Guess'
import HomeView from '@/views/HomeView.vue'

describe('Home view', () => {
  let wrapper: any

  beforeEach(() => {
    setActivePinia(createPinia())
    wrapper = shallowMount(HomeView)
  })

  it('Generate a random number between min and max', () => {
    // Given
    const min = 0
    const max = 5

    // When
    for (let i = 0; i < 10; i++) {
      const randomNumber: number = wrapper.vm.generateRandomNumberBetween(min, max)

      // Then
      expect(randomNumber).toBeLessThanOrEqual(max)
      expect(randomNumber).toBeGreaterThanOrEqual(min)
    }
  })

  it('Generate new guess', () => {
    // Given
    const oldCurrentGuess: Guess = wrapper.vm.currentGuess

    // When
    wrapper.vm.generateNewCurrentGuess()
    const newCurrentGuess: Guess = wrapper.vm.oldGuess

    // Then
    expect(newCurrentGuess).not.toEqual(oldCurrentGuess)
  })
})
