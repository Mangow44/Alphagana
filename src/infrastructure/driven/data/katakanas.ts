import type { KatakanaDto } from '@/infrastructure/driven/dto/KatakanaDto'

export const katakanas: KatakanaDto[] = [
  // Pays
  { katakana: 'アメリカ', romaji: 'amerika', fr: 'états-unis', en: 'united states' },
  { katakana: 'フランス', romaji: 'furansu', fr: 'france', en: 'france' },
  { katakana: 'イギリス', romaji: 'igirisu', fr: 'royaume-uni', en: 'united kingdom' },
  { katakana: 'メキシコ', romaji: 'mekishiko', fr: 'mexique', en: 'mexico' },
  { katakana: 'ニホン', romaji: 'nihon', fr: 'japon', en: 'japan' },
  { katakana: 'チュウゴク', romaji: 'chuugoku', fr: 'chine', en: 'china' },
  { katakana: 'ドイツ', romaji: 'doitsu', fr: 'allemagne', en: 'germany' },
  { katakana: 'ブラジル', romaji: 'burajiru', fr: 'brésil', en: 'brazil' },

  // Couleurs
  { katakana: 'オレンジ', romaji: 'orenji', fr: 'orange', en: 'orange' },
  { katakana: 'ピンク', romaji: 'pinku', fr: 'rose', en: 'pink' },

  // Vêtements
  { katakana: 'ドレス', romaji: 'doresu', fr: 'robe', en: 'dress' },

  // Nourriture
  { katakana: 'チーズ', romaji: 'chiizu', fr: 'fromage', en: 'cheese' }
]
