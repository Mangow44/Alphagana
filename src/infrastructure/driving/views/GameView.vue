<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { availableTraductions } from '@/domain/models/Mode'
import ModeManager from '@/infrastructure/driving/services/ModeManager'
import GuessManager from '@/infrastructure/driving/services/GuessManager'
import GameBlock from '@/infrastructure/driving/components/game/GameBlock.vue'
import type Mode from '@/domain/models/Mode'
import type Katakana from '@/domain/models/Katakana'
import type Hiragana from '@/domain/models/Hiragana'

const modeManager = new ModeManager()
const guessManager = new GuessManager()
const guess = ref<Hiragana | Katakana | null>(null)
const mode = ref<Mode | null>(null)
const userLanguage = computed<string>(() => navigator.language.split('-')[0])

watch(modeManager.modeStore.modes, () => {
  generateNewCurrentGuess()
})

async function generateNewCurrentGuess(): Promise<void> {
  const activeModes: Mode[] = (await modeManager.getModes()).filter((mode) => mode.isActive)
  mode.value = generateRandomEntityFrom(activeModes)

  if (modeContainsTraduction('hiragana')) {
    guess.value = generateRandomEntityFrom(await guessManager.getHiraganas())
  }
  if (modeContainsTraduction('katakana')) {
    guess.value = generateRandomEntityFrom(await guessManager.getKatakanas())
  }
}

function modeContainsTraduction(traduction: availableTraductions): boolean {
  return mode.value?.traduction.from === traduction || mode.value?.traduction.to === traduction
}

function generateRandomEntityFrom(array: any[]): any {
  const randomIndex: number = Math.floor(Math.random() * array.length)

  return array[randomIndex]
}

await generateNewCurrentGuess()
</script>

<template>
  <main>
    <game-block
      v-if="guess && mode"
      :guess="guess[mode.traduction.from]"
      :translation="userLanguage === 'fr' ? guess.fr : guess.en"
      :answer="guess[mode.traduction.to]"
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
