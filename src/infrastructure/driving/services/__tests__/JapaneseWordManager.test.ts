import { describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useJapaneseWordStore } from '@/infrastructure/driving/stores/japaneseWordStore'
import JapaneseWordRepository from '@/infrastructure/driven/repositories/JapaneseWordRepository'
import JapaneseWordManager from '@/infrastructure/driving/services/JapaneseWordManager'
import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'

describe('Japanese word manager', () => {
  setActivePinia(createPinia())

  const japaneseWordManager = new JapaneseWordManager()
  const japaneseWordStore = useJapaneseWordStore()
  const hiraganas: Hiragana[] = [{ hiragana: 'おちゃ', romaji: 'ocha', fr: 'thé', en: 'tea' }]
  const katakanas: Katakana[] = [{ katakana: 'ドレス', romaji: 'doresu', fr: 'robe', en: 'dress' }]

  it("Get all hiraganas and set hiraganas' store", async () => {
    // Given
    vi.spyOn(JapaneseWordRepository.prototype, 'getHiraganas').mockReturnValue(
      Promise.resolve(hiraganas)
    )

    // When
    const managerHiraganas: Hiragana[] = await japaneseWordManager.getHiraganas()

    // Then
    expect(managerHiraganas).toEqual(hiraganas)
    expect(japaneseWordStore.hiraganas).toEqual(hiraganas)
  })

  it("Get all katakanas and set katakanas' store", async () => {
    // Given
    vi.spyOn(JapaneseWordRepository.prototype, 'getKatakanas').mockReturnValue(
      Promise.resolve(katakanas)
    )

    // When
    const managerKatakanas: Katakana[] = await japaneseWordManager.getKatakanas()

    // Then
    expect(managerKatakanas).toEqual(katakanas)
    expect(japaneseWordStore.katakanas).toEqual(katakanas)
  })
})
