import { describe, expect, it } from 'vitest'
import type { HiraganaDto } from '@/infrastructure/driven/dto/HiraganaDto'
import HiraganaMapper from '@/infrastructure/driven/dto/HiraganaDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Hiragana from '@/domain/models/Hiragana'

describe('Hiragana dto', () => {
  const hiraganaMapper: ModelMapper<Hiragana, HiraganaDto> = new HiraganaMapper()

  const hiragana: Hiragana = { hiragana: 'おちゃ', romaji: 'ocha', fr: 'thé', en: 'tea' }
  const hiraganaDto: HiraganaDto = { hiragana: 'おちゃ', romaji: 'ocha', fr: 'thé', en: 'tea' }

  it('Turn dto to entity', () => {
    // Given

    // When
    const entity: Hiragana = hiraganaMapper.toEntity(hiraganaDto)

    // Then
    expect(entity).toEqual(hiragana)
  })

  it('Turn entity to dto', () => {
    // Given

    // When

    // Then
    expect(() => hiraganaMapper.toDto(hiragana)).toThrowError('Method not implemented.')
  })
})
