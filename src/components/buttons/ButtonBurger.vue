<template>
  <div class="container">
    <button type="button" class="menu-burger" @click="menuStore.openMenu()">
      <span></span>
    </button>
  </div>
</template>

<script setup>
  import { useMenuStore } from '@/stores/menuStore.js';
  const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>
  .container {
    display: grid;
    place-items: center;
  }
  .menu-burger {
    cursor: pointer;
    background: none;
    border: none;
    padding: 1em;
  }

  .menu-burger span {
    display: block;
    background: $light_text_color;
    width: 30px;
    height: 3px;
    border-radius: 10px;

    &::before, &::after {
      content: '';
      position: relative;
      display: block;
      width: 30px;
      height: 3px;
      background: $light_text_color;
      border-radius: 10px;
    }

    &::before {
      transform: translate(0, -8px);
    }

    &::after {
      transform: translate(0, 5px);
    }
  }
</style>
