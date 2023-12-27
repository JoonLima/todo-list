<template>
  <v-app>
    <nav-bar />
    <div class="main">
      <router-view />
    </div>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style>
.main {
  height: 100vh;
}

.container {
  padding-left: 65px;
  padding-right: 10px;
}

.titulo {
  padding-top: 20px;
  padding-left: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.titulo span {
  font-size: 1.1rem;
}
</style>
