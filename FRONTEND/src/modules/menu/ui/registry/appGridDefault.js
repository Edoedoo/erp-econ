import iconInventory from "../../../../Assets/SVG/btnInventory.svg"

export const menus = [
    {
        key: "inventory",
        label: "Inventory",
        path: "/inventory",
        icon: iconInventory,
        active: true,
        favorite: false,
        showBadge: true,
        badge: 9,
        description: "Manage products, stock, and warehouse operations",

        dropdown: {
            visible: false,

            shortcut: [
                {
                    key: "products",
                    label: "Go to Products",
                    path: "/inventory?view=products",
                    active: true,
                },
                {
                    key: "stocks",
                    label: "Go to Stocks",
                    path: "/inventory?view=stocks",
                    active: true,
                },
                {
                    key: "movements",
                    label: "Go to Movements",
                    path: "/inventory?view=movements",
                    active: true,
                },
                {
                    key: "warehouse",
                    label: "Go to Warehouse",
                    path: "/inventory?view=warehouse",
                    active: true,
                },
                {
                    key: "reports",
                    label: "Go to Reports",
                    path: "/inventory?view=reports",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "show-stock",
                    label: "Show Stock",
                    checked: true,
                    active: true,
                },
                {
                    key: "show-price",
                    label: "Show Price",
                    checked: true,
                    active: true,
                },
                {
                    key: "show-category",
                    label: "Show Category",
                    checked: false,
                    active: true,
                }
            ],

            documentation: {
                label: "Inventory Documentation",
                link: "/inventory?docs=true"
            }
        }
    },
]