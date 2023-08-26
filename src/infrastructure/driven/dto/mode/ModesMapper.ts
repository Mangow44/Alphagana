import type ModelMapper from '@/infrastructure/driven/dto/ModelMapper'
import type Mode from '@/domain/models/Mode'
import type ModeDto from '@/infrastructure/driven/dto/mode/ModeDto'

export default class ModesMapper implements ModelMapper<Mode, ModeDto> {
  toEntity(dto: ModeDto): Mode {
    return {
      name: dto.name,
      isActive: dto.isActive,
      description: dto.description,
      traduction: dto.traduction
    }
  }

  toDto(entity: Mode): ModeDto {
    throw new Error('Method not implemented.')
  }
}
