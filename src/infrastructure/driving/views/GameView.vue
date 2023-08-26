<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { guesses } from '@/infrastructure/driving/data/guesses'
import { useModeStore } from '@/infrastructure/driving/stores/modeStore'
import type Mode from '@/infrastructure/driving/models/Mode'
import type Guess from '@/infrastructure/driving/models/Guess'
import GameBlock from '@/infrastructure/driving/components/game/GameBlock.vue'

const modeStore = useModeStore()
const currentGuess = ref<Guess | null>(null)
const guess = ref<string>('')
const translation = ref<string>('')
const answer = ref<string>('')
const userLanguage = computed<string>(() => navigator.language.split('-')[0])

watch(modeStore, () => {
  generateNewCurrentGuess()
})

watch(currentGuess, () => {
  const activesModes: Array<Mode> = modeStore.modes.filter((mode) => mode.isActive)
  const currentMode: Mode = activesModes[generateRandomNumberBetween(0, activesModes.length - 1)]

  if (currentMode) {
    translation.value =
      userLanguage.value === 'fr' ? currentGuess.value!.fr : currentGuess.value!.en
    guess.value = currentGuess.value![currentMode.keys.from]
    answer.value = currentGuess.value![currentMode.keys.to]
  } else {
    translation.value = ''
    guess.value = ''
    answer.value = ''
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
