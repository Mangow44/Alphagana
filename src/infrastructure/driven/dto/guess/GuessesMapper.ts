import type { GuessDto } from '@/infrastructure/driven/dto/guess/GuessDto'
import type Guess from '@/domain/models/Guess'
import type ModelMapper from '@/infrastructure/driven/dto/ModelMapper'

export default class GuessesMapper implements ModelMapper<Guess, GuessDto> {
  toEntity(dto: GuessDto): Guess {
    return {
      japanese: dto.japanese,
      romaji: dto.romaji,
      fr: dto.fr,
      en: dto.en
    }
  }

  toDto(entity: Guess): GuessDto {
    throw new Error('Method not implemented.')
  }
}
