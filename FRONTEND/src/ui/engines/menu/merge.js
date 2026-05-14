export const mergeMenu = ( defaultMenu = [], customMenu = [] ) => {
    const customMap = new Map(
      customMenu.map((item) => [item.key, item])
    )
  
    const mergedMenu = defaultMenu.map((defaultItem) => {
      const customItem = customMap.get(defaultItem.key)
  
      if (!customItem) {
        return defaultItem
      }
  
      return {
        ...defaultItem,
        ...customItem
      }
    })
  
    const newCustomMenus = customMenu.filter(
      (item) =>
        !defaultMenu.some(
          (defaultItem) =>
            defaultItem.key === item.key
        )
    )
  
    return [
      ...mergedMenu,
      ...newCustomMenus
    ]
  }