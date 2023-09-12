import { describe, expect, it } from 'vitest'
import { hiraganas } from '@/infrastructure/driven/data/hiraganas'
import { katakanas } from '@/infrastructure/driven/data/katakanas'
import JapaneseWordRepository from '@/infrastructure/driven/repositories/JapaneseWordRepository'
import type JapaneseWordPortRepository from '@/domain/ports/JapaneseWordPortRepository'
import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'

describe('Japanese word repository', () => {
  const japaneseWordRepository: JapaneseWordPortRepository = new JapaneseWordRepository()

  it('Get all hiraganas', async () => {
    // Given

    // When
    const repositoryHiraganas: Hiragana[] = await japaneseWordRepository.getHiraganas()

    // Then
    expect(repositoryHiraganas).toEqual(hiraganas)
  })

  it('Get all katakanas', async () => {
    // Given

    // When
    const repositoryKatakanas: Katakana[] = await japaneseWordRepository.getKatakanas()

    // Then
    expect(repositoryKatakanas).toEqual(katakanas)
  })
})
