import { useJapaneseWordStore } from '@/infrastructure/driving/stores/japaneseWordStore'
import JapaneseWordRepository from '@/infrastructure/driven/repositories/JapaneseWordRepository'
import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'
import type JapaneseWordPortRepository from '@/domain/ports/JapaneseWordPortRepository'

export default class JapaneseWordManager {
  constructor(
    public japaneseWordStore = useJapaneseWordStore(),
    private japaneseWordRepository: JapaneseWordPortRepository = new JapaneseWordRepository()
  ) {}

  public async getHiraganas(): Promise<Hiragana[]> {
    if (this.japaneseWordStore.hiraganas.length === 0)
      this.japaneseWordStore.hiraganas = await this.japaneseWordRepository.getHiraganas()

    return this.japaneseWordStore.hiraganas
  }

  public async getKatakanas(): Promise<Katakana[]> {
    if (this.japaneseWordStore.katakanas.length === 0)
      this.japaneseWordStore.katakanas = await this.japaneseWordRepository.getKatakanas()

    return this.japaneseWordStore.katakanas
  }
}
