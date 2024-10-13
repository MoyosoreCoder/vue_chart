import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Settings from "../views/Settings.vue";
import Reports from "../views/Reports.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/settings", component: Settings },
  { path: "/reports", component: Reports },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
