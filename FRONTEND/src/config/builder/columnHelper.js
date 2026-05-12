import { COLUMN_REGISTRY } from "../registry/columnRegistry"

export const col = (name, override = {}) => ({
  ...COLUMN_REGISTRY[name],
  ...override
})