import type Mode from '@/domain/models/Mode'

export default interface ModesPortRepository {
  getAll(): Promise<Mode[]>
}
