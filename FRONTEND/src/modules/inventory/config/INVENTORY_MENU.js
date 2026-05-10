import InventoryPage from "../pages/InventoryPage"

import { PRODUCT } from "./products/PRODUCT"
import { UNIT_OF_MEASURE } from "./products/UNIT_OF_MEASURE.JS"

export const INVENTORY_MENU = {
  path: "inventory",
  element: InventoryPage,

  views: [
    PRODUCT,
    UNIT_OF_MEASURE,
  ]
}