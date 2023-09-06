import type { japaneseAlphabet } from '@/domain/models/japaneseAlphabet'
import type Guess from '@/domain/models/Guess'

export type availableTraductions = keyof Omit<Guess, 'japanese'> | japaneseAlphabet

export default interface Mode {
  name: string
  isActive: boolean
  traduction: {
    from: availableTraductions
    to: availableTraductions
  }
}
