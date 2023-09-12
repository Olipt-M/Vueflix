<template>
  <h1>Films</h1>
  <div class="movies-list">
    <div class="movies-container">
      <MovieCard v-for="movie in movies" :key="movie.id"
        :movie="movie"
        :isInCart="shopStore.isInCart(movie.id)"
        class="cards"/>
    </div>
  </div>
  <TailSpin v-show="!isViewLoaded" class="loader"/>
  <MainButton v-show="isViewLoaded && page < nbOfMovies / maxMoviesAtOnce" class="display-button" @click="displayMore()">Afficher plus</MainButton>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  import MovieCard from '@/components/cards/MovieCard.vue';
  import TailSpin from '@/components/icons/TailSpin.vue';
  import MainButton from '@/components/buttons/MainButton.vue';
  import { getMovies, getNbOfMovies } from '@/services/api.js';
  import { useShopStore } from '@/stores/shopStore.js';
  const shopStore = useShopStore();

  // Get movies from API
  const movies = ref(undefined);
  const isViewLoaded = ref(false);
  const page = ref(1);
  const maxMoviesAtOnce = ref(10);
  const nbOfMovies = ref('');
  
  onBeforeMount(() => {
    getNbOfMovies().then(response => nbOfMovies.value = response);
  });

  onBeforeMount(() => {
    setTimeout(() => {
      getMovies(page.value, maxMoviesAtOnce.value)
      .then(response => movies.value = response)
      .catch(error => console.error(error));
      isViewLoaded.value = true;
    }, "1500");
  });

  const displayMore = () => {
    isViewLoaded.value = false;

    setTimeout(() => {
      getMovies(++page.value, maxMoviesAtOnce.value)
      .then(response => movies.value = movies.value.concat(response))
      .catch(error => console.error(error));
      isViewLoaded.value = true;
    }, "1500");
  }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-top: 3rem;
    font-size: $font_size_xl;
    font-weight: 600;
  }

  .loader {
    display: block;
    margin: 5rem auto;
  }

  .movies-list {
    display: grid;
    place-items: center;
    max-width: 90%;
    margin: auto;
  }

  .movies-container {
    margin: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  @media (max-width: 1286px) {
    .movies-list {
      max-width: 95%;
    }
    .movies-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  }

  @media (max-width: 1030px) {
    .movies-list {
      max-width: 100%;
    }
    .movies-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 654px) {
    .movies-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 356px) {
    .movies-container {
      grid-template-columns: 1fr;
    }
  }

  .display-button {
    display: block;
    margin: 0 auto 2rem auto;
  }
</style>
