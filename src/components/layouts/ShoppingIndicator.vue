<template>
  <button class="shop-btn" type="button">
    <RouterLink :to="{name: 'shop'}"><ShoppingIcon class="shopping-icon"/></RouterLink>
    <div v-if="shopStore.nbMoviesInCart > 0" class="shopping-counter">{{ shopStore.nbMoviesInCart }}</div>
  </button>
</template>

<script setup>
  import ShoppingIcon from '@/components/icons/ShoppingIcon.vue';
  import { RouterLink } from 'vue-router';
  import { useShopStore } from '@/stores/shopStore.js';

  const shopStore = useShopStore();
</script>

<style lang="scss" scoped>
  .shop-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: none;
    position: relative;

    &:hover {
      transform: translate(1px, 1px);
    }
  }

  .shopping-counter {
    background-color: $light_background_color;
    color: $dark_text_color;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-weight: bold;
    position: absolute;
    top: -2px;
    right: -2px;
  }

  .shopping-icon {
    width: 25px;
    height: 25px;
    color: $light_text_color;
  }
</style>
