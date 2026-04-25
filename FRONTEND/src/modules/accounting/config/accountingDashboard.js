

export const ACCOUNTING_DASHBOARD = [
    {
        key: "customer_invoices",
        name: "Customer Invoices",
        module: "accounting",
        path: "",
        filters: {
            type: "incoming"
        },
        statuses: ["waiting", "ready"]
    },
    {
        key: "vendor_bills",
        name: "Vendors Bills",
        module: "accounting",
        filters: {
            type: "outgoing"
        },
        statuses: ["waiting", "ready"]
    },

]