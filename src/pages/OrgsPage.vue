<template>
  <div class="orgs">
    <h2>Табличка Организаций</h2>
    <OrgsActions @create="$router.push('/organizations/new')" />
    <template v-if="orgsStore.orgs.length">
      <OrgsTable
        :data="orgsStore.orgs"
        @sort="fetchOrgs"
        @delete="deleteAndFetch"
      />
      <OrgsPagination
        :totalRows="orgsStore.orgsTotalCount"
        @change="fetchOrgs"
        @resize="fetchOrgs"
      />
    </template>
    <template v-else>Нет данных...</template>
  </div>
</template>

<script>
import axios from "axios";
import { mapStores } from "pinia";

import OrgsTable from "../components/OrgsTable.vue";
import OrgsPagination from "../components/OrgsPagination.vue";
import OrgsActions from "../components/OrgsActions.vue";
import orgsStore from "../orgsStore.js";
import { convertSortParams } from "../tools.js";

export default {
  name: "OrgsPage",
  components: {
    OrgsTable,
    OrgsPagination,
    OrgsActions,
  },
  computed: {
    ...mapStores(orgsStore),
  },
  mounted() {
    this.fetchOrgs();
  },
  methods: {
    async fetchOrgs() {
      const fetchParams = {};

      fetchParams.ordering = convertSortParams(
        this.orgsStore.sortColumn,
        this.orgsStore.sortOrder
      );
      fetchParams.page = this.orgsStore.pageCurrent;
      fetchParams.page_size = this.orgsStore.pageSize;

      const response = await axios.get("/organizations/", {
        params: fetchParams,
      });

      this.orgsStore.orgs = response.data.results;
      this.orgsStore.orgsTotalCount = response.data.count;
    },

    async deleteAndFetch(orgIdToDel) {
      await axios.delete(`/organizations/${orgIdToDel}/`);
      await this.fetchOrgs();
    },
  },
};
</script>

<style>
.orgs {
}
</style>
