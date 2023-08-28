<template>
  <div class="view-container">
    <h1 v-if="hasAnAccount">Connexion</h1>
    <h1 v-else>Inscription</h1>
    <div v-if="hasAnAccount" class="sign-up-message">
      <MainButton @click="hasAnAccount = !hasAnAccount">Pas encore inscrit ? Je crée un compte !</MainButton>
    </div>
    <div v-else class="sign-up-message">
      <MainButton @click="hasAnAccount = !hasAnAccount">Déjà inscrit ? Je me connecte</MainButton>
    </div>
    <div class="form-container">
      <form @submit.prevent="login">
        <!-- <p class="missing-info-message">{{ missingInfoMessage }}</p> -->

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
  import { createNewAccount, signIn } from '@/services/api.js';
  import { useLoginStore } from '@/stores/loginStore.js';
  import { useRouter } from 'vue-router';
  import MainButton from '@/components/buttons/MainButton.vue';

  const hasAnAccount = ref(true);
  const loginStore = useLoginStore();
  const user = ref({ pseudo: '', email: '', password: '' });
  // const router = useRouter();

  const login = () => {
    if (!hasAnAccount.value) {
      console.log(`newUser: ${newUser.value}`);
      createNewAccount({ name: user.value.pseudo, email: user.value.email, password: user.value.password })
      .then(response => console.log(response))
      // .then(response => {
      //   if (response.success === false) {
      //     missingInfoMessage.value = response.message;
      //   } else {
      //     loginStore.authenticateUser(response); // Il faut renvoyer l'id, le pseudo et le mail
      //     router.push({ name: 'homepage'});
      //   }
      // })
      .catch(error => console.error(error));
    }
    // else {
    //   signIn ({ email: user.value.email, password: user.value.password })
    //     .then(response => console.log(response))
    //     .catch(error => console.error(error));
    // }
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

  .sign-up-message {
    text-align: center;
    button {
      font-size: $font_size_small;
    }
  }
  
  .form-container {
    width: 350px;
    margin: auto;
    margin-top: 2em;
  }

  .missing-info-message {
    color: red;
    margin-bottom: 1em;
    font-style: italic;
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