<template>
  <div v-if="cards.length > 0" class="columns is-multiline">
    <CocktailCard
      v-for="card in cards"
      :key="card.name"
      :id="card.id"
      :name="card.name"
      :ingredients="card.ingredients"
      :image="card.image"
    />
  </div>
  <div v-else>
    <h1>Pas de cocktails trouvés pour cette page</h1>
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
  },
};
</script>
