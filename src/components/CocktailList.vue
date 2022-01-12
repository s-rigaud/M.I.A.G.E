<template>
  <div class="columns is-multiline">
    <CocktailCard
      v-for="card in cards"
      :key="card.name"
      :name="card.name"
      :ingredients="card.ingredients"
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
  data() {
    return {
      cards: [
        {
          name: "Madeleine",
          ingredients: [
            { name: "Gin", quantity: "5cL" },
            { name: "Amaretto", quantity: "4cL" },
            { name: "Jus d'ananas", quantity: "10cL" },
          ],
        },
        {
          name: "Blue lagoon",
          ingredients: [
            { name: "Curaçao", quantity: "3cL" },
            { name: "Vodka", quantity: "4cL" },
            { name: "Citron", quantity: "2cL" },
            { name: "Galçons", quantity: "" },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>
