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

  <p class="subtitle is-3">Meilleurs cocktails du jour</p>
  <CocktailList :cards="this.cards" />
</template>

<script>
import CocktailList from "./CocktailList.vue";
import CocktailRequestMixin from "../mixins/CocktailRequestMixin.js";

export default {
  name: "Homepage",
  components: {
    CocktailList,
  },
  mixins: [CocktailRequestMixin],
  mounted() {
    this.addRandomCocktailCards();
  },
  methods: {
    /* Calling API to get the 10 random cocktails of today
       or retrieve them from local storage if they have been already
       saved today
    */
    async addRandomCocktailCards() {
      const existingData = localStorage.getItem("HomepageCocktails");
      if (
        existingData &&
        JSON.parse(existingData)["expire"] > new Date().getTime()
      ) {
        for (let cocktail of JSON.parse(existingData)["cocktails"]) {
          this.cards.push(cocktail);
        }
        console.log("Cocktails have been restored from local storage");
      } else {
        let cocktails = [];
        for (let i = 0; i < 10; i++) {
          const cocktailData = this.parseCocktailFromAPI(
            await this.retrieveRandomCocktail()
          );
          cocktails.push(cocktailData);
          this.cards.push(cocktailData);
        }
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        localStorage.setItem(
          "HomepageCocktails",
          JSON.stringify({ cocktails: cocktails, expire: tomorrow.getTime() })
        );
        console.log(
          "Cocktails have been downloaded from API and saved to local storage"
        );
      }
    },
  },
};
</script>