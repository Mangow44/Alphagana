import type Guess from '@/domain/models/Guess'

export default interface Katakana extends Guess {
  katakana: string
}
