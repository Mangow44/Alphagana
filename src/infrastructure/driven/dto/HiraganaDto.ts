import type { JapaneseTranslationDto } from '@/infrastructure/driven/dto/JapaneseTranslationDto'
import JapaneseTranslationMapper from '@/infrastructure/driven/dto/JapaneseTranslationDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Hiragana from '@/domain/models/Hiragana'
import type JapaneseTranslation from '@/domain/models/JapaneseTranslation'

export interface HiraganaDto extends JapaneseTranslationDto {
  hiragana: string
}

export default class HiraganaMapper implements ModelMapper<Hiragana, HiraganaDto> {
  private JapaneseTranslationMapper: ModelMapper<JapaneseTranslation, JapaneseTranslationDto> =
    new JapaneseTranslationMapper()

  toEntity(dto: HiraganaDto): Hiragana {
    return {
      ...this.JapaneseTranslationMapper.toEntity({ romaji: dto.romaji, fr: dto.fr, en: dto.en }),
      hiragana: dto.hiragana
    }
  }

  toDto(entity: Hiragana): HiraganaDto {
    throw new Error('Method not implemented.')
  }
}
