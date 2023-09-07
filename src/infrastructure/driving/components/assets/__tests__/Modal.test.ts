import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import Modal from '@/infrastructure/driving/components/assets/Modal.vue'

describe('Modal', () => {
  let wrapper: any

  const dialogDataTestId: string = "[data-testid='dialog']"
  const btnCloseDataTestId: string = "[data-testid='btn-close']"

  beforeEach(() => {
    wrapper = shallowMount(Modal)
  })

  it('emit close modal when clicked on dialog', async () => {
    // Given
    const dialog = wrapper.find(dialogDataTestId)

    // When
    await dialog.trigger('click')

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
