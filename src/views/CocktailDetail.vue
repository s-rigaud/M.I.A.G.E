<template>
  <button @click="$router.go(-1)" class="button is-dark">
    {{ $t("return") }}
  </button>
  <div class="card">
    <div id="content" class="card-content">
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
              {{ ingredient.quantity }} {{ $t("of") }} {{ ingredient.name }}
            </p>
            <p v-else>{{ ingredient.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <button @click="addToFavorite" class="btn add" v-if="!isFavorite()">
      {{ $t("addToFavorite") }}
    </button>
    <button @click="removeFromFavorite" class="btn remove" v-else>
      {{ $t("removeFromFavorite") }}
    </button>
  </div>
</template>

<script>
import CocktailRequestMixin from "@/mixins/CocktailRequestMixin.js";
//import {PluginListenerHandle} from "@capacitor/core";
//import {Motion} from "@capacitor/motion";
import { LocalNotifications } from "@capacitor/local-notifications";

export default {
  name: "CocktailFilter",
  props: {
    cocktailId: String,
  },
  mixins: [CocktailRequestMixin],
  beforeMount() {
    this.retrieveCocktailDetail();
    // this.setAccelHandler();
  },
  mounted() {
    LocalNotifications.requestPermissions();
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
      //accelHandler: PluginListenerHandle,
    };
  },
  methods: {
    async retrieveCocktailDetail() {
      const apiCocktails = await this.retrieveSingleCocktail(this.cocktailId);
      this.cocktail = this.parseCocktailFromAPI(apiCocktails);
    },
    /*async setAccelHandler() {
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
    },*/
    addToFavorite() {
      let favoriteCocktails = this.loadFavoriteCocktails();
      favoriteCocktails.push(this.cocktailId);
      localStorage.setItem(
        "FavoriteCocktails",
        JSON.stringify({ cocktails: favoriteCocktails })
      );
      this.$router.push({ name: "Favorite" });
      LocalNotifications.checkPermissions().then((result) => {
        if (result.display === "granted") {
          LocalNotifications.schedule({
            notifications: [
              {
                title: "Cocktail added to your favourites",
                body:
                  this.cocktail.name +
                  " has been added to your list of favourites cocktails",
                largeBody:
                  this.cocktail.name +
                  " has been added to your list of favourites cocktails",
                id: Date.now(),
              },
            ],
          });
        }
      });
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
      this.$router.go(-1);
      LocalNotifications.schedule({
        notifications: [
          {
            title: "Cocktail removed from your favourites",
            body:
              this.cocktail.name +
              " has been removed from your list of favourites cocktails",
            largeBody:
              this.cocktail.name +
              " has been removed from your list of favourites cocktails",
            id: Date.now(),
          },
        ],
      });
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

.btn {
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn:hover {
  background-position: 100% 0;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  transform: scale(110%);
}

.btn:focus {
  outline: none;
}

.btn.add {
  background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}

.btn.remove {
  background-image: linear-gradient(
    to right,
    #eb3941,
    #f15e64,
    #e14e53,
    #e2373f
  );
  box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
}

#content {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
</style>
