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
  <CocktailList />
</template>

<script>
import CocktailList from "./CocktailList.vue";

export default {
  name: "Homepage",
  components: {
    CocktailList,
  },
};
</script>