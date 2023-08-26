import type { japaneseAlphabet } from '@/domain/models/japaneseAlphabet'
import type Guess from '@/domain/models/Guess'

type availableTraductions = keyof Pick<Guess, 'romaji' | 'fr' | 'en'> | japaneseAlphabet

export default interface Mode {
  name: string
  isActive: boolean
  description: string
  traduction: {
    from: availableTraductions
    to: availableTraductions
  }
}
