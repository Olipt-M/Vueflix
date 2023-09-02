<template>
  <Transition name="modal">
    <div v-if="opened" class="modal-container" @click.self="loginStore.closeNotConnectedOverlay()">
      <div class="modal">
        <div class="modal-content">
          <p>Vous devez être connecté !</p>
          <div class="button">
            <button @click="loginStore.closeNotConnectedOverlay()">OK</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
  
</template>

<script setup>
  import { useLoginStore } from '@/stores/loginStore';
  const loginStore = useLoginStore();
  
  const props = defineProps({
    opened : {
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
    transition: all 0.3s ease;
    border-radius: 7px;
  }

  .modal-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;

    p {
      font-size: $font_size_normal;
      color: rgba($dark_text_color, 1);
    }
    
    .button {
      display: flex;
      justify-content: flex-start;

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
