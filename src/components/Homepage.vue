<template>
  <section class="hero is-info is-small">
    <div class="hero-body">
      <p class="title" style="display: inline-block">M.I.A.G.E</p>
      <lord-icon
        src="https://cdn.lordicon.com/slkvcfos.json"
        trigger="loop"
        delay="5000"
        colors="primary:#121331,secondary:#e88c30"
        stroke="62"
        style="width: 60px; height: 60px; display: inline-block"
      >
      </lord-icon>
      <br />

      <p class="subtitle is-italic" style="display: inline-block">
        Tous les meilleurs cocktails de soirées
      </p>
      <lord-icon
        src="https://cdn.lordicon.com/ybgqhhgb.json"
        trigger="loop"
        colors="primary:#121331,secondary:#e88c30"
        style="width: 50px; height: 50px; display: inline-block"
      >
      </lord-icon>
    </div>
  </section>
  <CocktailList :cards="this.cards" />
</template>

<script>
import CocktailList from "./CocktailList.vue";

export default {
  name: "Homepage",
  components: {
    CocktailList,
  },
  beforeMount() {
    // Calling API to retreieve 5 random cocktails
    Array.from({length: 5}, () => this.retrieveSingleCocktail());
  },
  methods: {
    async retrieveSingleCocktail() {
      let response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      if (response.ok) {
        let json = await response.json();
        this.cards.push(this.parseCocktailFromAPI(json.drinks[0]));
      } else {
        alert("HTTP-Error: " + response.status);
      }
    },
    parseCocktailFromAPI(cocktailObject) {
      console.log(cocktailObject);
      let ingredients = [];
      for (let i = 1; i < 10; i++) {
        console.log(cocktailObject["strIngredient" + i])
        if (cocktailObject["strIngredient" + i] != null) {
          ingredients.push({
            name: cocktailObject["strIngredient" + i],
            quantity: cocktailObject["strMeasure" + i],
          });
        } else {
          break;
        }
      }
      console.log(ingredients);
      return { name: cocktailObject.strDrink, ingredients: ingredients };
    },
  },
  data() {
    return {
      cards: [],
    };
  },
};
</script>