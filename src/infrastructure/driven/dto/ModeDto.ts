import type { HiraganaDto } from '@/infrastructure/driven/dto/HiraganaDto'
import type { KatakanaDto } from '@/infrastructure/driven/dto/KatakanaDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Mode from '@/domain/models/Mode'

type availableTraductionsDto = keyof HiraganaDto | keyof KatakanaDto

export interface ModeDto {
  name: string
  isActive: boolean
  traduction: {
    from: availableTraductionsDto
    to: availableTraductionsDto
  }
}

export default class ModeMapper implements ModelMapper<Mode, ModeDto> {
  toEntity(dto: ModeDto): Mode {
    return {
      name: dto.name,
      isActive: dto.isActive,
      traduction: {
        from: dto.traduction.from,
        to: dto.traduction.to
      }
    }
  }

  toDto(entity: Mode): ModeDto {
    throw new Error('Method not implemented.')
  }
}
