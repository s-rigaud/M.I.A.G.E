<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item animated" href="/">
        <img
          src="http://www.miage.fr/wp-content/uploads/2020/11/MIAGE_LOGO-SEUL_COULEURS.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
        :class="{ 'is-active': mobileMenuActive }"
        @click="mobileMenuActive = !mobileMenuActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" :class="{ 'is-active': mobileMenuActive }">
      <div class="navbar-start">
        <router-link id="accueil" class="navbar-item" to="/">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          🏠 Accueil
        </router-link>
        <router-link id="filter" class="navbar-item" to="/filter">
          ⚙️ Filtrer
        </router-link>
        <router-link id="favorite" class="navbar-item" to="/favorite">
          ⭐ Favoris
        </router-link>
        <router-link id="about-me" class="navbar-item" to="/about">
          ➕ A propos de nous
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      mobileMenuActive: false,
    }
  }
};
</script>

<style scoped>
.router-link-active {
  font-weight: 900;
  color: black !important;
}
</style>