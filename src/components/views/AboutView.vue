<template>
  <div class="view-container">
    <h1>A propos</h1>
    <div class="team-list">
      <div class="cards-container">
        <TeamCard class="cards" v-for="(person, index) in team"
          :key="index"
          :picture="person.picture"
          :name="person.name"
          :job="person.job"
          :biography="person.biography"
          :isOpened="selectedBiography === person.name"
          @biography="openBiography">
        </TeamCard>
      </div>
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

  .team-list {
    display: grid;
    place-items: center;
  }

  .cards-container {
    margin: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }
  .cards {
    width: 400px;
  }

  @media (max-width: 1250px) {
    .cards-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 850px) {
    .cards-container {
      grid-template-columns: 1fr;
    }
    .cards {
      width: 100%;
    }
  }
</style>
