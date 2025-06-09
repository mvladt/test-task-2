<template>
  <div>
    <h1>Hello World!</h1>
    <p>Count is {{ count }}!</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    count: 1,
  }),
  methods: {
    increment() {
      console.log("Increment!");
      this.count += 1;
    },
  },
};
</script>

<style scoped></style>
