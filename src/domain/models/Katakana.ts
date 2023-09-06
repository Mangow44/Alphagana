import type JapaneseWord from '@/domain/models/JapaneseWord'

export default interface Katakana extends JapaneseWord {
  katakana: string
}
