import { hiraganas } from '@/infrastructure/driven/data/hiraganas'
import { katakanas } from '@/infrastructure/driven/data/katakanas'
import type Guess from '@/domain/models/Guess'
import type GuessesPortRepository from '@/domain/ports/GuessesPortRepository'

export default class GuessesRepository implements GuessesPortRepository {
  getHiraganas(): Promise<Guess[]> {
    return new Promise((resolve, reject) => {
      resolve(hiraganas)
    })
  }

  getKatakanas(): Promise<Guess[]> {
    return new Promise((resolve, reject) => {
      resolve(katakanas)
    })
  }
}
