<template>
  <h1>Films</h1>
  <TailSpin v-show="!isViewCreated" class="loader"/>
  <div class="movies-container">
    <MovieCard v-for="movie in movies" :key="movie.id"
      :movie="movie"
      :isInCart="shopStore.isInCart(movie.id)"
      class="cards"/>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  import MovieCard from '@/components/cards/MovieCard.vue';
  import TailSpin from '@/components/icons/TailSpin.vue';
  import { getMovies } from '@/services/api.js';
  import { useShopStore } from '@/stores/shopStore.js';
  const shopStore = useShopStore();

  const movies = ref(undefined);
  const isViewCreated = ref(false);

  onBeforeMount(() => {
    setTimeout(() => {
      getMovies()
      .then(response => movies.value = response)
      .catch(error => console.error(error));
      isViewCreated.value = true;
    }, "1500");
  });

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
</style>
