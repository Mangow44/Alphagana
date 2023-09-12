import type JapaneseTranslation from '@/domain/models/JapaneseTranslation'

export default interface Katakana extends JapaneseTranslation {
  katakana: string
}
