import type Guess from '@/domain/models/Guess'
import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'

export type availableTraductions = keyof Guess | keyof Hiragana | keyof Katakana

export default interface Mode {
  name: string
  isActive: boolean
  traduction: {
    from: availableTraductions
    to: availableTraductions
  }
}
