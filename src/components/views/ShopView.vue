<template>
  <div class="view-container">
    <h1>Mon panier</h1>
    <div class="movie-list">
      <div class="cards-container">
        <MovieCard v-for="movie in shopStore.getMoviesInCart" :key="movie.id"
          :movie="movie"
          :isInCart="shopStore.isInCart(movie.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import MovieCard from '@/components/cards/MovieCard.vue';
  import { useShopStore } from '@/stores/shopStore.js';
  const shopStore = useShopStore();
  
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-top: 3rem;
    font-size: $font_size_xl;
    font-weight: 600;
  }

  .movie-list {
    display: grid;
    place-items: center;
    max-width: 90%;
    margin: auto;
  }

  .cards-container {
    margin: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  @media (max-width: 1280px) {
    .movies-list {
      max-width: 95%;
    }
    .cards-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (max-width: 1030px) {
    .movies-list {
      max-width: 100%;
    }
    .cards-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 770px) {
    .cards-container {
      grid-template-columns: 1fr 1fr;
      margin: 2rem 0;
    }
  }

  @media (max-width: 400px) {
    .cards-container {
      grid-template-columns: 1fr;
      margin: 2rem 0;
    }
  }
</style>
