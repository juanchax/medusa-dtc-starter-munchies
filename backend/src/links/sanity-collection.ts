import { defineLink } from "@medusajs/framework/utils";
import ProductModule from "@medusajs/medusa/product";

console.log(ProductModule.linkable);

export default defineLink(
  {
    ...ProductModule.linkable.productCollection.id,
    field: "id",
  },
  {
    linkable: {
      serviceName: "sanity",
      primaryKey: "id",
      alias: "sanity_collection",
    },
  },
  {
    readOnly: true,
  },
);
