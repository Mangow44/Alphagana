import type JapaneseTranslation from '@/domain/models/JapaneseTranslation'

export default interface Hiragana extends JapaneseTranslation {
  hiragana: string
}
