import JapaneseWordManager from '@/infrastructure/driving/services/JapaneseWordManager'
import ModeManager from '@/infrastructure/driving/services/ModeManager'
import type Guess from '@/domain/models/Guess'
import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'
import type Mode from '@/domain/models/Mode'

export default class GameManager {
  constructor(
    private japaneseWordManager = new JapaneseWordManager(),
    private modeManager = new ModeManager(),
    private usedHiraganaEntities: Set<Hiragana> = new Set(),
    private usedKatakanaEntities: Set<Katakana> = new Set()
  ) {}

  public async generateGuess(): Promise<Guess | null> {
    const userLanguage: string = navigator.language.split('-')[0]
    const mode: Mode | null = await this.getRandomActiveMode()
    let japaneseWord: Hiragana | Katakana | null = null
    let guess: Guess = {
      guess: '',
      answer: '',
      translation: ''
    }

    if (!mode) return null

    if (mode.traduction.from === 'hiragana' || mode.traduction.to === 'hiragana') {
      japaneseWord = this.generateUniqueEntity(
        await this.japaneseWordManager.getHiraganas(),
        this.usedHiraganaEntities
      )
    }
    if (mode.traduction.from === 'katakana' || mode.traduction.to === 'katakana') {
      japaneseWord = this.generateUniqueEntity(
        await this.japaneseWordManager.getKatakanas(),
        this.usedKatakanaEntities
      )
    }

    if (!japaneseWord) return null

    switch (mode.traduction.from) {
      case 'hiragana':
        guess.guess = (japaneseWord as Hiragana).hiragana
        break
      case 'katakana':
        guess.guess = (japaneseWord as Katakana).katakana
        break
      default:
        guess.guess = japaneseWord[mode.traduction.from]
        break
    }

    switch (mode.traduction.to) {
      case 'hiragana':
        guess.answer = (japaneseWord as Hiragana).hiragana
        break
      case 'katakana':
        guess.answer = (japaneseWord as Katakana).katakana
        break
      default:
        guess.answer = japaneseWord[mode.traduction.to]
        break
    }

    guess.translation = userLanguage === 'fr' ? japaneseWord.fr : japaneseWord.en

    return guess
  }

  private async getRandomActiveMode(): Promise<Mode> {
    const activeModes: Mode[] = (await this.modeManager.getModes()).filter((mode) => mode.isActive)
    return this.generateRandomEntityFromArray(activeModes)
  }

  private generateRandomEntityFromArray<T>(array: T[]): T {
    const randomIndex: number = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }

  private generateUniqueEntity(
    array: Hiragana[] | Katakana[],
    usedEntities: Set<Hiragana | Katakana>
  ): Hiragana | Katakana {
    if (usedEntities.size === array.length) {
      usedEntities.clear()
    }

    const availableEntities = array.filter((entity) => !usedEntities.has(entity))

    const selectedEntity: Hiragana | Katakana =
      this.generateRandomEntityFromArray(availableEntities)
    usedEntities.add(selectedEntity)
    return selectedEntity
  }
}
