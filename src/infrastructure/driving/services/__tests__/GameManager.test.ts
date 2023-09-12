import { describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import JapaneseWordRepository from '@/infrastructure/driven/repositories/JapaneseWordRepository'
import ModeRepository from '@/infrastructure/driven/repositories/ModeRepository'
import GameManager from '@/infrastructure/driving/services/GameManager'
import type Guess from '@/domain/models/Guess'
import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'
import type Mode from '@/domain/models/Mode'

describe('Game manager', () => {
  setActivePinia(createPinia())
  vi.spyOn(global, 'navigator', 'get').mockReturnValue({
    language: 'fr-FR'
  } as any)

  const gameManager = new GameManager()

  const hiraganas: Hiragana[] = [{ hiragana: 'おちゃ', romaji: 'ocha', fr: 'thé', en: 'tea' }]
  const katakanas: Katakana[] = [{ katakana: 'ドレス', romaji: 'doresu', fr: 'robe', en: 'dress' }]
  const modes: Mode[] = [
    {
      name: 'HiraganaToRomaji',
      isActive: false,
      traduction: { from: 'hiragana', to: 'romaji' }
    },
    {
      name: 'KatakanaToRomaji',
      isActive: false,
      traduction: { from: 'katakana', to: 'romaji' }
    }
  ]

  it('Generate a guess : hiragana', async () => {
    // Given
    modes[0].isActive = true
    const expectedGuess: Guess = {
      guess: 'おちゃ',
      answer: 'ocha',
      translation: 'thé'
    }
    vi.spyOn(JapaneseWordRepository.prototype, 'getHiraganas').mockReturnValue(
      Promise.resolve(hiraganas)
    )
    vi.spyOn(ModeRepository.prototype, 'getAll').mockReturnValue(Promise.resolve(modes))

    // When
    const guess: Guess | null = await gameManager.generateGuess()

    // Then
    expect(guess).toEqual(expectedGuess)
  })

  it('Generate a guess : katakana', async () => {
    // Given
    modes[1].isActive = true
    const expectedGuess: Guess = {
      guess: 'ドレス',
      answer: 'doresu',
      translation: 'robe'
    }
    vi.spyOn(JapaneseWordRepository.prototype, 'getKatakanas').mockReturnValue(
      Promise.resolve(katakanas)
    )
    vi.spyOn(ModeRepository.prototype, 'getAll').mockReturnValue(Promise.resolve(modes))

    // When
    const guess: Guess | null = await gameManager.generateGuess()

    // Then
    expect(guess).toEqual(expectedGuess)
  })
})
