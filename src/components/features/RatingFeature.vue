<template>
  <span class="rating" :style="defineRatingColor(rating)">{{ Math.round(rating * 10) }}%</span>
</template>

<script setup>
  const props = defineProps({
    rating: {
      type: Number,
      required: false
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
  .rating {
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
</style>
