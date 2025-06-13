<template>
  <div class="app">
    <h1>Тестовое Задание</h1>
    <RouterView />
  </div>
</template>

<script>
import Organizations from "./pages/OrganizationsPage.vue";

export default {
  name: "App",
  components: { Organizations },
};
</script>

<style scoped>
.app {
  width: stretch;
  width: -webkit-fill-available;
  width: -moz-available;
  max-width: 900px;
  margin: auto;
}
</style>
