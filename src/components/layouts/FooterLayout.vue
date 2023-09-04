<template>
  <footer>
    <hr>
    <p>Copyright © {{ year }}. Catalogue de <strong>{{ nbOfMovies }}</strong> films.</p>
  </footer>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  import { getNbOfMovies } from '@/services/api.js';

  const year = new Date().getFullYear();
  const nbOfMovies = ref('');
  
  onBeforeMount(() => {
    getNbOfMovies().then(response => nbOfMovies.value = response);
  });
</script>

<style lang="scss" scoped>
  footer {
    hr {
      color: rgb(183, 182, 182);
      margin: 0 2rem;
    }
    
    p {
      text-align: center;
      font-size: $font_size_small;
      padding: 2rem;
    }
  }
</style>
