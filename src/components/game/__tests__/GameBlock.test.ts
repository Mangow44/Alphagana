import { beforeEach, describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import GameBlock from '@/components/game/GameBlock.vue'

describe('Game block', () => {
  const guess: string = 'さようなら'
  const translation: string = 'au revoir'
  const answer: string = 'sayounara'
  const wrapper: any = shallowMount(GameBlock, {
    props: {
      guess,
      translation,
      answer
    }
  })

  const guessInputDataTestId: string = "[data-testid='guess-input']"
  const validateButtonDataTestId: string = "[data-testid='validate-btn']"
  const feedbackErrorDataTestId: string = "[data-testid='fb-error']"

  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('User input is correct', async () => {
    // Given
    const guessInput = wrapper.find(guessInputDataTestId)
    const validateButton = wrapper.find(validateButtonDataTestId)

    // When
    guessInput.setValue(answer)
    await validateButton.trigger('click')

    // Expect
    expect(wrapper.emitted('generateNewGuess')).toBeTruthy()
  })

  it('User input is correct even if the answer is in uppercase', async () => {
    // Given
    const guessInput = wrapper.find(guessInputDataTestId)
    const validateButton = wrapper.find(validateButtonDataTestId)

    // When
    guessInput.setValue(answer.toUpperCase())
    await validateButton.trigger('click')

    // Expect
    expect(wrapper.emitted('generateNewGuess')).toBeTruthy()
  })

  it('User input is incorrect', async () => {
    // Given
    const guessInput = wrapper.find(guessInputDataTestId)
    const validateButton = wrapper.find(validateButtonDataTestId)
    const feedbackError = wrapper.find(feedbackErrorDataTestId)

    // When
    guessInput.setValue('nani')
    await validateButton.trigger('click')

    // Expect
    expect(wrapper.vm.feedbackError).toEqual(answer)
    expect(feedbackError.classes().includes('display')).toBeTruthy()
  })

  it('Reset feedback and user input when props change', async () => {
    // Given
    const guessInput = wrapper.find(guessInputDataTestId)
    const validateButton = wrapper.find(validateButtonDataTestId)

    // When
    guessInput.setValue('nani')
    await validateButton.trigger('click')

    // Then
    expect(wrapper.vm.feedbackError).toEqual(answer)
    expect(wrapper.vm.userGuessValue).toEqual('nani')

    // When
    await wrapper.setProps({
      guess: 'ok',
      translation: 'ok',
      answer: 'ok'
    })

    // Then
    expect(wrapper.vm.feedbackError).toBeNull()
    expect(wrapper.vm.userGuessValue).toBeNull()
  })
})
