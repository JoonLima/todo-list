import { createWebHistory, createRouter } from "vue-router";
import Tarefas from "@/views/Tarefas.vue";
import Importante from "@/views/Importante.vue";

const routes = [
  {
    path: "/",
    name: "tarefas",
    component: Tarefas,
  },
  {
    path: "/importante",
    name: "importante",
    component: Importante,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
