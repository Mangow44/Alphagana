import type Mode from '@/domain/models/Mode'

export default interface ModePortRepository {
  getAll(): Promise<Mode[]>
}
