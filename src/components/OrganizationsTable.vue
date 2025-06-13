<template>
  <div v-if="!data.length">Нет данных...</div>
  <table v-else>
    <thead>
      <tr>
        <th>
          <button class="th-button" @click="sortBy('id')">
            ID {{ sortingArrowFor("id") }}
          </button>
        </th>
        <th>
          <button class="th-button" @click="sortBy('name')">
            Имя {{ sortingArrowFor("name") }}
          </button>
        </th>
        <th>
          <button class="th-button" @click="sortBy('is_active')">
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
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  background-color: transparent;
  border: unset;
}
</style>
