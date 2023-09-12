import { describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useModeStore } from '@/infrastructure/driving/stores/modeStore'
import ModeRepository from '@/infrastructure/driven/repositories/ModeRepository'
import ModeManager from '@/infrastructure/driving/services/ModeManager'
import type Mode from '@/domain/models/Mode'

describe('Mode manager', () => {
  setActivePinia(createPinia())

  const modeManager = new ModeManager()
  const modeStore = useModeStore()
  const modes: Mode[] = [
    {
      name: 'HiraganaToRomaji',
      isActive: true,
      traduction: { from: 'hiragana', to: 'romaji' }
    }
  ]

  it('Get all modes and set store', async () => {
    // Given
    vi.spyOn(ModeRepository.prototype, 'getAll').mockReturnValue(Promise.resolve(modes))

    // When
    const managerModes: Mode[] = await modeManager.getModes()

    // Then
    expect(managerModes).toEqual(modes)
    expect(modeStore.modes).toEqual(modes)
  })
})
