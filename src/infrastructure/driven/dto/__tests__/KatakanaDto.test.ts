import { describe, expect, it } from 'vitest'
import type { KatakanaDto } from '@/infrastructure/driven/dto/KatakanaDto'
import KatakanaMapper from '@/infrastructure/driven/dto/KatakanaDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Katakana from '@/domain/models/Katakana'

describe('Katakana dto', () => {
  const katakanaMapper: ModelMapper<Katakana, KatakanaDto> = new KatakanaMapper()

  const katakana: Katakana = { katakana: 'ドレス', romaji: 'doresu', fr: 'robe', en: 'dress' }
  const katakanaDto: KatakanaDto = { katakana: 'ドレス', romaji: 'doresu', fr: 'robe', en: 'dress' }

  it('Turn dto to entity', () => {
    // Given

    // When
    const entity: Katakana = katakanaMapper.toEntity(katakanaDto)

    // Then
    expect(entity).toEqual(katakana)
  })

  it('Turn entity to dto', () => {
    // Given

    // When

    // Then
    expect(() => katakanaMapper.toDto(katakana)).toThrowError('Method not implemented.')
  })
})
