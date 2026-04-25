import { MENU_LIST } from "../../config/menuConfig"

const findMenu = (key) =>
  MENU_LIST.find(item => item.key === key)

const findView = (menu, viewKey) =>
  menu?.module?.views?.find(v => v.key === viewKey)

export const toModule = (key) => {
    const menu = findMenu(key)

    if (!menu?.module?.path) {
        throw new Error(`Module path not found for key: ${key}`)
    }

    return {
        module: menu.module.path
    }
}


export const toView = (key, viewKey, query = {}) => {
  const menu = findMenu(key)
  const view = findView(menu, viewKey)

  if (!menu || !view) {
    throw new Error(`View not found: ${key} / ${viewKey}`)
  }

  const finalQuery = { ...query }

  if (!finalQuery.view_type && view.defaultView) {
    finalQuery.view_type = view.defaultView
  }

  if (!finalQuery.group_by && view.defaultGroup) {
    finalQuery.group_by = view.defaultGroup
  }

  Object.keys(finalQuery).forEach(k => {
    if (!finalQuery[k]) delete finalQuery[k]
  })

  return {
    module: menu.module.path,
    view: view.path,
    query: finalQuery
  }
}

export const toAction = (key, viewKey, action, id, query) => {
  const menu = findMenu(key)
  const view = findView(menu, viewKey)

  return {
    module: menu?.module?.path,
    view: view?.path,
    action,
    id,
    query
  }
}