<template>
  <div class="app">
    <h1>Тестовое Задание</h1>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "App",
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
