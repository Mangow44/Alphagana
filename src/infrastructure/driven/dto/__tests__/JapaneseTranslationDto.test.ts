import { describe, expect, it } from 'vitest'
import type { JapaneseTranslationDto } from '@/infrastructure/driven/dto/JapaneseTranslationDto'
import JapaneseTranslationMapper from '@/infrastructure/driven/dto/JapaneseTranslationDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type JapaneseTranslation from '@/domain/models/JapaneseTranslation'

describe('Japanese translation dto', () => {
  const japaneseTranslationMapper: ModelMapper<JapaneseTranslation, JapaneseTranslationDto> =
    new JapaneseTranslationMapper()

  const japaneseTranslation: JapaneseTranslation = {
    romaji: 'doresu',
    fr: 'robe',
    en: 'dress'
  }
  const japaneseTranslationDto: JapaneseTranslationDto = {
    romaji: 'doresu',
    fr: 'robe',
    en: 'dress'
  }

  it('Turn dto to entity', () => {
    // Given

    // When
    const entity: JapaneseTranslation = japaneseTranslationMapper.toEntity(japaneseTranslationDto)

    // Then
    expect(entity).toEqual(japaneseTranslation)
  })

  it('Turn entity to dto', () => {
    // Given

    // When

    // Then
    expect(() => japaneseTranslationMapper.toDto(japaneseTranslation)).toThrowError(
      'Method not implemented.'
    )
  })
})
