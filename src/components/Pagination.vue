<template>
  <div class="pagination">
    <div>
      <label>
        Отображать строк на странице
        <select
          v-model.number="size"
          @change="$emit('resize', Number($event.target.value))"
        >
          <option v-for="s of sizeOptions">{{ s }}</option>
        </select>
      </label>
    </div>
    <div>
      <button @click="previousPage" :disabled="currentPage === 1">←</button>
      {{ currentPage }} из {{ totalPages }}
      <button @click="nextPage" :disabled="currentPage === totalPages">
        →
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  emits: ["resize", "prev", "next"],
  props: ["totalRowsCount"],
  data() {
    return {
      size: 10,
      sizeOptions: [1, 5, 10, 15],
      currentPage: 1,
    };
  },
  methods: {
    previousPage() {
      if (this.currentPage === 1) return;
      this.currentPage -= 1;
      this.$emit("prev", this.currentPage);
    },
    nextPage() {
      if (this.currentPage === this.totalPages) return;
      this.currentPage += 1;
      this.$emit("next", this.currentPage);
    },
  },
  computed: {
    totalPages() {
      if (this.totalRowsCount)
        return Math.ceil(this.totalRowsCount / this.size);
    },
  },
};
</script>

<style scoped>
.pagination {
  margin-block: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
