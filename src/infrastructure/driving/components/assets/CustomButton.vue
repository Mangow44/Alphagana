<script setup lang="ts">
const props = defineProps<{
  content: string
}>()
</script>

<template>
  <button class="custom-button">
    {{ props.content }}
  </button>
</template>

<style scoped>
.custom-button {
  width: fit-content;
  height: 2.5rem;
  padding: 0.3rem;

  cursor: pointer;

  transition: filter 0.25s ease-in-out;

  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;

  border: solid 2px var(--c-black);
  box-shadow: var(--c-black) 4px 4px;
}

.custom-button:hover {
  filter: brightness(0.7);
}

.custom-button:active {
  transform: translate3d(4px, 4px, 0);
  box-shadow: none;
}
</style>
