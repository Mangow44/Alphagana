import { defineStore } from 'pinia'
import { ref } from 'vue'
import type Hiragana from '@/domain/models/Hiragana'
import type Katakana from '@/domain/models/Katakana'

export const useJapaneseWordStore = defineStore('japaneseWord', () => {
  const hiraganas = ref<Hiragana[]>([])
  const katakanas = ref<Katakana[]>([])

  return { hiraganas, katakanas }
})
