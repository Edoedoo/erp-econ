import { ACTIONS } from "../../../config/actions";

export const PURCHASE_MENU = {
    path: "purchase",
    element: "",

    views: [
        // ORDERS
        {
            key: "request_Of_quotation",
            name: "Request Of Quotation (RFQ)",
            path: "request_Of_quotation",
            defaultGroup: "",
            defaultView: "list",
            element: null,
            group: "Orders",

            actions: [

            ],

            columns: []
        },
        {
            key: "puchase_orders",
            name: "Puchase Orders",
            path: "puchase_orders",
            defaultGroup: "",
            defaultView: "list",
            element: null,
            group: "Orders",

            actions: [

            ],

            columns: []
        },
        {
            key: "purchase_agreements",
            name: "Purchase Agreements",
            path: "purchase_agreements",
            defaultGroup: "",
            defaultView: "list",
            element: null,
            group: "Orders",

            actions: [

            ],

            columns: []
        },
        {
            key: "vendors",
            name: "Vendors",
            path: "vendors",
            defaultGroup: "",
            defaultView: "list",
            element: null,
            group: "Orders",

            actions: [

            ],

            columns: []
        },

        // PRODUCTS
        {
            key: "product",
            name: "Product",
            path: "product",
            defaultGroup: "",
            defaultView: "list",
            element: null,
            group: "Products",

            actions: [

            ],

            columns: []
        },
        {
            key: "product_variants",
            name: "Product Variants",
            path: "product_variants",
            defaultGroup: "",
            defaultView: "list",
            element: null,
            group: "Products",

            actions: [

            ],

            columns: []
        },

        // REPORTING
        {
            key: "purchase_analysis",
            name: "Purchase Analysis",
            path: "purchase_analysis",
            defaultGroup: "",
            defaultView: "list",
            element: null,
            group: "Reporting",

            actions: [

            ],
                        
            columns: []
        },

        // CONFIGURATION
        {
            key: "setting",
            name: "Setting",
            path: "setting",
            defaultGroup: "",
            defaultView: "kanban",
            element: null,
            group: "Configuration",

            actions: [

            ],

            columns: []
        },
        {
            key: "vendor_price_lists",
            name: "Vendor Price Lists",
            path: "vendor_price_lists",
            defaultGroup: "",
            defaultView: "list",
            element: null,
            group: "Configuration",

            actions: [

            ],

            columns: []
        },
        {
            key: "unit_of_measure",
            name: "Vendor Price Lists (UoM)",
            path: "vendor_price_lists",
            defaultGroup: "",
            defaultView: "list",
            element: null,
            group: "Configuration",

            actions: [

            ],

            columns: []
        },
    ]
}