<template>
  <div class="modal-container" @click="closeTrailerModal()">
    <div class="modal">
      <div class="modal-content">
        <iframe width="983" height="553" :src="`https://www.youtube.com/embed/${movieInfo.youtube}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="button">
          <button @click="closeTrailerModal()">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(['trailerModal'])
  const closeTrailerModal = () => emit('trailerModal');
  
  const props = defineProps({
    movieInfo : {
      type: Object,
      required: false
    }
  })
</script>

<style lang="scss" scoped>
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
  }

  .modal {
    display: grid;
    place-items: center;
    background: $primary_card_background_color;
    z-index: 50;
    width: 100%;
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
