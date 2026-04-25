import { MENU_LIST } from "../../config/menuConfig"

export const resolvePath = (pathname) => {
  const segments = pathname.split("/").filter(Boolean)

  const [modulePath = "", viewPath = "", action = "", id = ""] = segments

  const currentMenu = MENU_LIST.find(
    item => item.module?.path === modulePath
  )

  const currentView = currentMenu?.module?.views?.find(
    view => view.path === viewPath
  )

  return {
    moduleKey: currentMenu?.key,
    viewKey: currentView?.key,
    action,
    id,
    currentMenu,
    currentView
  }
}