import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Modal from '@/components/assets/Modal.vue'

describe('Modal', () => {
  let wrapper: any

  const blurDataTestId: string = "[data-testid='blur']"
  const btnCloseDataTestId: string = "[data-testid='btn-close']"

  beforeEach(() => {
    wrapper = shallowMount(Modal)
  })

  it('emit close modal when clicked on blur', async () => {
    // Given
    const blur = wrapper.find(blurDataTestId)

    // When
    await blur.trigger('click')

    // Then
    expect(wrapper.emitted('closeModal')).toBeTruthy()
  })

  it('emit close modal when clicked on close button', async () => {
    // Given
    const btnClose = wrapper.find(btnCloseDataTestId)

    // When
    await btnClose.trigger('click')

    // Then
    expect(wrapper.emitted('closeModal')).toBeTruthy()
  })
})
