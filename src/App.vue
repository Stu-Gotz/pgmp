<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Navigation />
  <RouterView />
</template>

<style lang="scss">
:root {
  --small-bp: 1400px;
  --xs-bp: 1100px;
  --mobile-bp: 500px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
