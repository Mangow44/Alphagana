<script setup lang="ts">
import { ref, watch } from 'vue'
import { useModeStore } from '@/infrastructure/driving/stores/modeStore'
import GameBlock from '@/infrastructure/driving/components/game/GameBlock.vue'
import GameManager from '@/infrastructure/driving/services/GameManager'
import type Guess from '@/domain/models/Guess'

const gameManager = new GameManager()
const guess = ref<Guess | null>(null)

watch(useModeStore(), async () => {
  await generateNewGuess()
})

await generateNewGuess()

async function generateNewGuess() {
  guess.value = await gameManager.generateGuess()
}
</script>

<template>
  <game-block
    v-if="guess"
    :guess="guess.guess"
    :translation="guess.translation"
    :answer="guess.answer"
    @generate-new-guess="generateNewGuess()"
  />
</template>
