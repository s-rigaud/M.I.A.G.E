  <template>
  <div
    class="
      column
      is-half-tablet
      is-one-third-dektop
      is-full-mobile
      is-one-quarter-widescreen
    "
  >
    <div class="card">
      <div class="card-content">
        <p class="title is-4">{{ name }}</p>
        <div class="content">
          <p>Ingredients:</p>
          <ul>
            <li v-for="ingredient in ingredients" :key="ingredient.name">
              <p v-if="ingredient.quantity">
                {{ ingredient.quantity }} de {{ ingredient.name }}
              </p>
              <p v-else>{{ ingredient.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CocktailName",
  props: {
    name: String,
    ingredients: Array,
  },
};
</script>