<template>
  <header class="container">
    <p><span>Vue</span><span>Flix</span></p>
    <!-- <div><MenuLayout/></div> -->
    
    <div v-if="windowSize.width > 654"><MenuLayout/></div>
    <div v-else class="menu-container">
      <div><ShoppingIndicator/></div>
      <div><ButtonBurger/></div>
    </div>
    <MenuInBurgerLayout/>
  </header>
</template>

<script setup>
  import MenuLayout from '@/components/layouts/MenuLayout.vue';
  import ButtonBurger from '@/components/buttons/ButtonBurger.vue';
  import ShoppingIndicator from '@/components/layouts/ShoppingIndicator.vue';
  import MenuInBurgerLayout from '@/components/layouts/MenuInBurgerLayout.vue';
  import { useWindowSize } from '@/services/composables.js';
  const windowSize = useWindowSize();
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
      color: $secondary_text_color;
    }
  }

  .menu-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
