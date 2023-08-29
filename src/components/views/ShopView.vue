<template>
  <div class="view-container">
    <h1>Mon panier</h1>
    <div class="cards-container">
      
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import TeamCard from '@/components/cards/TeamCard.vue';

  const selectedBiography = ref(undefined);
  const openBiography = (name) => selectedBiography.value = name;

  const team = ref([
    {
      picture: "https://i.pravatar.cc/310",
      name: "Babar",
      job: "Roi",
      biography: "Je suis roi depuis peu, et je n'aime pas Rataxès.",
      isOpened: false
    },
    {
      picture: "https://i.pravatar.cc/450",
      name: "Zéphir",
      job: "Saltimbanque",
      biography: "Je suis un singe et j'aime bien la voltige.",
      isOpened: false
    },
    {
      picture: "https://i.pravatar.cc/570",
      name: "Rataxès",
      job: "Méchant",
      biography: "HAHAHAHAHA !!... Hein ?",
      isOpened: false
    }
  ]);
</script>

<style lang="scss" scoped>
  $desktopNumber: 3;
  $tabletNumber: 2;
  $gapCards: 1rem;

  h1 {
    text-align: center;
    margin-top: 3rem;
    font-size: $font_size_xl;
    font-weight: 600;
  }

  .cards-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 1rem;
    gap: $gapCards;
  }
  .cards {
    // margin: $marginCards;
    width: calc(100% / $desktopNumber - ($gapCards * ($desktopNumber - 1) / $desktopNumber));
  }

  @media (max-width: 920px) {
    .cards {
      width: calc(100% / $tabletNumber - ($gapCards * ($tabletNumber - 1) / $tabletNumber));
    }
  }

  @media (max-width: 600px) {
    .cards {
      width: 100%;
    }
  }
</style>
