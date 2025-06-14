<template>
  <div class="pagination">
    <div>
      <label>
        Отображать строк на странице
        <select :value="orgsStore.pageSize" @change="onPageSizeChange">
          <option>1</option>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </label>
    </div>
    <div>
      <button @click="onPrevPage" :disabled="orgsStore.pageCurrent === 1">
        ←
      </button>
      {{ orgsStore.pageCurrent }} из {{ totalPages }}
      <button
        @click="onNextPage"
        :disabled="orgsStore.pageCurrent === totalPages"
      >
        →
      </button>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";

import orgsStore from "../orgsStore.js";

export default {
  name: "OrgsPagination",
  emits: ["resize", "change"],
  props: ["totalRows"],
  computed: {
    ...mapStores(orgsStore),
    totalPages() {
      if (this.totalRows)
        return Math.ceil(this.totalRows / this.orgsStore.pageSize);
    },
  },
  methods: {
    onPrevPage() {
      if (this.orgsStore.pageCurrent === 1) return;
      this.orgsStore.pageCurrent -= 1;
      this.$emit("change", this.orgsStore.pageCurrent);
    },
    onNextPage() {
      if (this.orgsStore.pageCurrent === this.totalPages) return;
      this.orgsStore.pageCurrent += 1;
      this.$emit("change", this.orgsStore.pageCurrent);
    },
    onPageSizeChange($event) {
      this.orgsStore.pageCurrent = 1;
      this.orgsStore.pageSize = Number($event.target.value);
      this.$emit("resize", this.orgsStore.pageSize);
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
