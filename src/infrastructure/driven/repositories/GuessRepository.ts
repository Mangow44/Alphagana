import { hiraganas } from '@/infrastructure/driven/data/hiraganas'
import { katakanas } from '@/infrastructure/driven/data/katakanas'
import type { GuessDto } from '@/infrastructure/driven/dto/GuessDto'
import GuessMapper from '@/infrastructure/driven/dto/GuessDto'
import type GuessPortRepository from '@/domain/ports/GuessPortRepository'
import type Guess from '@/domain/models/Guess'
import type ModelMapper from '@/infrastructure/driven/dto/ModelMapper'

export default class GuessRepository implements GuessPortRepository {
  private guessMapper: ModelMapper<Guess, GuessDto> = new GuessMapper()

  getRandomHiragana(): Promise<Guess> {
    return new Promise((resolve, reject) => {
      const randomHiragana: GuessDto =
        hiraganas[generateRandomNumberBetween(0, hiraganas.length - 1)]
      resolve(this.guessMapper.toEntity(randomHiragana))
    })
  }

  getRandomKatakana(): Promise<Guess> {
    return new Promise((resolve, reject) => {
      const randomKatakana: GuessDto =
        katakanas[generateRandomNumberBetween(0, katakanas.length - 1)]
      resolve(this.guessMapper.toEntity(randomKatakana))
    })
  }
}

function generateRandomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
