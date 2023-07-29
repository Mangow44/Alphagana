<script setup lang="ts">
import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import CustomButton from '@/components/assets/CustomButton.vue'

const props = defineProps<{
  guess: string
  translation: string
  answer: string
}>()

const emit = defineEmits<{
  (e: 'generateNewGuess'): void
}>()

const { t } = useI18n()
const userGuessValue = ref<string | null>(null)
const feedbackError = ref<string | null>(null)

watch(props, () => {
  resetFeedbackError()
  resetUserInput()
})

function isUserGuessValueValid(): void {
  if (props.answer.toLowerCase() === userGuessValue.value?.toLowerCase()) {
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
      placeholder="..."
      v-model="userGuessValue"
      @keyup.enter="isUserGuessValueValid()"
      data-testid="guess-input"
    />

    <div class="actions">
      <custom-button
        :content="t('actions.validate')"
        @click="isUserGuessValueValid()"
        class="validate"
        data-testid="validate-btn"
      />
      <custom-button
        :content="t('actions.next')"
        @click="emit('generateNewGuess')"
        class="next"
        data-testid="next-btn"
      />
    </div>

    <p class="fb-error" :class="{ display: feedbackError }" data-testid="fb-error">
      {{ t('game.error') }}
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

  width: 100%;
  height: 7rem;
  margin-bottom: 1rem;

  overflow: auto;
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
  padding: 0.5rem;
  margin: auto;

  font-size: 0.9rem;

  outline: none;
  border: solid 2px var(--c-black);
  box-shadow: var(--c-black) 4px 4px;
}

.game-container .actions {
  display: flex;
  justify-content: space-around;

  margin: 2rem 0;
}

.game-container .actions .validate {
  background-color: var(--c-green);
}

.game-container .actions .next {
  background-color: var(--c-gray);
}

.game-container .fb-error {
  visibility: hidden;

  min-height: 2rem;
}

.game-container .fb-error .answer {
  font-weight: bold;
}

.game-container .fb-error.display {
  visibility: visible;

  padding: 0 0.3rem;
  text-align: center;
  color: var(--c-red);
}
</style>
