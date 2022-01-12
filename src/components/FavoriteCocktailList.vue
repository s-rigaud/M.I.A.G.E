<template>
  <h1>favorite part</h1>
  <CocktailList />
</template>

<script>
import CocktailList from "./CocktailList.vue";

export default {
  name: "FavoriteCocktailList",
  components: {
    CocktailList,
  },
};
</script>