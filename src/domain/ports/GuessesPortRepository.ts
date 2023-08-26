import type Guess from '@/domain/models/Guess'

export default interface GuessesPortRepository {
  getHiraganas(): Promise<Guess[]>
  getKatakanas(): Promise<Guess[]>
}
