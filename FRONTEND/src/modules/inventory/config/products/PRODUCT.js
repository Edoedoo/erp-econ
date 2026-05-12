import { ACTIONS } from "../../../../config/builder/actions";
import { col } from "../../../../config/builder/columnHelper";
import { field } from "../../../../config/builder/fieldsHelper";

import ProductsPage from "../../pages/views/ProductsPage";

export const PRODUCT = {
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
    },
    search: true,
    filter: true,
    group_by: true,
    favorite: true,
}