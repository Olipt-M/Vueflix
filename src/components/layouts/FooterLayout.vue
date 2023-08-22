<template>
  <footer>
    <p>Copyright © {{ year }}. Catalogue de <strong>{{ movieCount }}</strong> films.</p>
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear();
  const movieCount = 24686;
</script>

<style lang="scss" scoped>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    
    p {
      font-size: $font_size_small;
    }
  }
</style>
