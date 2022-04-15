<template>
  <nav class="navbar box" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="/assets/MIAGELogo.png"
          width="112"
          height="28"
          alt="Logo MIAGE"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        :class="{ 'is-active': mobileMenuActive }"
        @click="mobileMenuActive = !mobileMenuActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': mobileMenuActive }">
      <div class="navbar-start">
        <router-link
          id="home"
          class="navbar-item"
          to="/"
          @click="mobileMenuActive = !mobileMenuActive"
        >
          {{ $t("home") }}
        </router-link>
        <router-link
          id="filter"
          class="navbar-item"
          to="/filter"
          @click="mobileMenuActive = !mobileMenuActive"
        >
          {{ $t("filter") }}
        </router-link>
        <router-link
          id="favorite"
          class="navbar-item"
          to="/favorite"
          @click="mobileMenuActive = !mobileMenuActive"
        >
          {{ $t("favorite") }}
        </router-link>
        <router-link
          id="about-me"
          class="navbar-item"
          to="/about"
          @click="mobileMenuActive = !mobileMenuActive"
        >
          {{ $t("aboutUs") }}
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="select is-primary">
          <select @change="updateLocale($event)">
            <option
              v-for="locale in sortedLocales"
              :key="locale"
              :value="locale"
              :text="locale"
            ></option>
          </select>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    sortedLocales() {
      // Set current locale first (preselected option)
      let locales = this.$i18n.availableLocales;
      const currentLocale = this.$i18n.locale;
      locales = locales.filter((l) => l != currentLocale);
      locales.unshift(currentLocale);
      return locales;
    },
  },
  data() {
    return {
      mobileMenuActive: false,
    };
  },
  methods: {
    updateLocale(event) {
      this.$i18n.locale = event.target.value;
      this.mobileMenuActive = !this.mobileMenuActive;
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 70px;
  padding: 0px;
  margin-bottom: 0px;
}
.navbar-brand-img {
  margin-left: 10px;
  height: 50px;
  width: 35px;
}

.navbar-item {
  color: black !important;
}
.router-link-active {
  font-weight: 900;
}

.animated {
  position: relative;
  z-index: 0;
  margin-right: 5px;
  margin-left: 5px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
}

.animated::before {
  content: "";
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-color: #399953;
  background-repeat: no-repeat;
  background-size: 50% 50%, 50% 50%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-image: linear-gradient(#7fff00, #32cd32),
    linear-gradient(#32cd32, #228b22), linear-gradient(#f4a460, #a0522d),
    linear-gradient(#a0522d, #800000);
  animation: rotate 4s linear infinite;
}

.animated::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 6px;
  top: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  background: white;
  border-radius: 5px;
}

@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
</style>
