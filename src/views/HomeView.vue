<script setup lang="ts">
import { ref } from 'vue'
import { guesses } from '@/data/guesses'
import Guess from '@/models/Guess'
import GameBlock from '@/components/game/GameBlock.vue'

const currentGuess = ref<Guess | null>(null)

generateNewCurrentGuess()

function generateNewCurrentGuess() {
  currentGuess.value = guesses[getRandomNumberBetween(0, guesses.length - 1)]
}

function getRandomNumberBetween(min: number, max: number): number {
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
