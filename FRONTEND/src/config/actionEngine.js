export function getAvailableActions({ actions = [], selectedIds = [] }) {
    return actions
      .filter(action => {
        if (!action) {
          console.warn("⚠️ Undefined action detected", actions)
          return false
        }
        return true
      })
      .filter(action => {
  
        if (!action.requires?.selection) return true
  
        const len = selectedIds.length
  
        if (action.requires?.min && len < action.requires.min) return false
        if (action.requires?.max && len > action.requires.max) return false
  
        return true
      })
  }