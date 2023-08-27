<template>
  <div class="container">
    <img :src="actor.profile_path" :alt="actor.name">
    <h3>{{ actor.name }} ({{ calculateAge(actor.birthday) }} ans)</h3>
    <p>{{ actor.character }}</p>
  </div>
</template>

<script setup>
  import dayjs from 'dayjs' // ES 2015
  const props = defineProps({
    actor: {
      type: Object,
      required: true
    }
  });

  const calculateAge = (birthday) => {
    return dayjs().diff(dayjs(birthday), 'year');
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    background: $primary_card_background_color;
    height: 300px;
    border-radius: 10px;
  }

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  h3, p {
    font-size: $font_size_normal;
    margin: 7px 0 0 10px;
    color: $dark_text_color;
  }

  h3 {
    font-weight: bold;
  }

  p {
    opacity: 50%;
  }
</style>