import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'

export default interface GuessPortRepository {
  getHiraganas(): Promise<Hiragana[]>
  getKatakanas(): Promise<Katakana[]>
}
