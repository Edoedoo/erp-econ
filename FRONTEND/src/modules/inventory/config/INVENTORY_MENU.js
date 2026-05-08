import InventoryPage from "../pages/InventoryPage"
import ProductsPage from "../pages/views/ProductsPage"
import UnitOfMeasure from "../pages/views/UnitOfMeasurePage"
import { ACTIONS } from "../../../config/actions"
import { col } from "../../../config/columnHelper"
import { field } from "../../../config/fieldsHelper"

export const INVENTORY_MENU = {
  path: "inventory",
  element: InventoryPage,

  views: [


    {
      key: "transfers",
      name: "Transfers",
      path: "transfers",
      defaultGroup: "operation",
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
      ],
    
      form: {
        sections: [
          {
            key: "general",
            label: "General Information",
            fields: [
              field("reference"),
              field("origin"), 
              field("partner")
            ]
          },
          {
            key: "status",
            label: "Status",
            fields: [
            field("state"), 
            field("scheduled_date")
          ]
          }
        ]
      }
    },
    {
      key: "receipts",
      name: "Receipts",
      path: "receipts",
      defaultGroup: "operation",
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
      ],
    
      form: {
        sections: [
          {
            key: "general",
            label: "General",
            fields: ["reference", "vendor"]
          },
          {
            key: "schedule",
            label: "Schedule",
            fields: ["scheduled_date", "state"]
          }
        ]
      }
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

    {
      key: "products",
      name: "Product",
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
        ACTIONS.DUPLICATE,
        ACTIONS.SAVE,
        ACTIONS.DISCARD,
        ACTIONS.PRINT_LABELS,
      ],
    
      columns: [
        col("name"),
        col("type"),
        col("category"),
        col("price"),
        col("qty_available")
      ],  

      form: {
        header: {
          media: [
            field("image")
          ],
      
          name: [
            field("favorite"),
            field("name")
          ],
      
          checkbox: [
            field("canSell"),
            field("canPurchase"),
            field("rental"),
            field("expense"),
          ]
        },
      
        sections: [
          {
            key: "general",
            label: "General Information",
      
            columns: [
              [
                field("type"),
                field("category"),
                field("tracking"),
                field("uom"),
              ],
      
              [
                field("price"),
                field("cost"),
                field("reference"),
                field("barcode"),
              ]
            ]
          },
      
          {
            key: "sales",
            label: "Sales",
      
            columns: [
              [
                field("price")
              ]
            ]
          },
      
          {
            key: "purchase",
            label: "Purchase",
      
            columns: [
              [
                field("cost")
              ]
            ]
          },
      
          {
            key: "inventory",
            label: "Inventory",
      
            columns: [
              [
                field("qty_available")
              ]
            ]
          }
        ]
      }
    },
    {
      key: "product_variants",
      name: "Product Variants",
      path: "product_variants",
      defaultGroup: "product",
      defaultView: "list",
      element: null,
      group: "Products",
    
      actions: [
        ACTIONS.CREATE,
        ACTIONS.EXPORT,
        ACTIONS.EDIT,
        ACTIONS.DELETE,
        ACTIONS.VIEW,
      ],
  
      columns: [
        col("product"),
        col("product_variant"),
        col("category"),
        col("qty_available")
      ],
    
      form: {
        sections: [
          {
            key: "general",
            label: "General",
            fields: [
              field("product"), 
              field("product_variant"), 
              field("category")
            ]
          },
          {
            key: "inventory",
            label: "Inventory",
            fields: [
              field("qty_available")
            ]
          }
        ]
      }
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
      defaultView: "list",
      element: UnitOfMeasure,
      group: "Products",

      actions: [
        ACTIONS.CREATE,
        ACTIONS.IMPORT,
        ACTIONS.EXPORT,
        ACTIONS.SAVE,
        ACTIONS.DISCARD,
        ACTIONS.VIEW,
        ACTIONS.EDIT,

      ],

      columns: [
        col("name", { label: "Units of Measure"}),
        col("uom_category"),
        col("type", { label: "Type" })
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
      }
    },

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