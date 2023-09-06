import type Guess from '@/domain/models/Guess'
import type ModelMapper from '@/infrastructure/driven/dto/ModelMapper'

export interface GuessDto {
  japanese: string
  romaji: string
  fr: string
  en: string
}

export default class GuessMapper implements ModelMapper<Guess, GuessDto> {
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
