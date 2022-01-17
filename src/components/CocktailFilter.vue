<template>
  <div id="letter-selector">
    <button
      v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')"
      :key="letter"
      @click="updateLetterFiltering"
      class="button"
      :class="{ 'is-primary is-light' : letter === this.selectedLetter}"
    >
      {{ letter }}
    </button>
  </div>
  <CocktailList :cards="this.cards" />
</template>

<script>
import CocktailList from "./CocktailList.vue";
import CocktailRequestMixin from "../mixins/CocktailRequestMixin.js";

export default {
  name: "CocktailFilter",
  components: {
    CocktailList,
  },
  mixins: [CocktailRequestMixin],
  beforeMount() {
    this.filterCocktailsByLetter("a");
  },
  data(){
    return {
      selectedLetter: "A",
    }
  },
  methods: {
    async filterCocktailsByLetter(letter) {
      const apiCocktails = await this.retrieveCocktailsStartingWith(letter);
      const formattedCocktails = apiCocktails.map(this.parseCocktailFromAPI);
      this.cards = formattedCocktails;
    },
    updateLetterFiltering(event) {
      const letter = event.target.innerHTML;
      this.selectedLetter = letter;
      this.filterCocktailsByLetter(letter.toLowerCase());
    },
  },
};
</script>
