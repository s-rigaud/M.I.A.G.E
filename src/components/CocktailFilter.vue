<template>
  <h1>Filtering part</h1>
  <CocktailList />
</template>

<script>
import CocktailList from "./CocktailList.vue";

export default {
  name: "CocktailFilter",
  components: {
    CocktailList,
  },
};
</script>