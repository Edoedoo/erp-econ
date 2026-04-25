
import { ACTION_SCOPE, ACTION_GROUP } from "../../../config/actionCore"

export const ACCOUNTING_ACTIONS = {

  POST: {
    key: "post",
    label: "Post",
    icon: "check",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds }) => {
      console.log("POST ENTRY", selectedIds)
    }
  },

  VALIDATE: {
    key: "validate",
    label: "Validate",
    icon: "check-circle",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds }) => {
      console.log("VALIDATE INVOICE", selectedIds)
    }
  },

  REGISTER_PAYMENT: {
    key: "register_payment",
    label: "Register Payment",
    icon: "credit-card",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds, openModal }) => {
      openModal?.("register_payment", { ids: selectedIds })
    }
  },

  RECONCILE: {
    key: "reconcile",
    label: "Reconcile",
    icon: "refresh-cw",
    group: ACTION_GROUP.BULK,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 2 },

    handler: ({ selectedIds }) => {
      console.log("RECONCILE", selectedIds)
    }
  },

  CANCEL: {
    key: "cancel",
    label: "Cancel",
    icon: "x-circle",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds }) => {
      console.log("CANCEL ENTRY", selectedIds)
    }
  },

  RESET_TO_DRAFT: {
    key: "reset_to_draft",
    label: "Reset to Draft",
    icon: "rotate-ccw",
    group: ACTION_GROUP.SELECTION,
    scope: ACTION_SCOPE.BULK,
    requires: { selection: true, min: 1 },

    handler: ({ selectedIds }) => {
      console.log("RESET TO DRAFT", selectedIds)
    }
  }

}