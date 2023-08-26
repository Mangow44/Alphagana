import { describe, expect, it, vi } from 'vitest'
import GetModes from '@/domain/useCases/mode/GetModes'
import type Mode from '@/domain/models/Mode'
import ModesRepository from '@/infrastructure/driven/repositories/ModesRepository'

describe('Get all use case', () => {
  const getModes = new GetModes()

  const mode: Mode = {
    name: 'HiraganaRomaji',
    isActive: false,
    description: 'Traduction de Hiragana vers Romaji',
    traduction: { from: 'hiragana', to: 'romaji' }
  }

  it('Get katakanas', async () => {
    // Given
    vi.spyOn(ModesRepository.prototype, 'getAll').mockReturnValue(Promise.resolve([mode]))

    // When
    const modes: Mode[] = await getModes.invoke()

    // Then
    expect(modes).toEqual([mode])
  })
})
