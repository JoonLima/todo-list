<template>
  <div class="container">
    <div class="titulo">
      <v-icon>mdi-check</v-icon>
      <span>Tarefas</span>
    </div>

    <v-col lg="2" md="2" sm="12">
      <botao-padrao
        titulo="Adicionar"
        icone="mdi-plus"
        :acaoBotao="adicionarTarefa"
      />
    </v-col>

    <modal-padrao
      titulo="Cliente"
      v-model="exibirJanela"
      :acaoBotaoSecundario="fecharModal"
    >
      <v-col lg="2" md="2" sm="12" style="border: 1px solid red">
        <div>teste</div>
        <div>teste3</div>
      </v-col>
    </modal-padrao>
  </div>
</template>

<script>
import BotaoPadrao from "@/components/Botao.vue";
import CardPadrao from "@/components/CardPadrao.vue";
import ModalPadrao from "@/components/ModalPadrao.vue";

export default {
  name: "MinhasTarefas",
  data() {
    return {
      exibirJanela: false,
    };
  },
  components: { BotaoPadrao, CardPadrao, ModalPadrao },

  methods: {
    adicionarTarefa() {
      this.exibirJanela = true;
    },

    fecharModal() {
      this.exibirJanela = false;
    },
  },
};
</script>

<style scoped></style>
