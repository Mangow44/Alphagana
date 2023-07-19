<script setup lang="ts">
import { watch, ref } from 'vue'

const props = defineProps<{
  guess: string
  translation: string
  answer: string
}>()

const emit = defineEmits<{
  (e: 'generateNewGuess'): void
}>()

const userGuessValue = ref<string | null>(null)
const feedbackError = ref<string | null>(null)

watch(props, () => {
  resetFeedbackError()
  resetUserInput()
})

function isUserGuessValueValid(): void {
  if (props.answer === userGuessValue.value) {
    emit('generateNewGuess')
  } else {
    feedbackError.value = `${props.answer}`
  }
}

function resetFeedbackError(): void {
  feedbackError.value = null
}

function resetUserInput(): void {
  userGuessValue.value = null
}
</script>

<template>
  <div class="game-container">
    <div class="guess-information">
      <h2>{{ guess }}</h2>
      <h3>{{ translation }}</h3>
    </div>

    <input
      class="guess"
      type="text"
      v-model="userGuessValue"
      @keyup.enter="isUserGuessValueValid()"
      data-testid="guess-input"
    />

    <div class="actions">
      <button class="validate" @click="isUserGuessValueValid()" data-testid="validate-btn">
        VALIDER
      </button>
      <button class="next" @click="emit('generateNewGuess')">SUIVANT</button>
    </div>

    <p class="fb-error" :class="{ display: feedbackError }" data-testid="fb-error">
      Mince ! La réponse attendue est :
      <span class="answer">{{ feedbackError }}</span>
    </p>
  </div>
</template>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;

  width: 20rem;
  height: auto;
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
  margin: auto;

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
}

.game-container .fb-error .answer {
  font-weight: bold;
}

.game-container .fb-error.display {
  visibility: visible;

  text-align: center;
  color: var(--c-red);
}
</style>
