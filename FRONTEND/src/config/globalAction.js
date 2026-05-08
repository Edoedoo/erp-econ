import { ACTION_SCOPE, ACTION_GROUP } from "./actionCore"
import { toAction, toView } from "../core/router/routerSercive"
import FormPage from "../component/formPage/formPage"

export const GLOBAL_ACTIONS = {

  CREATE: {
    key: "create",
    path: "create", 
    label: "Create",
    icon: "plus",
    group: ACTION_GROUP.MAIN,
    scope: ACTION_SCOPE.SINGLE,
    element: FormPage,

    handler: ({ go, module, view }) => {
      go(toAction(module, view, "create"))
    }
  },

  EDIT: {
    key: "edit",
    path: "edit/:id", 
    label: "Edit",
    icon: "edit",
    group: ACTION_GROUP.FORM,
    scope: ACTION_SCOPE.SINGLE,
    element: FormPage,

    handler: ({ go, module, view, id }) => {
      go(toAction(module, view, "edit", id))
    }
  },

  VIEW: {
    key: "view",
    path: "view/:id", 
    label: "View",
    icon: "eye",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.SINGLE,
    requires: { selection: true, min: 1, max: 1 },
    element: FormPage,

    handler: ({ go, module, view, selectedIds }) => {
      go(toAction(module, view, "view", selectedIds[0]))
    }
  },

  DELETE: {
    key: "delete",
    label: "Delete",
    icon: "trash",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.BULK
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

  SAVE: {
    key: "save",
    label: "Save",
    icon: "save",
    group: ACTION_GROUP.FORM,
    scope: ACTION_SCOPE.SINGLE,
  
    handler: ({ formData, go, module, view, id }) => {
      console.log("SAVE", {
        module, 
        view,
        id,
        formData
      })
  
      go(toView(module, view))
    }
  },

  DISCARD: {
    key: "discard",
    label: "Discard",
    icon: "x",
    group: ACTION_GROUP.FORM,
    scope: ACTION_SCOPE.SINGLE,
  
    handler: ({ go, module, view }) => {
      go(toView(module, view))
    }
  },

  
}