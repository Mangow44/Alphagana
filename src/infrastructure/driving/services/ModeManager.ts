import { useModeStore } from '@/infrastructure/driving/stores/modeStore'
import ModeRepository from '@/infrastructure/driven/repositories/ModeRepository'
import type ModePortRepository from '@/domain/ports/ModePortRepository'
import type Mode from '@/domain/models/Mode'

export default class ModeManager {
  constructor(
    public modeStore = useModeStore(),
    private modeRepository: ModePortRepository = new ModeRepository()
  ) {}

  public async getModes(): Promise<Mode[]> {
    if (this.modeStore.modes.length === 0) this.modeStore.modes = await this.modeRepository.getAll()

    return this.modeStore.modes
  }
}
