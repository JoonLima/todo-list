<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    @click="rail = false"
    class="menu"
    color="secondary"
    permanent
  >
    <v-btn
      class="btn-menu"
      variant="text"
      icon="mdi-chevron-left"
      @click.stop="rail = !rail"
    >
      <v-icon v-if="rail">mdi-menu</v-icon>
      <v-icon v-else>mdi-close</v-icon>
    </v-btn>

    <v-list class="lista-links" density="default" nav>
      <router-link to="/" @click.stop="fecharMenu" active-class="menuAtivo">
        <v-list-item
          base-color="itemMenu"
          prepend-icon="mdi-clipboard-text-outline"
          value="tarefas"
          color="primary"
        >
          <v-list-item-title class="titulo-link">Tarefas</v-list-item-title>
        </v-list-item>
      </router-link>

      <router-link
        to="/importante"
        @click.stop="fecharMenu"
        active-class="menuAtivo"
      >
        <v-list-item
          base-color="itemMenu"
          prepend-icon="mdi-star"
          value="importante"
          color="primary"
        >
          <v-list-item-title class="titulo-link">Importante</v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    rail: true,
  }),
  methods: {
    fecharMenu() {
      this.rail = true;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.menu {
  position: relative;
}

.btn-menu {
  margin-left: 4px;
}
.lista-links {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lista-links .titulo-link {
  font-size: 18px;
  font-weight: 300;
}

.menuAtivo .titulo-link {
  color: #2564cf;
}
</style>
