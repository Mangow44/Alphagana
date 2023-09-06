import type { GuessDto } from '@/infrastructure/driven/dto/GuessDto'
import GuessMapper from '@/infrastructure/driven/dto/GuessDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Guess from '@/domain/models/Guess'
import type Hiragana from '@/domain/models/Hiragana'

export interface HiraganaDto extends GuessDto {
  hiragana: string
}

export default class HiraganaMapper implements ModelMapper<Hiragana, HiraganaDto> {
  private guessMapper: ModelMapper<Guess, GuessDto> = new GuessMapper()

  toEntity(dto: HiraganaDto): Hiragana {
    return {
      ...this.guessMapper.toEntity({ romaji: dto.romaji, fr: dto.fr, en: dto.en }),
      hiragana: dto.hiragana
    }
  }

  toDto(entity: Hiragana): HiraganaDto {
    throw new Error('Method not implemented.')
  }
}
