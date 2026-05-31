import iconInventory from "../../../../Assets/SVG/menuGrid/btnInventory.svg"
import btnAccounting from "../../../../Assets/SVG/menuGrid/btnAccounting.svg"
import btnPurchase from "../../../../Assets/SVG/menuGrid/btnPurchase.svg"
import btnCrm from "../../../../Assets/SVG/menuGrid/btnCrm.svg"
import btnConfiguration from "../../../../Assets/SVG/menuGrid/btnConfiguration.svg"
import btnExpenses from "../../../../Assets/SVG/menuGrid/btnExpenses.svg"
import btnEmployees from "../../../../Assets/SVG/menuGrid/btnEmployees.svg"
import btnMembers from "../../../../Assets/SVG/menuGrid/btnMembers.svg"
import btnPos from "../../../../Assets/SVG/menuGrid/btnPos.svg"
import btnSales from "../../../../Assets/SVG/menuGrid/btnSales.svg"
import btnSetting from "../../../../Assets/SVG/menuGrid/btnSetting.svg"
import btnDashboard from "../../../../Assets/SVG/menuGrid/btnDashboard.svg"
import btnManufacturing from "../../../../Assets/SVG/menuGrid/btnManufacturing.svg"
import btnProject from "../../../../Assets/SVG/menuGrid/btnProject.svg"
import btnTimesheet from "../../../../Assets/SVG/menuGrid/btnTimesheet.svg"
import btnHelpdesk from "../../../../Assets/SVG/menuGrid/btnHelpdesk.svg"
import btnMarketing from "../../../../Assets/SVG/menuGrid/btnMarketing.svg"
import btnWebsite from "../../../../Assets/SVG/menuGrid/btnWebsite.svg"
import btnEcommerce from "../../../../Assets/SVG/menuGrid/btnEcommerce.svg"
import btnQuality from "../../../../Assets/SVG/menuGrid/btnQuality.svg"
import btnMaintenance from "../../../../Assets/SVG/menuGrid/btnMaintenance.svg"
import btnFleet from "../../../../Assets/SVG/menuGrid/btnFleet.svg"
import btnRecruitment from "../../../../Assets/SVG/menuGrid/btnRecruitment.svg"
import btnDocument from "../../../../Assets/SVG/menuGrid/btnDocument.svg"
import btnCalendar from "../../../../Assets/SVG/menuGrid/btnCalendar.svg"

export const appGridDefault = [
    {
        key: "inventory",
        label: "Inventory",
        path: "/inventory",
        icon: iconInventory,
        active: true,
        badge: 9,
        description: "Manage products, stock, and warehouse operations",

        dropdown: {
            shortcut: [
                {
                    key: "products",
                    label: "Go to Products",
                    shortkey: "Ctrl+Shift+P",
                    path: "/inventory",
                    active: true,
                },
                {
                    key: "stocks",
                    label: "Go to Stocks",
                    shortkey: "Ctrl+Shift+S",
                    path: "/inventory",
                    active: true,
                },
                {
                    key: "movements",
                    label: "Go to Movements",
                    shortkey: "Ctrl+Shift+M",
                    path: "/inventory",
                    active: true,
                },
                {
                    key: "warehouse",
                    label: "Go to Warehouse",
                    shortkey: "Ctrl+Shift+W",
                    path: "/inventory",
                    active: true,
                },
                {
                    key: "reports",
                    label: "Go to Reports",
                    shortkey: "Ctrl+Shift+R",
                    path: "/inventory",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Inventory Documentation",
                path: "/documentation",
                keyModule: "inventory"
            }
        }
    },

    {
        key: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: btnDashboard,
        active: true,
        badge: 3,
        description: "Overview analytics, activity, and business performance",

        dropdown: {
            shortcut: [
                {
                    key: "overview",
                    label: "Go to Overview",
                    shortkey: "Ctrl+Shift+O",
                    path: "/dashboard?view=overview",
                    active: true,
                },
                {
                    key: "analytics",
                    label: "Go to Analytics",
                    shortkey: "Ctrl+Shift+A",
                    path: "/dashboard?view=analytics",
                    active: true,
                },
                {
                    key: "reports",
                    label: "Go to Reports",
                    shortkey: "Ctrl+Shift+R",
                    path: "/dashboard?view=reports",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Dashboard Documentation",
                link: "/dashboard?docs=true"
            }
        }
    },

    {
        key: "accounting",
        label: "Accounting",
        path: "/accounting",
        icon: btnAccounting,
        active: true,
        badge: 6,
        description: "Manage invoices, journals, and financial reports",

        dropdown: {
            shortcut: [
                {
                    key: "invoices",
                    label: "Go to Invoices",
                    shortkey: "Ctrl+Shift+I",
                    path: "/accounting?view=invoices",
                    active: true,
                },
                {
                    key: "journals",
                    label: "Go to Journals",
                    shortkey: "Ctrl+Shift+J",
                    path: "/accounting?view=journals",
                    active: true,
                },
                {
                    key: "payments",
                    label: "Go to Payments",
                    shortkey: "Ctrl+Shift+P",
                    path: "/accounting?view=payments",
                    active: true,
                },
                {
                    key: "reports",
                    label: "Go to Reports",
                    shortkey: "Ctrl+Shift+R",
                    path: "/accounting?view=reports",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Accounting Documentation",
                link: "/accounting?docs=true"
            }
        }
    },

    {
        key: "purchase",
        label: "Purchase",
        path: "/purchase",
        icon: btnPurchase,
        active: true,
        badge: 0,
        description: "Handle procurement, vendors, and purchase orders",

        dropdown: {
            shortcut: [
                {
                    key: "orders",
                    label: "Go to Purchase Orders",
                    shortkey: "Ctrl+Shift+O",
                    path: "/purchase?view=orders",
                    active: true,
                },
                {
                    key: "vendors",
                    label: "Go to Vendors",
                    shortkey: "Ctrl+Shift+V",
                    path: "/purchase?view=vendors",
                    active: true,
                },
                {
                    key: "receipts",
                    label: "Go to Receipts",
                    shortkey: "Ctrl+Shift+R",
                    path: "/purchase?view=receipts",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Purchase Documentation",
                link: "/purchase?docs=true"
            }
        }
    },

    {
        key: "crm",
        label: "CRM",
        path: "/crm",
        icon: btnCrm,
        active: true,
        badge: 0,
        description: "Track leads, customers, and sales pipelines",

        dropdown: {
            shortcut: [
                {
                    key: "leads",
                    label: "Go to Leads",
                    shortkey: "Ctrl+Shift+L",
                    path: "/crm?view=leads",
                    active: true,
                },
                {
                    key: "customers",
                    label: "Go to Customers",
                    shortkey: "Ctrl+Shift+C",
                    path: "/crm?view=customers",
                    active: true,
                },
                {
                    key: "pipelines",
                    label: "Go to Pipelines",
                    shortkey: "Ctrl+Shift+P",
                    path: "/crm?view=pipelines",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "CRM Documentation",
                link: "/crm?docs=true"
            }
        }
    },

    {
        key: "configuration",
        label: "Configuration",
        path: "/configuration",
        icon: btnConfiguration,
        active: true,
        badge: 2,
        description: "Configure modules, permissions, and system settings",

        dropdown: {
            shortcut: [
                {
                    key: "modules",
                    label: "Go to Modules",
                    shortkey: "Ctrl+Shift+M",
                    path: "/configuration?view=modules",
                    active: true,
                },
                {
                    key: "roles",
                    label: "Go to Roles",
                    shortkey: "Ctrl+Shift+R",
                    path: "/configuration?view=roles",
                    active: true,
                },
                {
                    key: "preferences",
                    label: "Go to Preferences",
                    shortkey: "Ctrl+Shift+P",
                    path: "/configuration?view=preferences",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Configuration Documentation",
                link: "/configuration?docs=true"
            }
        }
    },

    {
        key: "expenses",
        label: "Expenses",
        path: "/expenses",
        icon: btnExpenses,
        active: true,
        badge: 0,
        description: "Track operational expenses and reimbursement requests",

        dropdown: {
            shortcut: [
                {
                    key: "claims",
                    label: "Go to Claims",
                    shortkey: "Ctrl+Shift+C",
                    path: "/expenses?view=claims",
                    active: true,
                },
                {
                    key: "reports",
                    label: "Go to Reports",
                    shortkey: "Ctrl+Shift+R",
                    path: "/expenses?view=reports",
                    active: true,
                },
                {
                    key: "approvals",
                    label: "Go to Approvals",
                    shortkey: "Ctrl+Shift+A",
                    path: "/expenses?view=approvals",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "Expenses Documentation",
                link: "/expenses?docs=true"
            }
        }
    },

    {
        key: "employees",
        label: "Employees",
        path: "/employees",
        icon: btnEmployees,
        active: true,
        badge: 11,
        description: "Manage employee profiles, attendance, and contracts",

        dropdown: {
            shortcut: [
                {
                    key: "directory",
                    label: "Go to Directory",
                    shortkey: "Ctrl+Shift+D",
                    path: "/employees?view=directory",
                    active: true,
                },
                {
                    key: "attendance",
                    label: "Go to Attendance",
                    shortkey: "Ctrl+Shift+T",
                    path: "/employees?view=attendance",
                    active: true,
                },
                {
                    key: "contracts",
                    label: "Go to Contracts",
                    shortkey: "Ctrl+Shift+C",
                    path: "/employees?view=contracts",
                    active: true,
                },
                {
                    key: "departments",
                    label: "Go to Departments",
                    shortkey: "Ctrl+Shift+P",
                    path: "/employees?view=departments",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Employees Documentation",
                link: "/employees?docs=true"
            }
        }
    },

    {
        key: "members",
        label: "Members",
        path: "/members",
        icon: btnMembers,
        active: true,
        badge: 0,
        description: "Manage member accounts, subscriptions, and activities",

        dropdown: {
            shortcut: [
                {
                    key: "directory",
                    label: "Go to Directory",
                    shortkey: "Ctrl+Shift+D",
                    path: "/members?view=directory",
                    active: true,
                },
                {
                    key: "subscriptions",
                    label: "Go to Subscriptions",
                    shortkey: "Ctrl+Shift+S",
                    path: "/members?view=subscriptions",
                    active: true,
                },
                {
                    key: "activities",
                    label: "Go to Activities",
                    shortkey: "Ctrl+Shift+A",
                    path: "/members?view=activities",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "Members Documentation",
                link: "/members?docs=true"
            }
        }
    },

    {
        key: "pos",
        label: "Point of Sale",
        path: "/pos",
        icon: btnPos,
        active: true,
        badge: 8,
        description: "Handle cashier operations and retail transactions",

        dropdown: {
            shortcut: [
                {
                    key: "sessions",
                    label: "Go to Sessions",
                    shortkey: "Ctrl+Shift+S",
                    path: "/pos?view=sessions",
                    active: true,
                },
                {
                    key: "orders",
                    label: "Go to Orders",
                    shortkey: "Ctrl+Shift+O",
                    path: "/pos?view=orders",
                    active: true,
                },
                {
                    key: "payments",
                    label: "Go to Payments",
                    shortkey: "Ctrl+Shift+P",
                    path: "/pos?view=payments",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Point of Sale Documentation",
                link: "/pos?docs=true"
            }
        }
    },

    {
        key: "sales",
        label: "Sales",
        path: "/sales",
        icon: btnSales,
        active: true,
        badge: 14,
        description: "Manage quotations, orders, and customer sales",

        dropdown: {
            shortcut: [
                {
                    key: "quotations",
                    label: "Go to Quotations",
                    shortkey: "Ctrl+Shift+Q",
                    path: "/sales?view=quotations",
                    active: true,
                },
                {
                    key: "orders",
                    label: "Go to Orders",
                    shortkey: "Ctrl+Shift+O",
                    path: "/sales?view=orders",
                    active: true,
                },
                {
                    key: "customers",
                    label: "Go to Customers",
                    shortkey: "Ctrl+Shift+C",
                    path: "/sales?view=customers",
                    active: true,
                },
                {
                    key: "reports",
                    label: "Go to Reports",
                    shortkey: "Ctrl+Shift+R",
                    path: "/sales?view=reports",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Sales Documentation",
                link: "/sales?docs=true"
            }
        }
    },

    {
        key: "setting",
        label: "Setting",
        path: "/setting",
        icon: btnSetting,
        active: true,
        badge: 0,
        description: "Manage application preferences and personalization",

        dropdown: {
            shortcut: [
                {
                    key: "general",
                    label: "Go to General",
                    shortkey: "Ctrl+Shift+G",
                    path: "/setting?view=general",
                    active: true,
                },
                {
                    key: "appearance",
                    label: "Go to Appearance",
                    shortkey: "Ctrl+Shift+A",
                    path: "/setting?view=appearance",
                    active: true,
                },
                {
                    key: "notifications",
                    label: "Go to Notifications",
                    shortkey: "Ctrl+Shift+N",
                    path: "/setting?view=notifications",
                    active: true,
                },
                {
                    key: "security",
                    label: "Go to Security",
                    shortkey: "Ctrl+Shift+S",
                    path: "/setting?view=security",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "Setting Documentation",
                link: "/setting?docs=true"
            }
        }
    },

    {
        key: "manufacturing",
        label: "Manufacturing",
        path: "/manufacturing",
        icon: btnManufacturing,
        active: true,
        badge: 0,
        description: "Control production orders and manufacturing workflows",

        dropdown: {
            shortcut: [
                {
                    key: "workorders",
                    label: "Go to Work Orders",
                    shortkey: "Ctrl+Shift+W",
                    path: "/manufacturing?view=workorders",
                    active: true,
                },
                {
                    key: "boms",
                    label: "Go to BOMs",
                    shortkey: "Ctrl+Shift+B",
                    path: "/manufacturing?view=boms",
                    active: true,
                },
                {
                    key: "operations",
                    label: "Go to Operations",
                    shortkey: "Ctrl+Shift+O",
                    path: "/manufacturing?view=operations",
                    active: true,
                },
                {
                    key: "planning",
                    label: "Go to Planning",
                    shortkey: "Ctrl+Shift+P",
                    path: "/manufacturing?view=planning",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "Manufacturing Documentation",
                link: "/manufacturing?docs=true"
            }
        }
    },

    {
        key: "project",
        label: "Project",
        path: "/project",
        icon: btnProject,
        active: true,
        badge: 5,
        description: "Organize projects, tasks, and collaboration workflows",

        dropdown: {
            shortcut: [
                {
                    key: "tasks",
                    label: "Go to Tasks",
                    shortkey: "Ctrl+Shift+T",
                    path: "/project?view=tasks",
                    active: true,
                },
                {
                    key: "boards",
                    label: "Go to Boards",
                    shortkey: "Ctrl+Shift+B",
                    path: "/project?view=boards",
                    active: true,
                },
                {
                    key: "members",
                    label: "Go to Members",
                    shortkey: "Ctrl+Shift+M",
                    path: "/project?view=members",
                    active: true,
                },
                {
                    key: "timeline",
                    label: "Go to Timeline",
                    shortkey: "Ctrl+Shift+L",
                    path: "/project?view=timeline",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Project Documentation",
                link: "/project?docs=true"
            }
        }
    },

    {
        key: "timesheet",
        label: "Timesheet",
        path: "/timesheet",
        icon: btnTimesheet,
        active: true,
        badge: 0,
        description: "Track working hours, attendance, and time reports",

        dropdown: {
            shortcut: [
                {
                    key: "entries",
                    label: "Go to Entries",
                    shortkey: "Ctrl+Shift+E",
                    path: "/timesheet?view=entries",
                    active: true,
                },
                {
                    key: "approvals",
                    label: "Go to Approvals",
                    shortkey: "Ctrl+Shift+A",
                    path: "/timesheet?view=approvals",
                    active: true,
                },
                {
                    key: "reports",
                    label: "Go to Reports",
                    shortkey: "Ctrl+Shift+R",
                    path: "/timesheet?view=reports",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "Timesheet Documentation",
                link: "/timesheet?docs=true"
            }
        }
    },

    {
        key: "helpdesk",
        label: "Helpdesk",
        path: "/helpdesk",
        icon: btnHelpdesk,
        active: true,
        badge: 17,
        description: "Manage support tickets, customer issues, and resolutions",

        dropdown: {
            shortcut: [
                {
                    key: "tickets",
                    label: "Go to Tickets",
                    shortkey: "Ctrl+Shift+T",
                    path: "/helpdesk?view=tickets",
                    active: true,
                },
                {
                    key: "customers",
                    label: "Go to Customers",
                    shortkey: "Ctrl+Shift+C",
                    path: "/helpdesk?view=customers",
                    active: true,
                },
                {
                    key: "sla",
                    label: "Go to SLA",
                    shortkey: "Ctrl+Shift+S",
                    path: "/helpdesk?view=sla",
                    active: true,
                },
                {
                    key: "reports",
                    label: "Go to Reports",
                    shortkey: "Ctrl+Shift+R",
                    path: "/helpdesk?view=reports",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Helpdesk Documentation",
                link: "/helpdesk?docs=true"
            }
        }
    },

    {
        key: "marketing",
        label: "Marketing",
        path: "/marketing",
        icon: btnMarketing,
        active: true,
        badge: 4,
        description: "Manage campaigns, promotions, and audience engagement",

        dropdown: {
            shortcut: [
                {
                    key: "campaigns",
                    label: "Go to Campaigns",
                    shortkey: "Ctrl+Shift+C",
                    path: "/marketing?view=campaigns",
                    active: true,
                },
                {
                    key: "audiences",
                    label: "Go to Audiences",
                    shortkey: "Ctrl+Shift+A",
                    path: "/marketing?view=audiences",
                    active: true,
                },
                {
                    key: "emails",
                    label: "Go to Email Marketing",
                    shortkey: "Ctrl+Shift+E",
                    path: "/marketing?view=emails",
                    active: true,
                },
                {
                    key: "reports",
                    label: "Go to Reports",
                    shortkey: "Ctrl+Shift+R",
                    path: "/marketing?view=reports",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Marketing Documentation",
                link: "/marketing?docs=true"
            }
        }
    },

    {
        key: "website",
        label: "Website",
        path: "/website",
        icon: btnWebsite,
        active: true,
        badge: 0,
        description: "Build and manage website pages and content",

        dropdown: {
            shortcut: [
                {
                    key: "pages",
                    label: "Go to Pages",
                    shortkey: "Ctrl+Shift+P",
                    path: "/website?view=pages",
                    active: true,
                },
                {
                    key: "themes",
                    label: "Go to Themes",
                    shortkey: "Ctrl+Shift+T",
                    path: "/website?view=themes",
                    active: true,
                },
                {
                    key: "media",
                    label: "Go to Media Library",
                    shortkey: "Ctrl+Shift+M",
                    path: "/website?view=media",
                    active: true,
                },
                {
                    key: "seo",
                    label: "Go to SEO",
                    shortkey: "Ctrl+Shift+S",
                    path: "/website?view=seo",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "Website Documentation",
                link: "/website?docs=true"
            }
        }
    },

    {
        key: "ecommerce",
        label: "E-Commerce",
        path: "/ecommerce",
        icon: btnEcommerce,
        active: true,
        badge: 13,
        description: "Manage online store products, orders, and payments",

        dropdown: {
            shortcut: [
                {
                    key: "products",
                    label: "Go to Products",
                    shortkey: "Ctrl+Shift+P",
                    path: "/ecommerce?view=products",
                    active: true,
                },
                {
                    key: "orders",
                    label: "Go to Orders",
                    shortkey: "Ctrl+Shift+O",
                    path: "/ecommerce?view=orders",
                    active: true,
                },
                {
                    key: "customers",
                    label: "Go to Customers",
                    shortkey: "Ctrl+Shift+C",
                    path: "/ecommerce?view=customers",
                    active: true,
                },
                {
                    key: "payments",
                    label: "Go to Payments",
                    shortkey: "Ctrl+Shift+M",
                    path: "/ecommerce?view=payments",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "E-Commerce Documentation",
                link: "/ecommerce?docs=true"
            }
        }
    },

    {
        key: "quality",
        label: "Quality",
        path: "/quality",
        icon: btnQuality,
        active: true,
        badge: 0,
        description: "Monitor inspections, quality checks, and compliance",

        dropdown: {
            shortcut: [
                {
                    key: "checks",
                    label: "Go to Quality Checks",
                    shortkey: "Ctrl+Shift+Q",
                    path: "/quality?view=checks",
                    active: true,
                },
                {
                    key: "inspections",
                    label: "Go to Inspections",
                    shortkey: "Ctrl+Shift+I",
                    path: "/quality?view=inspections",
                    active: true,
                },
                {
                    key: "alerts",
                    label: "Go to Alerts",
                    shortkey: "Ctrl+Shift+A",
                    path: "/quality?view=alerts",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "Quality Documentation",
                link: "/quality?docs=true"
            }
        }
    },

    {
        key: "maintenance",
        label: "Maintenance",
        path: "/maintenance",
        icon: btnMaintenance,
        active: true,
        badge: 1,
        description: "Schedule equipment maintenance and service operations",

        dropdown: {
            shortcut: [
                {
                    key: "requests",
                    label: "Go to Requests",
                    shortkey: "Ctrl+Shift+R",
                    path: "/maintenance?view=requests",
                    active: true,
                },
                {
                    key: "equipment",
                    label: "Go to Equipment",
                    shortkey: "Ctrl+Shift+E",
                    path: "/maintenance?view=equipment",
                    active: true,
                },
                {
                    key: "calendar",
                    label: "Go to Maintenance Calendar",
                    shortkey: "Ctrl+Shift+C",
                    path: "/maintenance?view=calendar",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Maintenance Documentation",
                link: "/maintenance?docs=true"
            }
        }
    },

    {
        key: "fleet",
        label: "Fleet",
        path: "/fleet",
        icon: btnFleet,
        active: true,
        badge: 0,
        description: "Manage vehicles, drivers, and transportation operations",

        dropdown: {
            shortcut: [
                {
                    key: "vehicles",
                    label: "Go to Vehicles",
                    shortkey: "Ctrl+Shift+V",
                    path: "/fleet?view=vehicles",
                    active: true,
                },
                {
                    key: "drivers",
                    label: "Go to Drivers",
                    shortkey: "Ctrl+Shift+D",
                    path: "/fleet?view=drivers",
                    active: true,
                },
                {
                    key: "services",
                    label: "Go to Services",
                    shortkey: "Ctrl+Shift+S",
                    path: "/fleet?view=services",
                    active: true,
                },
                {
                    key: "routes",
                    label: "Go to Routes",
                    shortkey: "Ctrl+Shift+R",
                    path: "/fleet?view=routes",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "Fleet Documentation",
                link: "/fleet?docs=true"
            }
        }
    },

    {
        key: "recruitment",
        label: "Recruitment",
        path: "/recruitment",
        icon: btnRecruitment,
        active: true,
        badge: 7,
        description: "Manage job vacancies, candidates, and hiring processes",

        dropdown: {
            shortcut: [
                {
                    key: "vacancies",
                    label: "Go to Vacancies",
                    shortkey: "Ctrl+Shift+V",
                    path: "/recruitment?view=vacancies",
                    active: true,
                },
                {
                    key: "candidates",
                    label: "Go to Candidates",
                    shortkey: "Ctrl+Shift+C",
                    path: "/recruitment?view=candidates",
                    active: true,
                },
                {
                    key: "interviews",
                    label: "Go to Interviews",
                    shortkey: "Ctrl+Shift+I",
                    path: "/recruitment?view=interviews",
                    active: true,
                },
                {
                    key: "offers",
                    label: "Go to Offers",
                    shortkey: "Ctrl+Shift+O",
                    path: "/recruitment?view=offers",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Recruitment Documentation",
                link: "/recruitment?docs=true"
            }
        }
    },

    {
        key: "documents",
        label: "Documents",
        path: "/documents",
        icon: btnDocument,
        active: true,
        badge: 0,
        description: "Store, organize, and manage digital documents",

        dropdown: {
            shortcut: [
                {
                    key: "files",
                    label: "Go to Files",
                    shortkey: "Ctrl+Shift+F",
                    path: "/documents?view=files",
                    active: true,
                },
                {
                    key: "folders",
                    label: "Go to Folders",
                    shortkey: "Ctrl+Shift+O",
                    path: "/documents?view=folders",
                    active: true,
                },
                {
                    key: "shared",
                    label: "Go to Shared Documents",
                    shortkey: "Ctrl+Shift+S",
                    path: "/documents?view=shared",
                    active: true,
                },
                {
                    key: "archives",
                    label: "Go to Archives",
                    shortkey: "Ctrl+Shift+A",
                    path: "/documents?view=archives",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: false,
                    active: true,
                },
            ],

            documentation: {
                label: "Documents Documentation",
                link: "/documents?docs=true"
            }
        }
    },

    {
        key: "calendar",
        label: "Calendar",
        path: "/calendar",
        icon: btnCalendar,
        active: true,
        badge: 12,
        description: "Manage schedules, meetings, and event planning",

        dropdown: {
            shortcut: [
                {
                    key: "events",
                    label: "Go to Events",
                    shortkey: "Ctrl+Shift+E",
                    path: "/calendar?view=events",
                    active: true,
                },
                {
                    key: "meetings",
                    label: "Go to Meetings",
                    shortkey: "Ctrl+Shift+M",
                    path: "/calendar?view=meetings",
                    active: true,
                },
                {
                    key: "deadlines",
                    label: "Go to Deadlines",
                    shortkey: "Ctrl+Shift+D",
                    path: "/calendar?view=deadlines",
                    active: true,
                },
                {
                    key: "reminders",
                    label: "Go to Reminders",
                    shortkey: "Ctrl+Shift+R",
                    path: "/calendar?view=reminders",
                    active: true,
                }
            ],

            appearance: [
                {
                    key: "showDescription",
                    label: "Show Description",
                    checked: true,
                    active: true,
                },

                {
                    key: "showBadge",
                    label: "Show Badge",
                    checked: true,
                    active: true,
                },
            ],

            documentation: {
                label: "Calendar Documentation",
                link: "/calendar?docs=true"
            }
        }
    },
]