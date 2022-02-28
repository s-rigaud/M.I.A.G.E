<template>
  <div class="card">
    <div class="card-content">
      <div class="card-image">
        <figure class="image">
          <img
            :src="cocktail.image"
            alt="Placeholder image"
            id="cocktail-image"
            class="modal-button"
            data-target="modal-image2"
          />
        </figure>
      </div>
      <div class="content">
        <h2>{{ cocktail.name }}</h2>
        <ul>
          <li v-for="ingredient in cocktail.ingredients" :key="ingredient.name">
            <p v-if="ingredient.quantity">
              {{ ingredient.quantity }} de {{ ingredient.name }}
            </p>
            <p v-else>{{ ingredient.name }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Tried all Vue hooks but none of them seems to save cocktail list when router go back-->
  <button @click="$router.go(-1)">Back to list</button>
</template>

<script>
import CocktailRequestMixin from "../mixins/CocktailRequestMixin.js";

export default {
  name: "CocktailFilter",
  props: {
    cocktailId: String,
  },
  components: {},
  mixins: [CocktailRequestMixin],
  mounted() {
    this.retrieveCocktailDetail();
  },
  data() {
    return {
      cocktail: { id: this.cocktailId },
    };
  },
  methods: {
    async retrieveCocktailDetail() {
      const apiCocktails = await this.retrieveSingleCocktail(this.cocktailId);
      this.cocktail = this.parseCocktailFromAPI(apiCocktails);
    },
  },
};
</script>

<style scoped>
#cocktail-image {
  width: 400px;
}
</style>
