<template>
  <h1>Films</h1>
  <div class="movies-container">
    <MovieCard v-for="movie in movies" :key="movie.id"
      :movie="movie"
      :isInCart="shopStore.isInCart(movie.id)"
      class="cards"/>
  </div>
  <TailSpin v-show="!isViewLoaded" class="loader"/>
  <MainButton v-show="isViewLoaded && page <= nbOfMovies / maxMoviesAtOnce" class="display-button" @click="displayMore()">Afficher plus</MainButton>
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
  $tabletNumberSmall: 2;
  $tabletNumberBig: 3;
  $desktopNumberSmall: 4;
  $desktopNumberBig: 5;
  $gapCards: 1rem;

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

  .movies-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 1rem;
    gap: $gapCards;
  }
  
  .cards {
    width: calc(100% / $desktopNumberBig - ($gapCards * ($desktopNumberBig - 1) / $desktopNumberBig));
  }
// 356px 654px 1030px 1286px
  @media (max-width: 1286px) {
    .cards {
      width: calc(100% / $desktopNumberSmall - ($gapCards * ($desktopNumberSmall - 1) / $desktopNumberSmall));
    }
  }

  @media (max-width: 1030px) {
    .cards {
      width: calc(100% / $tabletNumberBig - ($gapCards * ($tabletNumberBig - 1) / $tabletNumberBig));
    }
  }

  @media (max-width: 654px) {
    .cards {
      width: calc(100% / $tabletNumberSmall - ($gapCards * ($tabletNumberSmall - 1) / $tabletNumberSmall));
    }
  }

  @media (max-width: 356px) {
    .cards {
      width: 100%;
    }
  }

  .display-button {
    display: block;
    margin: 0 auto 2rem auto;
  }
</style>
