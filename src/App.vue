<template>
  <HeaderLayout/>
  <RouterView />
  <FooterLayout class="footer"/>
  <NotConnectedOverlay :opened="loginStore.isRequiredNotConnectedModal"/>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import HeaderLayout from '@/components/layouts/HeaderLayout.vue';
  import FooterLayout from '@/components/layouts/FooterLayout.vue';
  import NotConnectedOverlay from '@/components/overlays/NotConnectedOverlay.vue';
  import { useLoginStore } from '@/stores/loginStore';
  const loginStore = useLoginStore();
</script>

<style lang="scss">
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
  background: $light_background_color;
  color: $dark_text_color;
  min-height: 100vh;
  font-family: 'Nunito', sans-serif;
  }
</style>
