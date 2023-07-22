<script setup lang="ts">
import { ref } from 'vue'
import { guesses } from '@/data/guesses'
import Guess from '@/models/Guess'
import GameBlock from '@/components/game/GameBlock.vue'

// TODO : faire des options pour ajouter le mode romaji en guess et hiragana en answer

const currentGuess = ref<Guess | null>(null)

generateNewCurrentGuess()

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
</script>

<template>
  <main>
    <game-block
      v-if="currentGuess"
      :guess="currentGuess.hiragana"
      :translation="currentGuess.fr"
      :answer="currentGuess.romaji"
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
