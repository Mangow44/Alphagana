import type { japaneseAlphabet } from '@/domain/models/japaneseAlphabet'

export default interface Guess {
  japanese: {
    alphabet: japaneseAlphabet
    traduction: string
  }
  romaji: string
  fr: string
  en: string
}
