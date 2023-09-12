import type { JapaneseTranslationDto } from '@/infrastructure/driven/dto/JapaneseTranslationDto'
import JapaneseTranslationMapper from '@/infrastructure/driven/dto/JapaneseTranslationDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Katakana from '@/domain/models/Katakana'
import type JapaneseTranslation from '@/domain/models/JapaneseTranslation'

export interface KatakanaDto extends JapaneseTranslationDto {
  katakana: string
}

export default class KatakanaMapper implements ModelMapper<Katakana, KatakanaDto> {
  private JapaneseTranslationMapper: ModelMapper<JapaneseTranslation, JapaneseTranslationDto> =
    new JapaneseTranslationMapper()

  toEntity(dto: KatakanaDto): Katakana {
    return {
      ...this.JapaneseTranslationMapper.toEntity({ romaji: dto.romaji, fr: dto.fr, en: dto.en }),
      katakana: dto.katakana
    }
  }

  toDto(entity: Katakana): KatakanaDto {
    throw new Error('Method not implemented.')
  }
}
