<template>
  <div class="container">
    <h1>A propos</h1>
    <div class="cards-container">
      <TeamCard class="cards" v-for="(person, index) in team"
        :key="index"
        :picture="person.picture"
        :name="person.name"
        :job="person.job"
        :biography="person.biography">
      </TeamCard>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import TeamCard from '@/components/cards/TeamCard.vue';

  const team = ref([
    {
      picture: "https://i.pravatar.cc/310",
      name: "Babar",
      job: "Roi",
      biography: "Je suis roi depuis peu, et je n'aime pas Rataxès."
    },
    {
      picture: "https://i.pravatar.cc/450",
      name: "Zéphir",
      job: "Saltimbanque",
      biography: "Je suis un singe et j'aime bien la voltige."
    },
    {
      picture: "https://i.pravatar.cc/570",
      name: "Rataxès",
      job: "Méchant",
      biography: "HAHAHAHAHA !!"
    }
  ]);
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
    margin-top: 3rem;
    font-size: $font_size_xl;
    font-weight: 600;
  }

  .cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
  .cards {
    margin: 1rem;
  }
</style>
