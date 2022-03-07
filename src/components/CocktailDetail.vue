<template>
  <h1>{{ cocktail.id }}</h1>
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
</template>

<script>
import CocktailRequestMixin from "../mixins/CocktailRequestMixin.js";
import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';

export default {
  name: "CocktailFilter",
  props: {
    cocktailId: String,
  },
  components: {},
  mixins: [CocktailRequestMixin],
  beforeMount() {
    this.retrieveCocktailDetail();
  },
  beforeUnmount(){
    // Remove all listeners
    //Motion.removeAllListeners();
    // Stop the acceleration listener
    /*if (this.accelHandler) {
        this.accelHandler.remove();
    }*/
  },
  mounted(){
    // this.setAccelHandler();
  },
  data() {
    return {
      cocktail: { id: this.cocktailId },
      accelHandler: PluginListenerHandle
    };
  },
  methods: {
    async retrieveCocktailDetail() {
      const apiCocktails = await this.retrieveSingleCocktail(this.cocktailId);
      this.cocktail = this.parseCocktailFromAPI(apiCocktails);
    },
    async setAccelHandler(){
      // Once the user approves, can start listening:
      await Motion.addListener('accel', event => {
        if(event.acceleration.x > 14 
          || event.acceleration.x < -14
          || event.acceleration.y > 14
          || event.acceleration.y < -14
          && event.interval > 8){
          console.log ('accel interval', event.interval);
          console.log ('accel x', event.acceleration.x);
          console.log ('accel y', event.acceleration.y);
          console.log('Device motion event:', event);
          }
      });
    }
  },
};
</script>

<style scoped>
    #cocktail-image{
        max-width: 400px;
    }
</style>
