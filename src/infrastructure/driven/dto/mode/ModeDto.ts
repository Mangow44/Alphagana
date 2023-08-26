import type { japaneseAlphabet } from '@/domain/models/japaneseAlphabet'
import type { GuessDto } from '@/infrastructure/driven/dto/guess/GuessDto'

type availableTraductions = keyof Omit<GuessDto, 'japanese'> | japaneseAlphabet

export default interface ModeDto {
  name: string
  isActive: boolean
  description: string
  traduction: {
    from: availableTraductions
    to: availableTraductions
  }
}
