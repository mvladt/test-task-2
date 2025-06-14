<template>
  <div class="actions">
    <button @click="$emit('create')">Добавить организацию</button>
  </div>
</template>

<script>
export default {
  name: "OrgsActions",
  emits: ["create"],
};
</script>

<style scoped>
.actions {
  margin-block: 1rem;
  text-align: right;
}
</style>
