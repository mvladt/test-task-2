import { defineStore } from "pinia";

/**
 * @typedef { import("./jsdoc.js").Organization } Organization
 */

/**
 * @typedef OrgsStoreState
 * @prop { Organization[] } orgs
 * @prop { number | undefined } orgsTotalCount
 * @prop { keyof Organization | undefined } sortColumn
 * @prop { "asc" | "desc" | undefined } sortOrder
 * @prop { number } pageCurrent
 * @prop { number } pageSize
 */

/** @type {import("pinia").StoreDefinition<"orgs", OrgsStoreState, {}, {}>} */
const orgsStore = defineStore("orgs", {
  state() {
    return {
      orgs: [],
      orgsTotalCount: undefined,
      sortColumn: undefined,
      sortOrder: undefined,
      pageCurrent: 1,
      pageSize: 10,
    };
  },
});

export default orgsStore;
