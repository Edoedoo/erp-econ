import { DEFAULT_MENU } from "../../registry/menus/menuDefaults"

import { mergeMenu } from "./merge"
import { normalizeMenu } from "./normalize"

export const menuEngine = ( customMenu = [] ) => {
  const mergedMenu = mergeMenu(
    DEFAULT_MENU,
    customMenu
  )

  const normalizedMenu =
    normalizeMenu(mergedMenu)

  return normalizedMenu
}