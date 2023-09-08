<template>
  <Transition name="modal">
    <div v-if="toggleTrailerModal" class="modal-container" @click.self="closeTrailerModal()">
      <div class="modal">
        <div class="modal-content">
          <iframe
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
  </Transition>
  
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
  $width_iframe: 983px;
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
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 40;
    transition: opacity 0.3s ease;
    box-sizing: border-box;
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
    padding: 2rem 0;
    display: flex;
    flex-direction: column;

    iframe {
      width: $width_iframe;
      height: calc(0.563 * $width_iframe);
    }
    
    .button {
      display: flex;
      justify-content: end;
      width: $width_iframe;

      button {
        font-family: 'Nunito', sans-serif;
        font-size: $font_size_normal;
        color: rgba($dark_text_color, 0.7);
        background: none;
        border: none;
        cursor: pointer;
        margin: 1rem 1rem 0 0;
      }
    }
  }

  @media (max-width: $width_iframe) {
    $width_iframe: 95vw;
    
    .modal-content {
      iframe {
        width: $width_iframe;
        height: calc(0.563 * $width_iframe);
      }
      
      .button {
        width: $width_iframe;

        button {
          font-size: $font_size_normal;
        }
      }
    }
  }
</style>
