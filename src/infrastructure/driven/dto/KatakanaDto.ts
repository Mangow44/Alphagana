import type { GuessDto } from '@/infrastructure/driven/dto/GuessDto'
import GuessMapper from '@/infrastructure/driven/dto/GuessDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Guess from '@/domain/models/Guess'
import type Katakana from '@/domain/models/Katakana'

export interface KatakanaDto extends GuessDto {
  katakana: string
}

export default class KatakanaMapper implements ModelMapper<Katakana, KatakanaDto> {
  private guessMapper: ModelMapper<Guess, GuessDto> = new GuessMapper()

  toEntity(dto: KatakanaDto): Katakana {
    return {
      ...this.guessMapper.toEntity({ romaji: dto.romaji, fr: dto.fr, en: dto.en }),
      katakana: dto.katakana
    }
  }

  toDto(entity: Katakana): KatakanaDto {
    throw new Error('Method not implemented.')
  }
}
