<template>
  <div class="container">
    <div class="image-container">
      <img :src="movie.poster_path" :alt="movie.title">
      <span class="rating" :style="defineRatingColor(movie.vote_average)">{{ Math.round(movie.vote_average * 10) }}%</span>
    </div>
    <h2>{{ movie.title }}</h2>
    <p>{{ dayjs(movie.release_date).format('DD MMMM YYYY') }}</p>
    <MainButton class="button">Ajouter au panier</MainButton>
  </div>
</template>

<script setup>
  import MainButton from '@/components/buttons/MainButton.vue';
  import dayjs from 'dayjs' // ES 2015

  const props = defineProps({
    movie: {
      type: Object,
      required: true
    }
  });

  const defineRatingColor = (rating) => {
    if (rating < 4) {
      return {borderColor: 'red'}
    } else if (rating >= 4 && rating < 7) {
      return {borderColor: 'rgb(218, 222, 3)'}
    } else {
      return {borderColor: 'rgb(70, 203, 8)'}
    }
  };
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    background: $primary_card_background_color;
    height: 475px;
    position: relative;
  }

  img {
    height: 350px;
    width: 100%;
    object-fit: cover;
  }

  .image-container {
    position: relative;
  }

  .rating {
    position: absolute;
    left: 5px;
    bottom: 10px;
    color: $light_text_color;
    background-color: black;
    font-weight: bold;
    border: 3px solid;
    border-radius: 50%;
    font-size: $font_size_normal;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2, p {
    font-size: $font_size_normal;
    color: $dark_text_color;
    margin: 7px 0 0 10px;
  }

  h2 {
    font-weight: bold;
  }

  p {
    opacity: 50%;
  }

  .button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
  }
</style>