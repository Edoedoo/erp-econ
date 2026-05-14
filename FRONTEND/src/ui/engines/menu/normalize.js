const normalizeChildren = (children) => {
    if (!Array.isArray(children)) {
      return []
    }
  
    return children.filter(Boolean)
}
  
export const normalizeMenu = ( menus = [] ) => {
    return menus.map((menu, index) => {
        
        return {
        key: menu.key || `menu-${index}`,
        label: menu.label || "Unnamed Menu",
        module: menu.module || null,
        path: menu.path || "/",
        icon: menu.icon || "default",
        order:
            typeof menu.order === "number"
            ? menu.order
            : index,
        active:
            typeof menu.active === "boolean"
            ? menu.active
            : true,
        visible:
            typeof menu.visible === "boolean"
            ? menu.visible
            : true,
        favorite:
            typeof menu.favorite === "boolean"
            ? menu.favorite
            : false,
        variant:
            menu.variant || "default",
        size:
            menu.size || "medium",
        category:
            menu.category || "main",
        badge:
            menu.badge || null,
        description:
            menu.description || "",
        tags:
            Array.isArray(menu.tags)
            ? menu.tags
            : [],
        permissions:
            Array.isArray(menu.permissions)
            ? menu.permissions
            : [],
        children:
            normalizeChildren(menu.children)
        }
    })
}