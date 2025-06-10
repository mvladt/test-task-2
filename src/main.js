import Vue from "vue";
import axios from "axios";

import App from "./App.vue";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
