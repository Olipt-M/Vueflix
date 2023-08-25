<template>
  <transition name="modal">
    <div v-if="toggleTrailerModal" class="modal-container" @click.self="closeTrailerModal()">
      <div class="modal">
        <div class="modal-content">
          <iframe
            width="983"
            height="553"
            :src="`https://www.youtube.com/embed/${movieInfo.youtube}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
          <div class="button">
            <button @click="closeTrailerModal()">OK</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
  
</template>

<script setup>
  const emit = defineEmits(['trailerModal'])
  const closeTrailerModal = () => emit('trailerModal');
  
  const props = defineProps({
    movieInfo : {
      type: Object,
      required: false
    },

    toggleTrailerModal : {
      type: Boolean,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .modal-enter-from, .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal, .modal-leave-to .modal {
    transform: scale(1.1);
  }

  .modal-container {
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 40;
    transition: opacity 0.3s ease;
  }

  .modal {
    display: grid;
    place-items: center;
    background: $primary_card_background_color;
    z-index: 50;
    width: 100%;
    transition: all 0.3s ease;
  }

  .modal-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    
    .button {
      display: flex;
      justify-content: end;

      button {
        font-family: 'Nunito', sans-serif;
        font-size: $font_size_normal;
        color: rgba($dark_text_color, 0.7);
        background: none;
        border: none;
        cursor: pointer;
        margin-top: 1rem;
      }
    }
  }
</style>
