import Vue from "vue";
import VueRouter from "vue-router";

import OrgsPage from "./pages/OrgsPage.vue";
import NewOrgPage from "./pages/NewOrgPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/organizations" },
  { path: "/organizations", component: OrgsPage },
  { path: "/organizations/new", component: NewOrgPage },
];

const router = new VueRouter({ routes, mode: "history", base: "/test-task-2" });

export default router;
