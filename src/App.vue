<template>
  <div id="inside-app">
    <Navbar />

    <div class="container my-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}
#inside-app {
  min-height: 100vh;
}
.container {
  background-color: #ccc;
  padding: 10px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

body {
  min-height: 100vh;
}
</style>
