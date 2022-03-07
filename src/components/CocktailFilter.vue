<template>
  <div id="letter-selector">
    <button
      v-for="letter in 'abcdefghijklmnopqrstuvwxyz'.split('')"
      :key="letter"
      @click="updateLetterFiltering"
      class="button"
      :class="{ 'is-primary is-light': letter === this.selectedLetter }"
    >
      {{ letter.toUpperCase() }}
    </button>
  </div>
  <CocktailList :cards="this.cards" />
</template>

<script>
import CocktailList from "./CocktailList.vue";
import CocktailRequestMixin from "../mixins/CocktailRequestMixin.js";

export default {
  name: "CocktailFilter",
  props: {
    letter: {
      type: String,
      required: false,
    },
  },
  components: {
    CocktailList,
  },
  mixins: [CocktailRequestMixin],
  watch: {
    // Called only once
    letter: function (val) {
      this.selectedLetter = val;
      this.filterCocktailsByLetter(val);
      console.log(this.letter, "  ", this.selectedLetter);
    },
  },
  mounted() {
    if (this.letter) {
      this.filterCocktailsByLetter(this.letter);
    } else {
      this.$router.push({ name: "Filter By Letter", params: { letter: "a" } });
    }
  },
  data() {
    return {
      selectedLetter: this.letter,
    };
  },
  methods: {
    async filterCocktailsByLetter(letter) {
      const apiCocktails = await this.retrieveCocktailsStartingWith(letter);
      const formattedCocktails = apiCocktails.map(this.parseCocktailFromAPI);
      this.updateBrowserUrl(letter);
      this.cards = formattedCocktails;
    },
    updateLetterFiltering(event) {
      const letter = event.target.innerHTML.toLowerCase();
      this.selectedLetter = letter;
      this.filterCocktailsByLetter(letter);
    },
    updateBrowserUrl(val) {
      history.pushState(
        {
          id: "Filtering By Letter",
          source: "web",
        },
        "Filtering By Letter",
        `/filter/${val}`
      );
    },
  },
};
</script>
