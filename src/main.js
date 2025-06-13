import Vue from "vue";
import axios from "axios";

import "./assets/main.css";
import App from "./App.vue";
import router from "./router.js";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const app = new Vue({
  router,
  render: (h) => h(App),
});

app.$mount("#app");
