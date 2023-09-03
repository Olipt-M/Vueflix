<template>
  <nav :class="{ opened: menuStore.isMenuBurgerOpened }">
    <div class="menu-header">
      <h4 v-if="!loginStore.isAuthenticated">Menu</h4>
      <h4 v-else>{{ loginStore.getAuthenticatedUser.name }}</h4>
      <button type="button" class="close-menu" @click="menuStore.closeMenu()"><IconCross class="icons close-icon"/></button>
    </div>
    <ul>
      <li>
        <RouterLink :to="{name: 'films'}" class="li-text" @click="menuStore.closeMenu()">Films</RouterLink>
        <IconChevron class="icons"/>
      </li>
      <li>
        <RouterLink :to="{name: 'about'}" class="li-text" @click="menuStore.closeMenu()">A propos</RouterLink>
        <IconChevron class="icons"/>
      </li>
      <li v-if="!loginStore.isAuthenticated">
        <RouterLink :to="{name: 'login'}" class="li-text" @click="menuStore.closeMenu()">Connexion</RouterLink>
        <IconChevron class="icons"/>
      </li>
      <li v-else>
        <RouterLink :to="{name: 'login'}" class="li-text" @click="disconnect()">Déconnexion</RouterLink>
        <IconChevron class="icons"/>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import IconCross from '@/components/icons/IconCross.vue';
  import IconChevron from '@/components/icons/IconChevron.vue';
  import { RouterLink } from 'vue-router';
  import { useLoginStore } from '@/stores/loginStore.js';
  const loginStore = useLoginStore();
  import { useMenuStore } from '@/stores/menuStore.js';
  const menuStore = useMenuStore();
  import { useShopStore } from '@/stores/shopStore.js';
  const shopStore = useShopStore();

  const disconnect = () => {
    shopStore.emptyCart();
    loginStore.disconnectUser();
    menuStore.closeMenu();
  };
</script>

<style lang="scss" scoped>
  nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background-color: #242b35;
    transform: translate(100%, 0);
    transition: transform 0.3s ease-in-out;
    z-index: 200;
  }

  nav.opened {
    transform: translate(0, 0);
    transition: transform 0.3s ease-in-out;
  }

  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25em;
    margin: 2em 1em;
  }

  h4 {
    color: $secondary_text_color;
    text-transform: uppercase;
  }

  .menu-header button {
    cursor: pointer;
    background: none;
    border: none;
    color: $light_text_color;
  }
  
  li {
    list-style-type: none;
    padding: 0.25em;
    margin: 0 1em;
    color: $light_text_color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  li:hover {
    background-color: $secondary_text_color;
  }

  .li-text {
    width: 100%;
    text-decoration: none;
    color: $light_text_color;
    transform: translate(0, 0);
    transition: transform 0.4s ease-in-out;
  }

  .li-text:hover {
    transform: translate(1em, 0);
    transition: transform 0.4s ease-in-out;
  }

  .icons {
    opacity: 0.75;
  }

  .close-icon:hover {
    transform: rotate(-180deg);
    transition: transform 0.3s ease-in-out;
  }
  
</style>
