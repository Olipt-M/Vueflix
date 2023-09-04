<template>
  <header class="container">
    <p><span>Vue</span><span>Flix</span></p>
    
    <div class="extended-menu"><MenuLayout/></div>
    <div class="burger-menu">
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

  .burger-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 654px) {
    .extended-menu {
      display: none;
    }
  }

  @media (min-width: 655px) {
    .burger-menu {
      display: none;
    }
  }
</style>
