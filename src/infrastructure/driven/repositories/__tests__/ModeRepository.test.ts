import { describe, expect, it } from 'vitest'
import { modes } from '@/infrastructure/driven/data/modes'
import ModeRepository from '@/infrastructure/driven/repositories/ModeRepository'
import type ModePortRepository from '@/domain/ports/ModePortRepository'
import type Mode from '@/domain/models/Mode'

describe('Mode repository', () => {
  const modeRepository: ModePortRepository = new ModeRepository()

  it('Get all modes', async () => {
    // Given

    // When
    const repositoryModes: Mode[] = await modeRepository.getAll()

    // Then
    expect(repositoryModes).toEqual(modes)
  })
})
