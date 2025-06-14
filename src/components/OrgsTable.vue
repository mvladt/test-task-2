<template>
  <table>
    <thead>
      <tr>
        <th>
          <button class="th-button" @click="onTableSort('id')">
            ID {{ sortingArrowFor("id") }}
          </button>
        </th>
        <th>
          <button class="th-button" @click="onTableSort('name')">
            Имя {{ sortingArrowFor("name") }}
          </button>
        </th>
        <th>
          <button class="th-button" @click="onTableSort('is_active')">
            Статус {{ sortingArrowFor("is_active") }}
          </button>
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d of data" :key="d.id">
        <td class="center small">{{ d.id }}</td>
        <td>{{ d.name }}</td>
        <td class="center small">
          {{ d.is_active ? "Активна" : "Не активна" }}
        </td>
        <td class="center small">
          <button class="delete-button" @click="$emit('delete', d.id)">
            Удалить
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapStores } from "pinia";

import orgsStore from "../orgsStore.js";

export default {
  name: "OrgsTable",
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  emits: ["sort", "delete"],
  computed: {
    ...mapStores(orgsStore),
  },
  methods: {
    onTableSort(colunm) {
      // При смене столбца — порядок сбрасываем.
      if (this.orgsStore.sortColumn !== colunm)
        this.orgsStore.sortOrder = "asc";
      else
        this.orgsStore.sortOrder =
          this.orgsStore.sortOrder === "asc" ? "desc" : "asc";

      this.orgsStore.sortColumn = colunm;

      this.$emit("sort", this.orgsStore.sortColumn, this.orgsStore.sortOrder);
    },
    sortingArrowFor(column) {
      if (this.orgsStore.sortColumn !== column) return "";
      return this.orgsStore.sortOrder === "asc" ? "↓" : "↑";
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
td {
  height: 2lh;
}

.center {
  text-align: center;
}
.small {
  width: 80px;
}
.delete-button {
  cursor: pointer;
}
.th-button {
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  background-color: transparent;
  border: unset;
}
</style>
