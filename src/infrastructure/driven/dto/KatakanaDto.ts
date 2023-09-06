import type { JapaneseWordDto } from '@/infrastructure/driven/dto/JapaneseWordDto'
import JapaneseWordMapper from '@/infrastructure/driven/dto/JapaneseWordDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Katakana from '@/domain/models/Katakana'
import type JapaneseWord from '@/domain/models/JapaneseWord'

export interface KatakanaDto extends JapaneseWordDto {
  katakana: string
}

export default class KatakanaMapper implements ModelMapper<Katakana, KatakanaDto> {
  private japaneseWordMapper: ModelMapper<JapaneseWord, JapaneseWordDto> = new JapaneseWordMapper()

  toEntity(dto: KatakanaDto): Katakana {
    return {
      ...this.japaneseWordMapper.toEntity({ romaji: dto.romaji, fr: dto.fr, en: dto.en }),
      katakana: dto.katakana
    }
  }

  toDto(entity: Katakana): KatakanaDto {
    throw new Error('Method not implemented.')
  }
}
