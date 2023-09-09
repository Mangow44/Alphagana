import type JapaneseTranslation from '@/domain/models/JapaneseTranslation'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'

export interface JapaneseTranslationDto {
  romaji: string
  fr: string
  en: string
}

export default class JapaneseTranslationMapper
  implements ModelMapper<JapaneseTranslation, JapaneseTranslationDto>
{
  toEntity(dto: JapaneseTranslationDto): JapaneseTranslation {
    return {
      romaji: dto.romaji,
      fr: dto.fr,
      en: dto.en
    }
  }

  toDto(entity: JapaneseTranslation): JapaneseTranslationDto {
    throw new Error('Method not implemented.')
  }
}
