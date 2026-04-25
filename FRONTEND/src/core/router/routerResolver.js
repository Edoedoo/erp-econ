import { MENU_LIST } from "../../config/menuConfig"
import { ACTIONS } from "../../config/actions"

export const resolvePath = (pathname) => {
  const segments = pathname.split("/").filter(Boolean)

  const [modulePath, viewPath, action, id] = segments

  // ===============================
  // 🔹 1. VALIDATE MODULE
  // ===============================
  const currentMenu = MENU_LIST.find(
    item => item.module?.path === modulePath
  )

  if (!currentMenu) {
    return { status: "not_found" }
  }

  const module = currentMenu.module

  // ===============================
  // 🔹 2. HANDLE ROOT MODULE
  // ===============================
  if (!viewPath) {
    return {
      status: "ok",
      module: module.path,
      view: null,
      action: null,
      id: null,
      currentMenu,
      currentView: null
    }
  }

  // ===============================
  // 🔹 3. VALIDATE VIEW
  // ===============================
  const currentView = module.views?.find(
    v => v.path === viewPath
  )

  if (!currentView) {
    return { status: "not_found" }
  }

  // ===============================
  // 🔹 4. HANDLE VIEW ONLY
  // ===============================
  if (!action) {
    return {
      status: "ok",
      module: module.path,
      view: currentView.path,
      action: null,
      id: null,
      currentMenu,
      currentView
    }
  }

  // ===============================
  // 🔹 5. VALIDATE ACTION
  // ===============================
  const allowedActions = currentView.actions || []

  const actionExists = allowedActions.some(
    act => act.key === action
  )

  if (!actionExists) {
    return { status: "not_found" }
  }

  // ===============================
  // 🔹 6. VALIDATE ID (optional rule)
  // ===============================
  // rule sederhana:
  // - action selain "create" butuh id
  if (action !== "create" && !id) {
    return { status: "not_found" }
  }

  // ===============================
  // 🔹 7. SUCCESS
  // ===============================
  return {
    status: "ok",
    module: module.path,
    view: currentView.path,
    action,
    id: id || null,
    currentMenu,
    currentView
  }
}