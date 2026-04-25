import { ACTION_SCOPE, ACTION_GROUP } from "./actionCore"
import { toAction, toView } from "../core/router/routerSercive"

export const GLOBAL_ACTIONS = {

  CREATE: {
    key: "create",
    label: "Create",
    icon: "plus",
    group: ACTION_GROUP.MAIN,
    scope: ACTION_SCOPE.SINGLE,

    handler: ({ go, module, view }) => {
      go(toAction(module, view, "create"))
    }
  },

  EDIT: {
    key: "edit",
    label: "Edit",
    icon: "edit",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.SINGLE,
    requires: { selection: true, min: 1, max: 1 },

    handler: ({ go, module, view, selectedIds }) => {
      go(toAction(module, view, "edit", selectedIds[0]))
    }
  },

  DELETE: {
    key: "delete",
    label: "Delete",
    icon: "trash",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds }) => {
      console.log("DELETE", selectedIds)
    }
  },

  VIEW: {
    key: "view",
    label: "View",
    icon: "eye",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.SINGLE,
    requires: { selection: true, min: 1, max: 1 },

    handler: ({ go, module, view, selectedIds }) => {
      go(toAction(module, view, null, selectedIds[0]))
    }
  },

  EXPORT: {
    key: "export",
    label: "Export",
    icon: "download",
    group: ACTION_GROUP.LIST,
    scope: ACTION_SCOPE.GLOBAL,

    handler: ({ data }) => {
      console.log("EXPORT", data)
    }
  },

  IMPORT: {
    key: "import",
    label: "Import",
    icon: "upload",
    group: ACTION_GROUP.LIST,
    scope: ACTION_SCOPE.GLOBAL,

    handler: ({ openModal }) => {
      openModal?.("import")
    }
  },

  REFRESH: {
    key: "refresh",
    label: "Refresh",
    icon: "reload",
    group: ACTION_GROUP.LIST,
    scope: ACTION_SCOPE.GLOBAL,

    handler: ({ refetch }) => {
      refetch?.()
    }
  },

  BACK: {
    key: "back",
    label: "Back",
    icon: "arrow-left",
    group: ACTION_GROUP.SYSTEM,
    scope: ACTION_SCOPE.GLOBAL,

    handler: ({ navigate }) => {
      navigate(-1) 
    }
  },

  
}