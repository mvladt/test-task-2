import Vue from "vue";
import VueRouter from "vue-router";

import OrganizationsPage from "./pages/OrganizationsPage.vue";
import NewOrganizationPage from "./pages/NewOrganizationPage.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/organizations" },
  { path: "/organizations", component: OrganizationsPage },
  { path: "/organizations/new", component: NewOrganizationPage },
];

const router = new VueRouter({ routes });

export default router;
