<template>
  <header class="container">
    <p><span>Vue</span><span>Flix</span></p>
    <div><MenuLayout/></div>
  </header>
</template>

<script setup>
  import MenuLayout from '@/components/layouts/MenuLayout.vue';
</script>

<style lang="scss" scoped>
  .container {
    background: $dark_background_color;
    color: $light_text_color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  span {
    font-size: $font_size_large;
    font-weight: 600;
    
    &:last-of-type {
      color: #ed6e6f;
    }
  }
</style>
