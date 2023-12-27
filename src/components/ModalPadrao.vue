<template>
  <v-dialog
    :max-width="this.$vuetify.display.mobile ? '100%' : '50%'"
    persistent
    scrollable
    :fullscreen="this.$vuetify.display.mobile"
    :retain-focus="false"
  >
    <v-card>
      <v-card-title> {{ titulo }} </v-card-title>

      <v-card-text>
        <slot>
          {{ this.$vuetify.display.mobile }}
        </slot>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions class="justify-end">
        <v-btn
          class="text-none"
          color="primary"
          dark
          @click="acaoBotaoPrimario()"
        >
          {{ descricaoBotaoPrimario }}
        </v-btn>
        <v-btn class="text-none" @click="acaoBotaoSecundario()">
          {{ descricaoBotaoSecundario }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    editando: { type: Boolean, required: false, default: false },
    visualizando: { type: Boolean, required: false, default: false },
    titulo: { type: String, required: false, default: "" },
    acaoBotaoPrimario: { type: Function, required: false, default: () => {} },
    acaoBotaoSecundario: { type: Function, required: false, default: () => {} },
    descricaoBotaoPrimario: {
      type: String,
      required: false,
      default: "Salvar",
    },
    descricaoBotaoSecundario: {
      type: String,
      required: false,
      default: "Cancelar",
    },
  },

  data() {
    return {};
  },

  methods: {
    fecharModal() {
      this.$emit("fecharModal", false);
    },
  },
};
</script>

<style scoped></style>
