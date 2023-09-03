<template>
  <div class="view-container">
    <h1 v-if="hasAnAccount">Connexion</h1>
    <h1 v-else>Inscription</h1>

    <div v-if="hasAnAccount" class="login-button">
      <MainButton @click="hasAnAccount = !hasAnAccount">Pas encore inscrit ? Je crée un compte !</MainButton>
    </div>
    <div v-else class="login-button">
      <MainButton @click="hasAnAccount = !hasAnAccount">Déjà inscrit ? Je me connecte</MainButton>
    </div>

    <p class="error-message">{{ errorMessage }}</p>
    
    <div class="form-container">
      <form @submit.prevent="login">

        <label v-if="!hasAnAccount" for="pseudo">Quel sera votre pseudo ?</label>
        <input v-if="!hasAnAccount" type="text" id="pseudo" v-model="user.pseudo" required autocomplete="username"/>

        <label for="email">Entrez votre e-mail :</label>
        <input type="email" id="email" v-model="user.email" required autocomplete="email"/>

        <label for="password">Entrez votre mot de passe :</label>
        <input type="password" id="password" v-model="user.password" required autocomplete="current-password"/>

        <MainButton class="form-button" type="submit">C'est parti !</MainButton>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import MainButton from '@/components/buttons/MainButton.vue';
  import { createNewAccount, signIn } from '@/services/api.js';
  import { useLoginStore } from '@/stores/loginStore.js';
  const loginStore = useLoginStore();
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const hasAnAccount = ref(true);
  const user = ref({ pseudo: '', email: '', password: '' });
  const errorMessage = ref('');

  const login = () => {
    if (!hasAnAccount.value) {
      createNewAccount({ name: user.value.pseudo, email: user.value.email, password: user.value.password })
      .then(response => {
          // console.log(response.user);
          loginStore.authenticateUser(response.user);
          router.push({ name: 'homepage'});
      })
      .catch((error) => {
        errorMessage.value = error.data;
        throw error.data;
      });
    }
    else {
      signIn ({ email: user.value.email, password: user.value.password })
        .then(response => {
          // console.log(response.user);
          loginStore.authenticateUser(response.user);
          router.push({ name: 'films'});
        })
      .catch((error) => {
        errorMessage.value = error.data;
        throw error.data;
      });
    }
  };
</script>

<style lang="scss" scoped>
  .view-container {
    margin-bottom: 2rem;
  }

  h1 {
    text-align: center;
    margin-top: 3rem;
    font-size: $font_size_xl;
    font-weight: 600;
  }

  .login-button {
    text-align: center;
    button {
      font-size: $font_size_small;
    }
  }

.error-message {
  color: red;
  margin-top: 2em;
  font-style: italic;
  text-align: center;
  font-size: $font_size_small;
}
  
  .form-container {
    width: 350px;
    margin: auto;
    margin-top: 2em;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.25em;
  }

  input {
    border: none;
    background: whitesmoke;
    margin-bottom: 1em;
    padding: 0.5em;
    border-radius: 7px;
  }

  .form-button:active {
    transform: translate3d(0, 1px, 0);
  }
</style>