
export const INVENTORY_DASHBOARD = [
    {
        key: "receipts",
        name: "Receipts",
        module: "inventory",
        path: "",
        filters: {
            type: "incoming"
        },
        statuses: ["waiting", "ready"]
    },
    {
        key: "delivery_order",
        name: "Delivery Orders",
        module: "inventory",
        filters: {
            type: "outgoing"
        },
        statuses: ["waiting", "ready", "done"]
    },
    {
        key: "transfer",
        name: "Transfer",
        module: "inventory",
        filters: {
            type: "external"
        },
        statuses: ["waiting", "ready"]
    },
    {
        key: "internal_transfer",
        name: "Internal Transfer",
        module: "inventory",
        filters: {
            type: "internal"
        },
        statuses: ["waiting", "ready"]
    }
]