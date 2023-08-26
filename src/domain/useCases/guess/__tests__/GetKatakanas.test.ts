import { describe, expect, it, vi } from 'vitest'
import GetKatakanas from '@/domain/useCases/guess/GetKatakanas'
import GuessesRepository from '@/infrastructure/driven/repositories/GuessesRepository'
import type Guess from '@/domain/models/Guess'

describe('Get katakanas use case', () => {
  const getKatakanas = new GetKatakanas()

  const guess: Guess = {
    japanese: { alphabet: 'katakana', traduction: 'ドレス' },
    romaji: 'doresu',
    fr: 'robe',
    en: 'dress'
  }

  it('Get katakanas', async () => {
    // Given
    vi.spyOn(GuessesRepository.prototype, 'getKatakanas').mockReturnValue(Promise.resolve([guess]))

    // When
    const katakanas: Guess[] = await getKatakanas.invoke()

    // Then
    expect(katakanas).toEqual([guess])
  })
})
