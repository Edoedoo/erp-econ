import { ACTION_SCOPE, ACTION_GROUP } from "../../../config/actionCore"

export const INVENTORY_ACTIONS = {

  VALIDATE: {
    key: "validate",
    label: "Validate",
    icon: "check-circle",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds }) => {
      console.log("VALIDATE", selectedIds)
    }
  },

  SET_QUANTITIES: {
    key: "set_quantities",
    label: "Set Quantities",
    icon: "layers",
    group: ACTION_GROUP.BULK,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds }) => {
      console.log("SET QUANTITIES", selectedIds)
    }
  },

  UPDATE_QUANTITIES: {
    key: "update_quantities",
    label: "Update Quantities",
    icon: "edit-3",
    group: ACTION_GROUP.BULK,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds }) => {
      console.log("UPDATE QUANTITIES", selectedIds)
    }
  },

  PRINT_LABELS: {
    key: "print_labels",
    label: "Print Labels",
    icon: "printer",
    group: ACTION_GROUP.BULK,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds }) => {
      console.log("PRINT LABELS", selectedIds)
    }
  },

}