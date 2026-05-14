export const DEFAULT_MENU = [
  {
    key: "inventory",
    label: "Inventory",
    module: "inventory",
    path: "/inventory",
    icon: "inventory",
    order: 3,
    active: true,
    visible: true,
    favorite: false,
    variant: "default",
    size: "medium",
    category: "main",
    badge: null,
    description: "Manage products, stock, and warehouse operations",
    tags: [
      "stock",
      "warehouse",
      "product",
      "inventory"
    ],
    permissions: [
      "inventory.read"
    ],
    children: [
      "products",
      "uom",
      "locations"
    ]
  },
]