
import { uiMenuRegistry } from "../../registry/menu/menu"
import { normalizeMenu } from "./normalize"

export const menuEngine = () => {
  return normalizeMenu(uiMenuRegistry)
}