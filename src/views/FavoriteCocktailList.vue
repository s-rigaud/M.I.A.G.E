<template>
  <CocktailList :cards="this.cards" />
</template>

<script>
import CocktailList from "@/components/CocktailList.vue";
import CocktailRequestMixin from "@/mixins/CocktailRequestMixin.js";

export default {
  name: "Homepage",
  components: {
    CocktailList,
  },
  mixins: [CocktailRequestMixin],
  created() {
    this.loadFavoriteFromLS();
  },
  methods: {
    async loadFavoriteFromLS() {
      let favoriteCocktails = localStorage.getItem("FavoriteCocktails");
      favoriteCocktails = favoriteCocktails
        ? JSON.parse(favoriteCocktails).cocktails
        : [];
      console.log(favoriteCocktails);
      let cocktails = [];
      for (let cocktailId of favoriteCocktails) {
        console.log(cocktailId);
        const apiCocktails = await this.retrieveSingleCocktail(cocktailId);
        cocktails.push(this.parseCocktailFromAPI(apiCocktails));
      }
      this.cards = cocktails;
    },
  },
  data() {
    return {
      cards: [],
    };
  },
};
</script>