/**
 *
 * @param { keyof import("./jsdoc.js").Organization } sortColumn
 * @param { "asc" | "desc" } sortOrder
 * @returns { string }
 */
export function convertSortParams(sortColumn, sortOrder) {
  if (sortOrder === "desc") return "-" + sortColumn;
  else return sortColumn;
}
