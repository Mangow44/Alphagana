import type Mode from '@/domain/models/Mode'
import type ModesPortRepository from '@/domain/ports/ModesPortRepository'

export default class ModesRepository implements ModesPortRepository {
  getAll(): Promise<Mode[]> {
    throw new Error('Method not implemented.')
  }
}
