import { GLOBAL_COLUMNS } from "../../defaults/ui/columns/globalColumns"
 

export const col = (name, override = {}) => ({
  ...GLOBAL_COLUMNS[name],
  ...override
})