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
import { Motion } from "@capacitor/motion";
import { LocalNotifications } from '@capacitor/local-notifications';

export default {
  name: "CocktailFilter",
  props: {
    cocktailId: String,
  },
  mixins: [CocktailRequestMixin],
  beforeMount() {
    this.retrieveCocktailDetail();
  },
  mounted() {
    LocalNotifications.requestPermissions();
    this.setShakerListener();
  },
  beforeUnmount() {
    Motion.removeAllListeners();
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
    async setShakerListener() {
      try {
        if (!this.isFavorite()) {
          await Motion.addListener('accel', (event) => {
            if (event.acceleration.x >  6  
             || event.acceleration.x < -6 
             || event.acceleration.y >  6 
             || event.acceleration.y < -6) {
              console.log("Skake shake!");
              this.addToFavorite();
            }
          });
        }
      } catch (e) {
        console.log("Error while adding listener to motion sensor");
        return;
      }
    },
    addToFavorite() {
      let favoriteCocktails = this.loadFavoriteCocktails();
      favoriteCocktails.push(this.cocktailId);
      localStorage.setItem(
        "FavoriteCocktails",
        JSON.stringify({ cocktails: favoriteCocktails })
      );
      LocalNotifications.checkPermissions().then((result) => {
        if (result.display === "granted") {
          LocalNotifications.schedule({
             notifications: [
              {
                title: this.$i18n.t("notificationAddedToFavourite"),
                body:
                  this.cocktail.name +
                  this.$i18n.t("notificationAddedToFavouriteDetail"),
                largeBody:
                  this.cocktail.name +
                  this.$i18n.t("notificationAddedToFavouriteDetail"),
                id: Date.now(),
              },
            ],
          });
        }
      });
      this.$router.push({ name: "Favorite" });
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
      LocalNotifications.checkPermissions().then((result) => {
          if (result.display === 'granted') {
            LocalNotifications.schedule({
              notifications: [
                {
                  title: this.$i18n.t("notificationRemovedFromFavourite"),
                  body: 
                    this.cocktail.name +
                    this.$i18n.t("notificationAddedToFavouriteDetail"),
                  largeBody:
                    this.cocktail.name +
                    this.$i18n.t("notificationAddedToFavouriteDetail"),
                  id: Date.now(),
                },
              ],
            });
          }
      });
      this.$router.go(-1);
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
