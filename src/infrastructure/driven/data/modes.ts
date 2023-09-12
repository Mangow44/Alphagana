import type { ModeDto } from '@/infrastructure/driven/dto/ModeDto'

export const modes: ModeDto[] = [
  {
    name: 'HiraganaToRomaji',
    isActive: true,
    traduction: { from: 'hiragana', to: 'romaji' }
  },
  {
    name: 'KatakanaToRomaji',
    isActive: false,
    traduction: { from: 'katakana', to: 'romaji' }
  },
  {
    name: 'RomajiToHiragana',
    isActive: false,
    traduction: { from: 'romaji', to: 'hiragana' }
  },
  {
    name: 'RomajiToKatakana',
    isActive: false,
    traduction: { from: 'romaji', to: 'katakana' }
  }
]
