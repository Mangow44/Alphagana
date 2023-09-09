import { describe, expect, it } from 'vitest'
import type { ModeDto } from '@/infrastructure/driven/dto/ModeDto'
import ModeMapper from '@/infrastructure/driven/dto/ModeDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Mode from '@/domain/models/Mode'

describe('Mode dto', () => {
  const modeMapper: ModelMapper<Mode, ModeDto> = new ModeMapper()

  const mode: Mode = {
    name: 'HiraganaToRomaji',
    isActive: true,
    traduction: { from: 'hiragana', to: 'romaji' }
  }
  const modeDto: ModeDto = {
    name: 'HiraganaToRomaji',
    isActive: true,
    traduction: { from: 'hiragana', to: 'romaji' }
  }

  it('Turn dto to entity', () => {
    // Given

    // When
    const entity: Mode = modeMapper.toEntity(modeDto)

    // Then
    expect(entity).toEqual(mode)
  })

  it('Turn entity to dto', () => {
    // Given

    // When

    // Then
    expect(() => modeMapper.toDto(mode)).toThrowError('Method not implemented.')
  })
})
