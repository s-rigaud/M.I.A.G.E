  <template>
  <div
    class="
      column
      is-half-tablet
      is-one-third-desktop
      is-full-mobile
      is-one-quarter-widescreen
    "
  >
    <div class="card">
      <router-link :to="{ name: 'CocktailDetail', params: { cocktailId: id } }">
        <div class="card-content">
          <div class="card-image">
            <figure class="image">
              <img
                :src="image"
                alt="Placeholder image"
                class="modal-button"
                data-target="modal-image2"
              />
            </figure>
          </div>
          <div class="content">
            <h2>{{ name }}</h2>
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
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CocktailCard",
  props: {
    id: String,
    name: String,
    ingredients: Array,
    image: String,
  },
};
</script>