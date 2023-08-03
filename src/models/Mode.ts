import type Guess from '@/models/Guess'

export default interface Mode {
  name: string
  isActive: boolean
  description: string
  keys: {
    from: keyof Guess
    to: keyof Guess
  }
}
