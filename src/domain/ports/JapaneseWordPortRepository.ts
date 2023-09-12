import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'

export default interface JapaneseWordPortRepository {
  getHiraganas(): Promise<Hiragana[]>
  getKatakanas(): Promise<Katakana[]>
}
