<template>
  <button type="button"><slot/></button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  button {
    cursor: pointer;
    padding: 0.5rem;
    background: $primary_button_background_color;
    color: $light_text_color;
    border: none;
    border-radius: 7px;
    font-family: 'Nunito', sans-serif;
    font-size: $font_size_normal;

    &:not(.disabled):hover {
      background: $primary_button_hover_background_color;
    }
  }
</style>
