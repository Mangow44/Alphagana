<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer>
    <div class="contacts">
      <p>Thomas Clouet</p>
      <a href="mailto:tclouet@ippon.fr">tclouet@ippon.fr</a>
    </div>

    <div class="app-information">
      <p>1.0.0</p>
      <p class="copyright">
        {{ t('copyright') }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  align-items: center;

  width: 100%;
  height: 3rem;

  color: var(--c-white);
  background-color: var(--c-light-black);
}

.contacts {
  display: flex;
  flex-direction: column;

  margin-right: auto;

  margin-left: 1rem;
  font-size: 0.7rem;
}

.contacts a {
  color: var(--c-white);
}

.app-information {
  display: flex;
  flex-direction: column;

  margin-right: 1rem;

  font-size: 0.6rem;
}
</style>
