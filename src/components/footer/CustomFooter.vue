<script setup lang="ts"></script>

<template>
  <footer>
    <div class="contacts">
      <p>Thomas Clouet</p>
      <a href="mailto:tclouet@ippon.fr">tclouet@ippon.fr</a>
    </div>

    <p class="copyright">Copyright - 2023 - Tous droits réservés.</p>
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
  gap: 1rem;

  margin-left: 1rem;
  font-size: 0.9rem;
}

.contacts a {
  color: var(--c-white);
}

.copyright {
  margin-left: auto;
  margin-right: 1rem;

  font-size: 0.7rem;
}
</style>
