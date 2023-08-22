<template>
  <div class="container">
    <div>
      <img :src="picture" :alt="name">
      <p id="name">{{ name }}</p>
    </div>
    <div>
      <p id="job">{{ job }}</p>
      <MainButton v-if="!isOpened" @click="openBiography(name)">Voir biographie</MainButton>
      <p v-else>{{ biography }}</p>
    </div>
  </div>
</template>

<script setup>
  import MainButton from '@/components/buttons/MainButton.vue';

  const emit = defineEmits(['biography']);
  const openBiography = (name) => emit('biography', name);

  const props = defineProps({
    picture: {
      type: String,
      required: true
    },
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    isOpened: {
      type: Boolean,
      required: true
    }
  });
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 0.5rem;
    background: $primary_card_background_color;
    border-radius: 10px;
    gap: 0.5rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    img {
      width: 128px;
      height: 128px;
      border-radius: 50%;
    }

    #name {
      font-size: $font_size_medium;
      font-weight: bold;
    }

    #job {
      font-size: $font_size_medium;
      font-weight: bold;
    }
  }
</style>
