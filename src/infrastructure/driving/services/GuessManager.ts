import { useGuessStore } from '@/infrastructure/driving/stores/guessStore'
import GuessRepository from '@/infrastructure/driven/repositories/GuessRepository'
import type GuessPortRepository from '@/domain/ports/GuessPortRepository'
import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'

export default class GuessManager {
  constructor(
    public guessStore = useGuessStore(),
    private guessRepository: GuessPortRepository = new GuessRepository()
  ) {}

  public async getHiraganas(): Promise<Hiragana[]> {
    if (this.guessStore.hiraganas.length === 0)
      this.guessStore.hiraganas = await this.guessRepository.getHiraganas()

    return this.guessStore.hiraganas
  }

  public async getKatakanas(): Promise<Katakana[]> {
    if (this.guessStore.katakanas.length === 0)
      this.guessStore.katakanas = await this.guessRepository.getKatakanas()

    return this.guessStore.katakanas
  }
}
