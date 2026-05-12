
import { col } from "../../../../config/builder/columnHelper";
import { ACTIONS } from "../../../../config/builder/actions"
import { field } from "../../../../config/builder/fieldsHelper";
import ProductCategories from "../../pages/views/productCategories";

export const PRODUCT_CATEGORIES = {
  key: "product_categories",
  name: "Product Categories",
  path: "product_categories",
  defaultGroup: "",
  defaultView: "list",
  element: ProductCategories,
  group: "Products",

  actions: [
    ACTIONS.CREATE,
    ACTIONS.SAVE,
    ACTIONS.DISCARD,
    ACTIONS.VIEW,
    ACTIONS.EDIT
  ],

  columns: [
    col("product_category"),
  ],

  form: {
    header: {
      media: [],
      name: [],
      checkbox: []
    },

    sections: [
      {
        key: "general",
        label: "General Information",

        information: (values) => {
        
          return "";
        },

        columns: [
          [
            field("uom_name"),
            field("uom_category"),
            field("uom_type")
          ],

          [
            field("uom_factor"),
            field("uom_rounding"),
            field("active")
          ]
        ]
      }
    ]
  },

  search: false,
  filter: false,
  group_by: false,
  favorite: false,
};