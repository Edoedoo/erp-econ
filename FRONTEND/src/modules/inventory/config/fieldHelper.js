// =====================================================
// 🔹 FIELD HELPER
// =====================================================

import { INVENTORY_FIELDS } from "./inventoryFields"

export const field = (name, override = {}) => {
  if (!INVENTORY_FIELDS[name]) {
    console.warn(`⚠️ Field "${name}" not found in INVENTORY_FIELDS`)
  }

  return {
    ...INVENTORY_FIELDS[name],
    ...override
  }
}