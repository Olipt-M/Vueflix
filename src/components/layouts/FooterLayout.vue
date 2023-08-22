<template>
  <footer>
    <p>Copyright © {{ year }}. Catalogue de <strong>{{ movies.length }}</strong> films.</p>
  </footer>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  import { getMovie } from '@/services/api.js';

  const year = new Date().getFullYear();
  const movies = ref('');

  onBeforeMount(() => {
    getMovie()
      .then(response => movies.value = response)
      .catch(error => console.error(error));
  });
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    
    p {
      font-size: $font_size_small;
    }
  }
</style>
