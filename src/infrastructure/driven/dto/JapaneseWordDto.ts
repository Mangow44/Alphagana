import type JapaneseWord from '@/domain/models/JapaneseWord'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'

export interface JapaneseWordDto {
  romaji: string
  fr: string
  en: string
}

export default class JapaneseWordMapper implements ModelMapper<JapaneseWord, JapaneseWordDto> {
  toEntity(dto: JapaneseWordDto): JapaneseWord {
    return {
      romaji: dto.romaji,
      fr: dto.fr,
      en: dto.en
    }
  }

  toDto(entity: JapaneseWord): JapaneseWordDto {
    throw new Error('Method not implemented.')
  }
}
