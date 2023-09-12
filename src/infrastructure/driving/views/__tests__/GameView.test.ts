import { shallowMount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import GameView from '@/infrastructure/driving/views/GameView.vue'

describe('Game view', () => {
  let wrapper: any

  beforeEach(() => {
    vi.clearAllMocks()
    setActivePinia(createPinia())
    wrapper = shallowMount(GameView)
  })

  it('Generate new guess when component is rendered', async () => {
    // Given

    // When

    // Then
    expect(wrapper.vm.guess).not.toBeNull()
  })
})
