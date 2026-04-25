import InventoryPage from "../pages/InventoryPage"
import ProductsPage from "../pages/ProductsPage"
import { ACTIONS } from "../../../config/actions"
import { col } from "../../../config/columnHelper"

export const INVENTORY_MENU = {
  path: "inventory",
  element: InventoryPage,

  views: [

    // =====================================================
    // 🔹 OPERATIONS
    // =====================================================

    {
      key: "transfers",
      name: "Transfers",
      path: "transfers",
      defaultGroup: "",
      defaultView: "list",
      element: null,
      group: "Operations",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.IMPORT,
        ACTIONS.EXPORT,
        ACTIONS.EDIT,
        ACTIONS.VALIDATE,
        ACTIONS.DELETE,
        ACTIONS.SET_QUANTITIES,
        ACTIONS.UPDATE_QUANTITIES,
        ACTIONS.PRINT_LABELS,
        ACTIONS.VIEW,
        ACTIONS.DUPLICATE,
        ACTIONS.ARCHIVE
      ],

      columns: [
        col("reference"),
        col("origin"),
        col("partner", { label: "Contact" }),
        col("state"),
        col("scheduled_date", { label: "Scheduled Date" }),
        col("create_date")
      ]
    },

    {
      key: "receipts",
      name: "Receipts",
      path: "receipts",
      defaultGroup: "",
      defaultView: "list",
      element: null,
      group: "Operations",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.IMPORT,
        ACTIONS.EXPORT,
        ACTIONS.VALIDATE,
        ACTIONS.DELETE,
        ACTIONS.SET_QUANTITIES,
        ACTIONS.VIEW
      ],

      columns: [
        col("reference"),
        col("vendor"),
        col("state"),
        col("scheduled_date"),
        col("create_date")
      ]
    },

    {
      key: "delivery_order",
      name: "Delivery Orders",
      path: "delivery_order",
      defaultGroup: "",
      defaultView: "list",
      element: null,
      group: "Operations",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EXPORT,
        ACTIONS.VALIDATE,
        ACTIONS.DELETE,
        ACTIONS.PRINT_LABELS,
        ACTIONS.VIEW
      ],

      columns: [
        col("reference"),
        col("customer"),
        col("state"),
        col("scheduled_date"),
        col("origin")
      ]
    },

    {
      key: "internal_transfer",
      name: "Internal Transfers",
      path: "internal_transfer",
      defaultGroup: "",
      defaultView: "list",
      element: null,
      group: "Operations",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EXPORT,
        ACTIONS.VALIDATE,
        ACTIONS.VIEW
      ],

      columns: [
        col("reference"),
        col("source_location"),
        col("destination_location"),
        col("state"),
        col("scheduled_date")
      ]
    },

    // =====================================================
    // 🔹 PRODUCTS
    // =====================================================

    {
      key: "products",
      name: "Products",
      path: "products",
      defaultGroup: "product",
      defaultView: "kanban",
      element: ProductsPage,
      group: "Products",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.IMPORT,
        ACTIONS.EXPORT,
        ACTIONS.EDIT,
        ACTIONS.DELETE,
        ACTIONS.VIEW,
        ACTIONS.DUPLICATE
      ],

      columns: [
        col("reference"),
        col("source_location"),
        col("destination_location"),
        col("state"),
        col("scheduled_date"),
        col("reference"),
        col("source_location"),
        col("destination_location"),
        col("state"),
        col("scheduled_date")
      ]
    },

    {
      key: "product_variants",
      name: "Product Variants",
      path: "product_variants",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Products",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EXPORT,
        ACTIONS.EDIT,
        ACTIONS.DELETE,
        ACTIONS.VIEW
      ],

      columns: [
        col("product"),
        col("product_variant"),
        col("category"),
        col("qty_available")
      ]
    },

    {
      key: "product_categories",
      name: "Product Categories",
      path: "product_categories",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Products",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EXPORT,
        ACTIONS.EDIT,
        ACTIONS.DELETE
      ],

      columns: [
        col("name"),
        col("parent", { label: "Parent Category" })
      ]
    },

    {
      key: "units_of_measure",
      name: "Units of Measure",
      path: "units_of_measure",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Products",

      actions: [
        ACTIONS.CREATE
      ],

      columns: [
        col("name"),
        col("category"),
        col("uom_type", { label: "Type" })
      ]
    },

    // =====================================================
    // 🔹 REPORTING
    // =====================================================

    {
      key: "stock",
      name: "Stock",
      path: "stock",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Reporting",

      actions: [
        ACTIONS.EXPORT,
        ACTIONS.REFRESH
      ],

      columns: [
        col("product"),
        col("location"),
        col("qty_available"),
        col("reserved_qty")
      ]
    },

    {
      key: "inventory_valuation",
      name: "Inventory Valuation",
      path: "inventory_valuation",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Reporting",

      actions: [
        ACTIONS.EXPORT
      ],

      columns: [
        col("product"),
        col("qty"),
        col("cost"),
        col("total")
      ]
    },

    // =====================================================
    // 🔹 CONFIGURATION
    // =====================================================

    {
      key: "warehouse",
      name: "Warehouses",
      path: "warehouse",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Configuration",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EDIT,
        ACTIONS.DELETE
      ],

      columns: [
        col("name"),
        col("code"),
        col("company")
      ]
    },

    {
      key: "locations",
      name: "Locations",
      path: "locations",
      defaultGroup: "",
      defaultView: "",
      element: null,
      group: "Configuration",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.EDIT
      ],

      columns: [
        col("name"),
        col("location", { label: "Parent Location" }),
        col("warehouse")
      ]
    }

  ]
}