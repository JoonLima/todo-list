<template>
  <v-btn @click="acaoBotao" class="text-none botao-padrao" color="primary">
    <v-icon>{{ icone }}</v-icon> {{ titulo }}
  </v-btn>
</template>

<script>
export default {
  name: "BotaoPadrao",
  props: {
    icone: { type: String },
    titulo: { type: String },
    acaoBotao: { type: Function, defalt: () => {} },
  },
};
</script>

<style scoped>
.botao-padrao {
  margin-top: 1rem;
  width: 100%;
}
</style>
