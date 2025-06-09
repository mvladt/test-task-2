import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

const config = defineConfig({
  plugins: [createVuePlugin()],
});

export default config;
