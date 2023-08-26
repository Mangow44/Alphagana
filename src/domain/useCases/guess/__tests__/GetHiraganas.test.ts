import { describe, expect, it, vi } from 'vitest'
import GetHiraganas from '@/domain/useCases/guess/GetHiraganas'
import GuessesRepository from '@/infrastructure/driven/repositories/GuessesRepository'
import type Guess from '@/domain/models/Guess'

describe('Get hiraganas use case', () => {
  const getHiraganas = new GetHiraganas()

  const guess: Guess = {
    japanese: { alphabet: 'hiragana', traduction: 'おちゃ' },
    romaji: 'ocha',
    fr: 'thé',
    en: 'tea'
  }

  it('Get hiraganas', async () => {
    // Given
    vi.spyOn(GuessesRepository.prototype, 'getHiraganas').mockReturnValue(Promise.resolve([guess]))

    // When
    const hiraganas: Guess[] = await getHiraganas.invoke()

    // Then
    expect(hiraganas).toEqual([guess])
  })
})
