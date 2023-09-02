<template>
  <div class="container">
    <div class="image-container">
      <router-link
        :to="{name: 'movie', params: {id: movie.id}}">
        <img :src="movie.poster_path" :alt="movie.title">
      </router-link>
      <RatingFeature class="rating" :rating="movie.vote_average"/>
    </div>
    <h2><router-link :to="{name: 'movie', params: {id: movie.id}}" class="title-link">{{ movie.title }}</router-link></h2>
    <p>{{ dayjs(movie.release_date).format('DD MMMM YYYY') }}</p>
    <MainButton v-if="!isInCart"
      class="button"
      @click="loginStore.isAuthenticated ? shopStore.addToCart(movie) : loginStore.openNotConnectedOverlay()">
      Ajouter au panier
    </MainButton>
    <MainButton v-else class="button" @click="shopStore.removeFromCart(movie)">Retirer du panier</MainButton>
  </div>
</template>

<script setup>
  import MainButton from '@/components/buttons/MainButton.vue';
  import RatingFeature from '@/components/features/RatingFeature.vue';
  import dayjs from 'dayjs' // ES 2015
  import { RouterLink } from 'vue-router';
  import { useShopStore } from '@/stores/shopStore.js';
  const shopStore = useShopStore();
  import { useLoginStore } from '@/stores/loginStore';
  const loginStore = useLoginStore();

  const props = defineProps({
    movie: {
      type: Object,
      required: true
    },
    isInCart: {
      type: Boolean,
      required: true
    }
  });

  // const addToCart = (movie) => {
  //   shopStore.addToCart(movie);
  // };
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    background: $primary_card_background_color;
    height: 500px;
    position: relative;
    border-radius: 10px;

    &:hover {
      scale: 1.01;
    }
  }

  img {
    height: 350px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;

    &:hover {
      cursor: pointer;
    }
  }

  .image-container {
    position: relative;
  }

  .rating {
    position: absolute;
    left: 5px;
    bottom: 10px;
  }

  h2, p {
    font-size: $font_size_normal;
    margin: 7px 0 0 10px;
  }

  h2 {
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }

  .title-link {
    text-decoration: none;
    color: $dark_text_color;
  }

  p {
    opacity: 50%;
    color: $dark_text_color;
  }

  .button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
  }
</style>