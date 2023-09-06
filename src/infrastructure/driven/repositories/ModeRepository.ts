import { modes } from '@/infrastructure/driven/data/modes'
import type { ModeDto } from '@/infrastructure/driven/dto/ModeDto'
import ModeMapper from '@/infrastructure/driven/dto/ModeDto'
import type ModePortRepository from '@/domain/ports/ModePortRepository'
import type ModelMapper from '@/infrastructure/driven/dto/ModelMapper'
import type Mode from '@/domain/models/Mode'

export default class ModeRepository implements ModePortRepository {
  private modeMapper: ModelMapper<Mode, ModeDto> = new ModeMapper()

  getAll(): Promise<Mode[]> {
    return new Promise((resolve, reject) => {
      resolve(modes.map((mode) => this.modeMapper.toEntity(mode)))
    })
  }
}
