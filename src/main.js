import Vue from "vue";
import axios from "axios";

import "./assets/main.css";
import App from "./App.vue";
import router from "./router.js";
import pinia from "./pinia.js";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const app = new Vue({
  router,
  pinia,
  render: (h) => h(App),
});

app.$mount("#app");
