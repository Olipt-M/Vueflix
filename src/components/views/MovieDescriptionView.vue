<template>
  <div class="container">
    <div class="movie-description">
      <img :src="movieAndActors.backdrop_path" :alt="`Backdrop of ${movieAndActors.title}`" class="backdrop">
      <div class="overlay"></div>
      <div class="image-container">
        <img :src="movieAndActors.poster_path" :alt="`Poster of ${movieAndActors.title}`" class="poster">
      </div>
      <div class="description-container">
        <h1>{{ movieAndActors.title }} ({{ dayjs(movieAndActors.release_date).format('YYYY') }})</h1>
        <p>{{ dayjs(movieAndActors.release_date).format('DD/MM/YYYY') }} - {{ movieGenre.name }} - {{ calculateMovieDuration(movieAndActors.runtime) }}</p>
        <div class="trailer-link-container">
          <RatingFeature class="rating" :rating="movieAndActors.vote_average"/>
          <span><PlayIcon class="play-icon"/> Voir la bande-annonce</span>
        </div>
        <p>{{ movieAndActors.tagline }}</p>
        <h2>Synopsis</h2>
        <p>{{ movieAndActors.overview }}</p>
      </div>
    </div>

    <div class="movie-casting">
      <h2>Casting (trier par actor.order et remplacer date de naissance)</h2>
      <div class="actors-cards" v-for="actor in movieAndActors.actors" :key="actor.id">
        <ActorCard :actor="actor"/>
      </div>
    </div>

    <div class="comments-container">
      <h2>Commentaires (0)  </h2>
      <div class="comments-section">
        <label for="comments">Ajouter un commentaire</label>
        <textarea name="comments" id="comments"></textarea>
        <MainButton>Envoyer</MainButton>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import MainButton from '@/components/buttons/MainButton.vue';
  import PlayIcon from '@/components/icons/playIcon.vue';
  import ActorCard from '@/components/cards/ActorCard.vue';
  import RatingFeature from '@/components/features/RatingFeature.vue';
  import { getMovieAndActors } from '@/services/api.js';
  import dayjs from 'dayjs' // ES 2015

  const movieAndActors = ref({});
  const movieGenre = ref({});
  const movieId = computed(() => {
    return useRoute().params.id;
  });
  
  getMovieAndActors(movieId.value)
      .then(response => movieAndActors.value = response)
      .then(response => movieGenre.value = response.genre)
      .catch(error => console.error(error));
  
  const calculateMovieDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}h${minutes}`;
  }
</script>

<style lang="scss" scoped>
  .container {
    margin-bottom: 2rem;
  }

  .movie-description{
    width: 100%;
    height: 480px;
    display: flex;
    align-items: center;
    position: relative;

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
      object-fit: cover;
      object-position: center;
      z-index: 10;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      background: rgba(0, 0, 0, 0.6);
    }
  }

  .image-container {
    z-index: 30;
    height: 400px;
    margin: 0 2rem 0 1.5rem;

    .poster {
      height: 100%;
      border-radius: 10px;
    }
  }

  .description-container {
    z-index: 30;
    margin-right: 1.5rem;
    color: $light_text_color;

    h2 {
      margin: 1rem 0;
    }
  }

  .trailer-link-container {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    span {
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
        transform: translate3d(1px, 1px, 0);
      }
    }

    .play-icon {
      width: 3rem;
      height: 3rem;
      margin: 0 1rem;
    }
  }

  .movie-casting {
    margin: 2rem 1rem 0 1rem;
  }

  .comments-container {
    margin: 2rem 1rem 0 1rem;
  }

  .comments-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
