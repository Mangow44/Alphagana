import { hiraganas } from '@/infrastructure/driven/data/hiraganas'
import { katakanas } from '@/infrastructure/driven/data/katakanas'
import type { HiraganaDto } from '@/infrastructure/driven/dto/HiraganaDto'
import type { KatakanaDto } from '@/infrastructure/driven/dto/KatakanaDto'
import HiraganaMapper from '@/infrastructure/driven/dto/HiraganaDto'
import KatakanaMapper from '@/infrastructure/driven/dto/KatakanaDto'
import type GuessPortRepository from '@/domain/ports/GuessPortRepository'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'

export default class GuessRepository implements GuessPortRepository {
  private hiraganaMapper: ModelMapper<Hiragana, HiraganaDto> = new HiraganaMapper()
  private katakanaMapper: ModelMapper<Katakana, KatakanaDto> = new KatakanaMapper()

  getHiraganas(): Promise<Hiragana[]> {
    return new Promise((resolve, reject) => {
      resolve(hiraganas.map((hiraganaDto) => this.hiraganaMapper.toEntity(hiraganaDto)))
    })
  }

  getKatakanas(): Promise<Katakana[]> {
    return new Promise((resolve, reject) => {
      resolve(katakanas.map((katakanaDto) => this.katakanaMapper.toEntity(katakanaDto)))
    })
  }
}
