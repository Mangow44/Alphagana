<script setup lang="ts">
import { ref, watch } from 'vue'
import GameBlock from '@/infrastructure/driving/components/game/GameBlock.vue'
import GameManager from '@/infrastructure/driving/services/GameManager'
import type Guess from '@/domain/models/Guess'
import { useModeStore } from '@/infrastructure/driving/stores/modeStore'

const gameManager = new GameManager()
const guess = ref<Guess | null>(null)

await generateNewGuess()

watch(useModeStore(), async () => {
  await generateNewGuess()
})

async function generateNewGuess() {
  guess.value = await gameManager.generateGuess()
}
</script>

<template>
  <main>
    <game-block
      v-if="guess"
      :guess="guess.guess"
      :translation="guess.translation"
      :answer="guess.answer"
      @generate-new-guess="generateNewGuess()"
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
@/infrastructure/driving/services/JapaneseWordManager
