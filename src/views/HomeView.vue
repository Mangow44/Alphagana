<script setup lang="ts">
import { ref, watch } from 'vue'
import { guesses } from '@/data/guesses'
import { useModeStore } from '@/stores/modeStore'
import type Mode from '@/stores/modeStore'
import Guess from '@/models/Guess'
import GameBlock from '@/components/game/GameBlock.vue'

const modeStore = useModeStore()
const currentGuess = ref<Guess | null>(null)
const guess = ref<string>('')
const translation = ref<string>('')
const answer = ref<string>('')

watch(modeStore, () => {
  generateNewCurrentGuess()
})

watch(currentGuess, () => {
  const activesModes: Array<Mode> = modeStore.modes.filter((mode) => mode.isActive)
  const modeName: string =
    activesModes[generateRandomNumberBetween(0, activesModes.length - 1)]?.name

  switch (modeName) {
    case 'HiraganaToRomaji':
      guess.value = currentGuess.value!.hiragana
      translation.value = currentGuess.value!.fr
      answer.value = currentGuess.value!.romaji
      break
    case 'RomajiToHiragana':
      guess.value = currentGuess.value!.romaji
      translation.value = currentGuess.value!.fr
      answer.value = currentGuess.value!.hiragana
      break
    default:
      guess.value = ''
      translation.value = ''
      answer.value = ''
      break
  }
})

function generateNewCurrentGuess() {
  let newGuess: Guess = guesses[generateRandomNumberBetween(0, guesses.length - 1)]
  while (newGuess === currentGuess.value) {
    newGuess = guesses[generateRandomNumberBetween(0, guesses.length - 1)]
  }
  currentGuess.value = newGuess
}

function generateRandomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

generateNewCurrentGuess()
</script>

<template>
  <main>
    <game-block
      v-if="currentGuess && guess && translation && answer"
      :guess="guess"
      :translation="translation"
      :answer="answer"
      @generate-new-guess="generateNewCurrentGuess()"
    />
  </main>
</template>

<style scoped>
main {
  display: flex;

  width: 100%;
  height: 100%;
}
</style>
