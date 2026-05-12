import { MODULE_REGISTRY } from "../../config/builder/MODULE_REGISTRY"

const findModule = (key) => {
  const module = MODULE_REGISTRY[key]

  if (!module) {
    throw new Error(`Module not found: ${key}`)
  }

  return module
}

const findView = (module, viewKey) => {
  const view = module?.views?.find(v => v.key === viewKey)

  if (!view) {
    throw new Error(`View not found: ${viewKey}`)
  }

  return view
}

export const toModule = (key) => {
  const module = findModule(key)

  return {
    module: module.path
  }
}


export const toView = (key, viewKey, query = {}) => {
  const module = findModule(key)
  const view = findView(module, viewKey)

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
    module: module.path,
    view: view.path,
    query: finalQuery
  }
}

export const toAction = (key, viewKey, action, id, query) => {
  const module = findModule(key)
  const view = findView(module, viewKey)

  return {
    module: module.path,
    view: view.path,
    action,
    id,
    query
  }
}