<template>
  <nav>
    <ul>
      <li><RouterLink :to="{name: 'homepage'}" class="nav-link">Accueil</RouterLink></li>
      <li><RouterLink :to="{name: 'films'}" class="nav-link">Films</RouterLink></li>
      <li><RouterLink :to="{name: 'about'}" class="nav-link">A propos</RouterLink></li>
    </ul>
    <div class="connection-container">
      <MainButton v-if="!loginStore.isConnected" @click="loginStore.switchConnectedStatus()">Connexion</MainButton>
      <div v-else class="if-connected-container">
        <span>{{ userAvatar }}</span>
        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Avatar" class="avatar-image">
        <MainButton @click="loginStore.switchConnectedStatus()">
          <RouterLink :to="{name: 'login'}" class="nav-link">Déconnexion</RouterLink>
        </MainButton>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import MainButton from '@/components/buttons/MainButton.vue';
  import { useLoginStore } from '@/stores/loginStore.js';

  const loginStore = useLoginStore();
  const userAvatar = "Céleste";
</script>

<style lang="scss" scoped>
  nav, ul, .if-connected-container {
    display: flex;
    align-items: center;
  }

  nav {
    font-size: $font_size_normal;
  }

li {
  list-style-type: none;
  margin-right: 1rem;
}

.nav-link {
  color: $light_text_color;
  text-decoration: none;
}

  .connection-container {
    margin-left: 1rem;
  }

  .if-connected-container {
    span {
      font-weight: bold;
    }

    img, button {
      margin-left: 1rem;
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
  }
</style>
