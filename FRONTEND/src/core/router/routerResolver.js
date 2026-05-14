import { MENU_LIST } from "../../config/defaultData/MENU_LIST"
import { MODULE_REGISTRY } from "../../config/builder/MODULE_REGISTRY"

export const resolvePath = (pathname) => {
  const segments = pathname.split("/").filter(Boolean)

  const [modulePath, viewPath, action, id] = segments

  const currentMenu = MENU_LIST.find(
    item => item.path === modulePath
  )

  if (!currentMenu) {
    return { status: "not_found" }
  }

  const currentModule = MODULE_REGISTRY[modulePath]

  if (!currentModule) {
    return { status: "not_found" }
  }

  if (!viewPath) {
    return {
      status: "ok",
      module: modulePath,
      view: null,
      action: null,
      id: null,
      currentMenu,
      currentView: null
    }
  }

  const currentView = currentModule.views?.find(
    v => v.path === viewPath
  )

  if (!currentView) {
    return { status: "not_found" }
  }

  if (!action) {
    return {
      status: "ok",
      module: modulePath,
      view: currentView.path,
      action: null,
      id: null,
      currentMenu,
      currentView
    }
  }

  const allowedActions = currentView.actions || []

  const actionExists = allowedActions.some(
    act => act.key === action
  )

  if (!actionExists) {
    return { status: "not_found" }
  }

  if (action !== "create" && !id) {
    return { status: "not_found" }
  }

  return {
    status: "ok",
    module: modulePath,
    view: currentView.path,
    action,
    id: id || null,
    currentMenu,
    currentView
  }
}