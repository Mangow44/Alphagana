<script setup lang="ts">
const props = defineProps<{
  content: string
}>()
</script>

<template>
  <button>
    {{ props.content }}
  </button>
</template>

<style scoped>
button {
  width: fit-content;
  height: 2.5rem;
  padding: 0.3rem;

  cursor: pointer;

  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;

  border: solid 2px var(--c-black);
  box-shadow: var(--c-black) 4px 4px;
}
</style>
