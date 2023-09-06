import type JapaneseWord from '@/domain/models/JapaneseWord'

export default interface Hiragana extends JapaneseWord {
  hiragana: string
}
