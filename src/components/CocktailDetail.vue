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
        <h2 v-if="isFavorite()">{{ cocktail.name }} ⭐</h2>
        <h2 v-else>
          {{ cocktail.name }}
        </h2>
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
    <button
      @click="addToFavorite"
      class="button is-primary"
      v-if="!isFavorite()"
    >
      Ajouter aux favoris
    </button>
    <button @click="removeFromFavorite" class="button is-danger" v-else>
      Supprimer des favoris
    </button>
  </div>
  <button @click="$router.go(-1)" class="button is-dark">Back to list</button>
</template>

<script>
import CocktailRequestMixin from "../mixins/CocktailRequestMixin.js";
import { PluginListenerHandle } from "@capacitor/core";
import { Motion } from "@capacitor/motion";

export default {
  name: "CocktailFilter",
  props: {
    cocktailId: String,
  },
  mixins: [CocktailRequestMixin],
  mounted() {
    this.retrieveCocktailDetail();
    // this.setAccelHandler();
  },
  beforeUnmount() {
    // Remove all listeners
    //Motion.removeAllListeners();
    // Stop the acceleration listener
    /*if (this.accelHandler) {
        this.accelHandler.remove();
    }*/
  },
  data() {
    return {
      cocktail: { id: this.cocktailId },
      accelHandler: PluginListenerHandle,
    };
  },
  methods: {
    async retrieveCocktailDetail() {
      const apiCocktails = await this.retrieveSingleCocktail(this.cocktailId);
      this.cocktail = this.parseCocktailFromAPI(apiCocktails);
    },
    async setAccelHandler() {
      // Once the user approves, can start listening:
      await Motion.addListener("accel", (event) => {
        if (
          event.acceleration.x > 14 ||
          event.acceleration.x < -14 ||
          event.acceleration.y > 14 ||
          (event.acceleration.y < -14 && event.interval > 8)
        ) {
          console.log("accel interval", event.interval);
          console.log("accel x", event.acceleration.x);
          console.log("accel y", event.acceleration.y);
          console.log("Device motion event:", event);
        }
      });
    },
    addToFavorite() {
      let favoriteCocktails = this.loadFavoriteCocktails();
      favoriteCocktails.push(this.cocktailId);
      localStorage.setItem(
        "FavoriteCocktails",
        JSON.stringify({ cocktails: favoriteCocktails })
      );
    },
    removeFromFavorite() {
      let favoriteCocktails = this.loadFavoriteCocktails();
      favoriteCocktails = this.removeFromArray(
        favoriteCocktails,
        this.cocktailId
      );
      localStorage.setItem(
        "FavoriteCocktails",
        JSON.stringify({ cocktails: favoriteCocktails })
      );
    },
    removeFromArray(array, element) {
      return array.filter(function (value) {
        return value != element;
      });
    },
    isFavorite() {
      return this.loadFavoriteCocktails().includes(this.cocktailId);
    },
    loadFavoriteCocktails() {
      const favoriteCocktails = localStorage.getItem("FavoriteCocktails");
      return favoriteCocktails ? JSON.parse(favoriteCocktails).cocktails : [];
    },
  },
};
</script>

<style scoped>
#cocktail-image {
  width: 400px;
}
button:hover {
  transform: scale(110%);
}
</style>
