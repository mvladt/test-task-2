<template>
  <div class="organizations">
    <h2>Табличка Организаций</h2>
    <OrganizationsTable
      :data="organizations"
      @sort="sortOrganizations"
      @delete="deleteOrganization"
    />
    <Pagination
      v-if="organizations.length"
      :totalRowsCount="totalOrganizationsCount"
      @next="changePageNumber"
      @prev="changePageNumber"
      @resize="changeTableRowsNumber"
    />
  </div>
</template>

<script>
import axios from "axios";

import OrganizationsTable from "../components/OrganizationsTable.vue";
import Pagination from "../components/Pagination.vue";

/** @typedef {import("../jsdoc.js").Organization} Organization */

export default {
  name: "Organizations",
  components: { OrganizationsTable, Pagination },
  data() {
    return {
      /** @type {Organization[]} */
      organizations: [],
      fetchParams: {},
      totalOrganizationsCount: undefined,
    };
  },
  async mounted() {
    const organizations = await this.fetchOrganizations();
    this.organizations = organizations;
  },
  methods: {
    /**
     * @param {keyof Organization} field
     * @param {"desc" | "asc"} order
     */
    async sortOrganizations(field, order) {
      if (!field) return;

      this.fetchParams.ordering = this.convertSortParams(field, order);
      this.organizations = await this.fetchOrganizations();
    },
    async deleteOrganization(organizationId) {
      if (!organizationId) return;

      await axios.delete(`/organizations/${organizationId}/`);
      this.organizations = await this.fetchOrganizations();
    },

    async changeTableRowsNumber(rowsNumber) {
      if (!rowsNumber) return;

      this.fetchParams.page_size = rowsNumber;
      this.organizations = await this.fetchOrganizations();
    },
    async changePageNumber(pageNumber) {
      if (!pageNumber) return;

      this.fetchParams.page = pageNumber;
      this.organizations = await this.fetchOrganizations();
    },

    // TODO: Вместо возврата 'results' можно сразу присваивать 'this.organizations'.
    async fetchOrganizations() {
      const response = await axios.get("/organizations/", {
        params: this.fetchParams,
      });
      this.totalOrganizationsCount = response.data.count;
      return response.data.results;
    },

    convertSortParams(sortField, sortOrder) {
      if (sortOrder === "desc") return "-" + sortField;
      else return sortField;
    },
  },
};
</script>

<style>
.organizations {
  width: stretch;
  width: -webkit-fill-available;
  width: -moz-available;
  max-width: 900px;
}
</style>
