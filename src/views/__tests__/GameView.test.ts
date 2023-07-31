import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import type Guess from '@/models/Guess'
import GameView from '@/views/GameView.vue'

describe('Game view', () => {
  let wrapper: any

  vi.mock('@/stores/modeStore', () => ({
    useModeStore: vi.fn().mockReturnValue({
      modes: [
        { name: 'HiraganaToRomaji', isActive: true, description: 'Hiragana to Romaji' },
        { name: 'RomajiToHiragana', isActive: false, description: 'Romaji to Hiragana' }
      ]
    })
  }))

  vi.spyOn(global, 'navigator', 'get').mockReturnValue({
    language: 'fr-FR'
  } as any)

  beforeEach(() => {
    vi.clearAllMocks()
    setActivePinia(createPinia())
    wrapper = shallowMount(GameView)
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

  it('When current guess is update, fill guess, translation and answer : hiragana to romaji', async () => {
    // Given

    // When
    wrapper.vm.generateNewCurrentGuess()
    await wrapper.vm.$nextTick

    // Then
    expect(wrapper.vm.guess).toEqual(wrapper.vm.currentGuess.hiragana)
    expect(wrapper.vm.translation).toEqual(wrapper.vm.currentGuess.fr)
    expect(wrapper.vm.answer).toEqual(wrapper.vm.currentGuess.romaji)
  })
})
