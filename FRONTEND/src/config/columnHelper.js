import { COLUMN_REGISTRY } from "./columnRegistry"

export const col = (name, override = {}) => ({
  ...COLUMN_REGISTRY[name],
  ...override
})