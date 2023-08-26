import GuessesRepository from '@/infrastructure/driven/repositories/GuessesRepository'
import type Guess from '@/domain/models/Guess'
import type GuessesPortRepository from '@/domain/ports/GuessesPortRepository'

export default class GetKatakanas {
  private repository: GuessesPortRepository

  constructor() {
    this.repository = new GuessesRepository()
  }

  public async invoke(): Promise<Guess[]> {
    return await this.repository.getKatakanas()
  }
}
