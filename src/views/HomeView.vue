<script setup lang="ts">
import { ref } from 'vue'
import { guesses } from '@/data/guesses'
import Guess from '@/models/Guess'

const currentGuess = ref<Guess | null>(null)
const userGuessValue = ref<string | null>(null)
const feedbackError = ref<string | null>(null)

generateNewCurrentGuess()

function generateNewCurrentGuess() {
  resetFeedbackError()
  resetUserInput()
  currentGuess.value = guesses[getRandomNumberBetween(0, guesses.length - 1)]
}

function getRandomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function resetFeedbackError(): void {
  feedbackError.value = null
}

function resetUserInput(): void {
  userGuessValue.value = null
}

function isUserGuessValueValid(): void {
  if (currentGuess.value.romaji === userGuessValue.value) {
    generateNewCurrentGuess()
  } else {
    feedbackError.value = ` ${currentGuess.value.romaji}`
  }
}
</script>

<template>
  <main>
    <div class="game-container">
      <div class="guess-information">
        <h2>{{ currentGuess.hiragana }}</h2>
        <h3>{{ currentGuess.fr }}</h3>
      </div>

      <input
        class="guess"
        type="text"
        v-model="userGuessValue"
        @keyup.enter="isUserGuessValueValid()"
      />

      <div class="actions">
        <button class="validate" @click="isUserGuessValueValid()">VALIDER</button>
        <button class="next" @click="generateNewCurrentGuess()">SUIVANT</button>
      </div>

      <p class="fb-error" :class="{ display: feedbackError }">
        Mince ! La réponse attendue est :
        <span class="answer">{{ feedbackError }}</span>
      </p>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;

  width: 100%;
  height: 100%;
}

.game-container {
  margin: auto;
}

.game-container .guess-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 3rem;
}

.game-container .guess-information h2 {
  font-size: 2.5rem;
  font-weight: bold;
}

.game-container .guess-information h3 {
  font-size: 1rem;
  font-style: italic;
}

.game-container .guess {
  width: 19rem;
  height: 2rem;
  padding: 0.3rem;

  font-size: 1.4rem;

  border: none;
  border-radius: 10px;
}

.game-container .actions {
  display: flex;
  justify-content: space-around;

  margin: 2rem 0;
}

.game-container .actions button {
  width: 5rem;
  height: 2rem;
  padding: 0.3rem;

  cursor: pointer;

  border-radius: 10px;
  border: none;

  font-size: 0.8rem;
  font-weight: bold;
}

.game-container .actions .validate {
  background-color: var(--c-green);
}

.game-container .actions .next {
  background-color: var(--c-gray);
}

.game-container .fb-error {
  visibility: hidden;

  text-align: center;
  color: var(--c-red);
}

.game-container .fb-error .answer {
  font-weight: bold;
}

.game-container .fb-error.display {
  visibility: visible;
}
</style>
