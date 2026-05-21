import { menuEngine } from "../../engines/menu"

export const initMenuUI = async ({ customMenu = [] } = {}) => {
  try {
    const menus = menuEngine(
      customMenu
    )

    return {
      success: true,

      data: menus,

      message:
        "Menu initialized successfully"
    }
  } catch (error) {
    console.error(
      "[initMenu]",
      error
    )

    return {
      success: false,

      data: [],

      message:
        error?.message ||
        "Failed to initialize menu"
    }
  }
}