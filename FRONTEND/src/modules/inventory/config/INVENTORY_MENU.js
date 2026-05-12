import InventoryPage from "../pages/InventoryPage"

import { PRODUCT } from "./products/PRODUCT"
import { UNIT_OF_MEASURE } from "./products/UNIT_OF_MEASURE.JS"
import { PRODUCT_CATEGORIES } from "./products/PRODUCT_CATEGORIES.JS"

export const INVENTORY_MENU = {
  path: "inventory",
  element: InventoryPage,

  views: [
    PRODUCT,
    UNIT_OF_MEASURE,
    PRODUCT_CATEGORIES,
  ]
}