import { ACTION_SCOPE, ACTION_GROUP } from "../builder/actionCore"
import { toAction, toView } from "../../core/router/routerSercive"
import FormPage from "../../component/formPage/formPage"

import svgImport from "../../Assets/SVG/import.svg"
import svgExport from "../../Assets/SVG/export.svg"

export const GLOBAL_ACTIONS = {

  CREATE: {
    key: "create",
    path: "create",
    label: "Create",
    icon: "plus",
    group: ACTION_GROUP.CENTER_LEFT,
    scope: ACTION_SCOPE.GLOBAL,
    element: FormPage,

    visible: ({ route }) =>
      !route?.action,

    handler: ({ go, module, view }) => {
      go(toAction(module, view, "create"))
    }
  },

  EDIT: {
    key: "edit",
    path: "edit/:id",
    label: "Edit",
    icon: "edit",
    group: ACTION_GROUP.CENTER_LEFT,
    scope: ACTION_SCOPE.SINGLE,
    element: FormPage,

    visible: ({ route }) =>
      route?.action === "view",

    handler: ({ go, module, view, id }) => {
      go(toAction(module, view, "edit", id))
    }
  },

  VIEW: {
    key: "view",
    path: "view/:id",
    label: "View",
    icon: "eye",
    group: ACTION_GROUP.CENTER_LEFT,
    scope: ACTION_SCOPE.SINGLE,
    requires: { selection: true, min: 1, max: 1 },
    element: FormPage,

    visible: () => false,

    handler: ({ go, module, view, selectedIds }) => {
      go(toAction(module, view, "view", selectedIds[0]))
    }
  },

  DELETE: {
    key: "delete",
    label: "Delete",
    icon: "trash",
    group: ACTION_GROUP.BOTTOM_LEFT,
    scope: ACTION_SCOPE.BULK,

    visible: ({ selectedIds }) =>
      selectedIds?.length > 0
  },

  EXPORT: {
    key: "export",
    label: "Export",
    icon: svgExport ,
    group: ACTION_GROUP.CENTER_RIGHT,
    scope: ACTION_SCOPE.GLOBAL,

    visible: ({ route }) =>
      !route?.action,

    handler: ({ data }) => {
      console.log("EXPORT", data)
    }
  },

  IMPORT: {
    key: "import",
    label: "Import",
    icon: svgImport ,
    group: ACTION_GROUP.CENTER_RIGHT,
    scope: ACTION_SCOPE.GLOBAL,

    visible: ({ route }) =>
      !route?.action,

    handler: ({ openModal }) => {
      openModal?.("import")
    }
  },

  REFRESH: {
    key: "refresh",
    label: "Refresh",
    icon: "reload",
    group: ACTION_GROUP.BOTTOM_RIGHT,
    scope: ACTION_SCOPE.GLOBAL,

    visible: ({ route }) =>
      !route?.action,

    handler: ({ refetch }) => {
      refetch?.()
    }
  },

  BACK: {
    key: "back",
    label: "Back",
    icon: "arrow-left",
    group: ACTION_GROUP.CENTER_LEFT,
    scope: ACTION_SCOPE.GLOBAL,

    visible: ({ route }) =>
      ["view", "edit", "create"]
        .includes(route?.action),

    handler: ({ navigate }) => {
      navigate(-1)
    }
  },

  SAVE: {
    key: "save",
    label: "Save",
    icon: "save",
    group: ACTION_GROUP.CENTER_LEFT,
    scope: ACTION_SCOPE.SINGLE,

    visible: ({ route }) =>
      ["create", "edit"]
        .includes(route?.action),

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
    group: ACTION_GROUP.CENTER_LEFT,
    scope: ACTION_SCOPE.SINGLE,

    visible: ({ route }) =>
      ["create", "edit"]
        .includes(route?.action),

    handler: ({ go, module, view }) => {
      go(toView(module, view))
    }
  },

  PRINTOUT: {
    key: "printout",
    label: "Print",
    icon: "",
    group: ACTION_GROUP.BOTTOM_LEFT,
    scope: ACTION_SCOPE.SINGLE,

    visible: ({ selectedIds }) =>
      selectedIds?.length > 0,

    handler: ({ selectedIds }) => {
      console.log("PRINTOUT", selectedIds)
    }
  },

}