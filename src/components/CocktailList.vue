<template>
  <div class="columns is-multiline">
    <CocktailCard
      v-for="card in cards"
      :key="card.name"
      :name="card.name"
      :ingredients="card.ingredients"
      :image="card.image"
    />
  </div>
</template>

<script>
import CocktailCard from "./CocktailCard.vue";

export default {
  name: "CocktailList",
  components: {
    CocktailCard,
  },
  props: {
    cards: Array,
  }
};
</script>

<style>
</style>
