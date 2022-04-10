<template>
  <div id="cocktail-list" v-if="cards.length > 0" class="columns is-multiline">
    <CocktailCard
      v-for="card in cards"
      :key="card.id"
      :id="card.id"
      :name="card.name"
      :ingredients="card.ingredients"
      :image="card.image"
    />
  </div>
  <div v-else>
    <h1>Pas de cocktails trouvés pour cette page</h1>
    <button @click="$router.push({ name: 'Home' })" class="button is-dark">
      Retourner à l'accueil
    </button>
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
<style scoped>
#cocktail-list {
  align-items: flex-end;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
}
</style>