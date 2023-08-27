<template>
  <WatchVideoModal v-show="toggleTrailerModal"
    :movieInfo="movieAndActors"
    :toggleTrailerModal="toggleTrailerModal"
    @trailerModal="closeTrailerModal()"
    class="watch-video-modal"/>
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
          <span @click="toggleTrailerModal = true"><PlayIcon class="play-icon"/> Voir la bande-annonce</span>
        </div>
        <p>{{ movieAndActors.tagline }}</p>
        <h2>Synopsis</h2>
        <p>{{ movieAndActors.overview }}</p>
      </div>
    </div>

    <div class="movie-casting-container">
      <h2>Casting</h2>
      <div class="actors-cards-container">
        <ActorCard
          v-if="movieAndActors.actors"
          :actor="actor"
          class="actor-card"
          v-for="actor in movieAndActors.actors.sort((a, b) => a.order < b.order ? -1 : 1)" :key="actor.id"/>
      </div>
    </div>

    <div class="comments-container">
      <h2>Commentaires ({{ comments.length }})</h2>
      <div class="new-comment-container">
        <label for="comments">Ajouter un commentaire</label>
        <textarea
          name="comments"
          id="comments"
          maxlength="200"
          placeholder="Ajouter un commentaire (max 200 caractères)."
          v-model = "newComment">
        </textarea>
        <MainButton
          class="send-comment-button"
          :class="{'disabled': isCommentEmpty}"
          :disabled="isCommentEmpty"
          @click="sendNewComment()">
          Envoyer
        </MainButton>
      </div>

      <div class="comments-list">
        <div class="comment" v-for="comment in comments.sort((a, b) => b.createdAt < a.createdAt ? -1 : 1)" :key="comment.id">
          <div>
            <img :src="`https://i.pravatar.cc/150?u=${Math.random() * 1000}`" alt="Avatar picture">
            <span>Ecrit par {{ comment.user.name }} le {{ dayjs(comment.createdAt).format('DD MMMM YYYY à HH:mm') }}</span>
          </div>
          <p>{{ comment.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import MainButton from '@/components/buttons/MainButton.vue';
  import PlayIcon from '@/components/icons/PlayIcon.vue';
  import ActorCard from '@/components/cards/ActorCard.vue';
  import RatingFeature from '@/components/features/RatingFeature.vue';
  import WatchVideoModal from '@/components/overlays/WatchVideoModal.vue';
  import { getMovieAndActors, getComments, sendComment } from '@/services/api.js';
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

  // Modal box to show trailer
  const toggleTrailerModal = ref(false);
  const closeTrailerModal = () => toggleTrailerModal.value = false;

  // Comments section
  // 1. Get and display comments
  const comments = ref([]);
  getComments(movieId.value)
    .then(response => comments.value = response)
    .catch(error => console.error(error));

  const newComment = ref('');
  const isCommentEmpty = computed(() => {
    if (newComment.value.trim().length === 0) {
      return true;
    }
  });

  // 2. Send and display a new comment
  const sendNewComment = () => {
    sendComment(movieId.value, { userId: 1, message: newComment.value })
      .then(() => getComments(movieId.value).then(response => comments.value = response))
      .catch(error => console.error(error));

    newComment.value = '';
  };
</script>

<style lang="scss" scoped>
  .container {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: $font_size_large;
    font-weight: 500;
  }

  .movie-description{
    width: 100%;
    min-height: 480px;
    display: flex;
    align-items: center;
    position: relative;

    .backdrop, .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .backdrop {
      object-fit: cover;
      object-position: center;
      z-index: 10;
    }

    .overlay {
      z-index: 20;
      background: rgba(0, 0, 0, 0.6);
    }
  }

  @media (max-width: 770px) {
    .movie-description {
      flex-direction: column;
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
    padding: 2rem 0;

    h2 {
      margin: 1rem 0;
    }
  }

  .trailer-link-container {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    span:last-of-type {
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

  .movie-casting-container {
    margin: 2rem 1rem 0 1rem;
  }

  .actors-cards-container {
    margin: 2rem 1rem 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  @media (max-width: 1280px) {
    .actors-cards-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

@media (max-width: 1030px) {
  .actors-cards-container {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 2rem 0 0 0;
  }
}

@media (max-width: 770px) {
  .actors-cards-container {
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0 0 0;
  }
}

@media (max-width: 400px) {
  .actors-cards-container {
    grid-template-columns: 1fr;
    margin: 2rem 0 0 0;
  }
}

  .comments-container {
    margin: 2rem 1rem 0 1rem;

    h2 {
      margin: 1rem 0;
    }

    .new-comment-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      width: 40%;
      margin: auto;

      label {
        margin-bottom: 0.5rem;
        font-size: $font_size_normal;
        color: rgba($dark_text_color, 0.7);
      }

      textarea {
        min-width: 250px;
        width: 100%;
        min-height: 60px;
        margin-bottom: 0.2rem;
        border: none;
        border-radius: 7px;
        font-size: $font_size_small;
        font-family: 'Nunito', sans-serif;
      }

      .send-comment-button.disabled {
        opacity: 0.5;
        cursor: default;
      }
    }

    @media (max-width: 770px) {
      .new-comment-container {
        width: 100%;
      }
    }

    .comments-list {
      margin-top: 2rem;
      border-radius: 7px;

      .comment {
        padding: 1rem;
        background: $primary_card_background_color;
        border-bottom: 1px solid $light_background_color;

        &:first-of-type {
          border-radius: 7px 7px 0 0;
        }

        &:last-of-type {
          border-bottom: none;
          border-radius: 0 0 7px 7px;
        }

        div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        img {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
        }
      }
    }
  }
</style>
