import { ACTION_GROUP } from "./actionCore"

export function groupActions(actions = []) {
  return actions.reduce((acc, action) => {
    const group = action.group || ACTION_GROUP.SYSTEM

    if (!acc[group]) acc[group] = []
    acc[group].push(action)

    return acc
  }, {})
}