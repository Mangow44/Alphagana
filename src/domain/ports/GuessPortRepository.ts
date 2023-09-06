import type Guess from '@/domain/models/Guess'

export default interface GuessPortRepository {
  getRandomHiragana(): Promise<Guess>
  getRandomKatakana(): Promise<Guess>
}
