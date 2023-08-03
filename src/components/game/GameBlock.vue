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
      v-model="userGuessValue"
      @keyup.enter="isUserGuessValueValid()"
      class="guess"
      type="text"
      placeholder="..."
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
  flex-shrink: 0;

  width: 20rem;
  height: fit-content;
  margin: auto;
}

.guess-information {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  height: fit-content;
  margin-bottom: 1.5rem;
}

.guess-information h2 {
  width: 95%;
  height: 4rem;

  overflow-y: hidden;
  overflow-x: auto;

  text-align: center;
  white-space: nowrap;

  font-size: 2rem;
  font-weight: bold;
}

.guess-information h3 {
  font-size: 1rem;
  font-style: italic;
}

.guess {
  width: 95%;
  height: 2rem;
  margin: auto;
  padding: 0.5rem;

  font-size: 0.9rem;

  outline: none;
  border: solid 2px var(--c-black);
  box-shadow: var(--c-black) 4px 4px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 4.5rem;

  margin: 2rem 0;
}

.actions .validate,
.actions .next {
  width: 5rem;
}

.actions .validate {
  background-color: var(--c-green);
}

.actions .next {
  background-color: var(--c-gray);
}

.fb-error {
  visibility: hidden;

  min-height: 3rem;
  max-height: 6rem;
  padding: 0 0.3rem;

  overflow: auto;

  text-align: center;
}

.fb-error .answer {
  font-weight: bold;
}

.fb-error.display {
  visibility: visible;

  color: var(--c-red);
}

@media only screen and (min-width: 768px) {
  .game-container {
    width: 25rem;
  }

  .guess-information h2 {
    font-size: 2.3rem;
  }

  .guess {
    height: 2.2rem;

    font-size: 1rem;
  }

  .actions .validate,
  .actions .next {
    width: 6rem;
    height: 2.8rem;
  }
}

@media only screen and (min-width: 1024px) {
  .game-container {
    width: 27rem;
  }

  .guess-information h2 {
    font-size: 2.5rem;
  }

  .guess {
    height: 2.5rem;

    font-size: 1.2rem;
  }

  .actions .validate,
  .actions .next {
    width: 7rem;
    height: 3rem;
  }
}
</style>
