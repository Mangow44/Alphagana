import type { JapaneseWordDto } from '@/infrastructure/driven/dto/JapaneseWordDto'
import JapaneseWordMapper from '@/infrastructure/driven/dto/JapaneseWordDto'
import type ModelMapper from '@/infrastructure/driven/utils/ModelMapper'
import type Hiragana from '@/domain/models/Hiragana'
import type JapaneseWord from '@/domain/models/JapaneseWord'

export interface HiraganaDto extends JapaneseWordDto {
  hiragana: string
}

export default class HiraganaMapper implements ModelMapper<Hiragana, HiraganaDto> {
  private japaneseWordMapper: ModelMapper<JapaneseWord, JapaneseWordDto> = new JapaneseWordMapper()

  toEntity(dto: HiraganaDto): Hiragana {
    return {
      ...this.japaneseWordMapper.toEntity({ romaji: dto.romaji, fr: dto.fr, en: dto.en }),
      hiragana: dto.hiragana
    }
  }

  toDto(entity: Hiragana): HiraganaDto {
    throw new Error('Method not implemented.')
  }
}
