import ModesRepository from '@/infrastructure/driven/repositories/ModesRepository'
import type Mode from '@/domain/models/Mode'
import type ModesPortRepository from '@/domain/ports/ModesPortRepository'

export default class GetModes {
  private repository: ModesPortRepository

  constructor() {
    this.repository = new ModesRepository()
  }

  public async invoke(): Promise<Mode[]> {
    return await this.repository.getAll()
  }
}
