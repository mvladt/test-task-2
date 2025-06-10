<template>
  <div v-if="!data.length">Нет данных...</div>
  <table v-else>
    <thead>
      <tr>
        <th @click="sortBy('id')" class="center small">
          ID {{ sortingArrowFor("id") }}
        </th>
        <th @click="sortBy('name')">Имя {{ sortingArrowFor("name") }}</th>
        <th @click="sortBy('is_active')" class="center small">
          Статус {{ sortingArrowFor("is_active") }}
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
export default {
  name: "OrganizationsTable",
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  emits: ["sort", "delete"],
  data() {
    return {
      sortingColumn: "",
      sortingOrder: "",
    };
  },
  methods: {
    sortBy(colunm) {
      // При смене столбца — порядок сбрасываем.
      if (this.sortingColumn !== colunm) this.sortingOrder = "asc";
      else this.sortingOrder = this.sortingOrder === "asc" ? "desc" : "asc";

      this.sortingColumn = colunm;

      this.$emit("sort", this.sortingColumn, this.sortingOrder);
    },
    sortingArrowFor(column) {
      if (this.sortingColumn !== column) return "";
      return this.sortingOrder === "asc" ? "↓" : "↑";
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
th {
  cursor: pointer;
}

.center {
  text-align: center;
}
.small {
  width: 70px;
}
.delete-button {
  cursor: pointer;
}
</style>
