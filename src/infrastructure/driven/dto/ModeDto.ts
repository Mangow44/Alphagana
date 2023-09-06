import type { japaneseAlphabetDto } from '@/infrastructure/driven/dto/JapaneseAlphabetDto'
import type { GuessDto } from '@/infrastructure/driven/dto/GuessDto'
import type ModelMapper from '@/infrastructure/driven/dto/ModelMapper'
import type Mode from '@/domain/models/Mode'

type availableTraductionsDto = keyof Omit<GuessDto, 'japanese'> | japaneseAlphabetDto

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
