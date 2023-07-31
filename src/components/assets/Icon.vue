<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <button class="icon-btn">
    <img :src="src" :alt="alt" class="icon-img" />
  </button>
</template>

<style scoped>
.icon-btn {
  width: 2.5rem;
  height: 2.5rem;
  margin: auto;
  padding: 0.05rem;

  cursor: pointer;

  transition: 0.25s ease-in-out;

  background-color: var(--c-white);
  border: solid 2px var(--c-black);
  box-shadow: var(--c-black) 4px 4px;
}

.icon-btn:hover {
  transform: translate3d(4px, 4px, 0);
  box-shadow: none;
}

.icon-img {
  width: 100%;
  height: 100%;
}
</style>
