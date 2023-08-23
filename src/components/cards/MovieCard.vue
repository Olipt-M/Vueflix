<template>
  <div class="container">
    <div class="image-container">
      <router-link
        :to="{name: 'movie', params: {id: movie.id}}">
        <img :src="movie.poster_path" :alt="movie.title">
      </router-link>
      <RatingFeature class="rating" :rating="movie.vote_average"/>
      <!-- <span class="rating" :style="defineRatingColor(movie.vote_average)">{{ Math.round(movie.vote_average * 10) }}%</span> -->
    </div>
    <h2><router-link :to="{name: 'movie', params: {id: movie.id}}" class="title-link">{{ movie.title }}</router-link></h2>
    <p>{{ dayjs(movie.release_date).format('DD MMMM YYYY') }}</p>
    <MainButton class="button">Ajouter au panier</MainButton>
  </div>
</template>

<script setup>
  import MainButton from '@/components/buttons/MainButton.vue';
  import RatingFeature from '@/components/features/RatingFeature.vue';
  import dayjs from 'dayjs' // ES 2015
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    movie: {
      type: Object,
      required: true
    }
  });

  // const defineRatingColor = (rating) => {
  //   if (rating < 4) {
  //     return {borderColor: 'red'}
  //   } else if (rating >= 4 && rating < 7) {
  //     return {borderColor: 'rgb(218, 222, 3)'}
  //   } else {
  //     return {borderColor: 'rgb(70, 203, 8)'}
  //   }
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
    position: absolute; //garder ici
    left: 5px; //garder ici
    bottom: 10px; //garder ici
    // color: $light_text_color;
    // background-color: black;
    // font-weight: bold;
    // border: 3px solid;
    // border-radius: 50%;
    // font-size: $font_size_normal;
    // width: 3rem;
    // height: 3rem;
    // display: flex;
    // justify-content: center;
    // align-items: center;
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