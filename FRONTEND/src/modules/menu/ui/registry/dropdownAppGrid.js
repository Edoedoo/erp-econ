export const dropdownInventory = {
    key: "inventory",
    shortcut: [
        {
            key: "products",
            label: "Go to Products",
            shortkey: "Ctrl+Shift+P",
            path: "/inventory",
            vtDefault: "kanban",
            active: true,
        },
        {
            key: "stocks",
            label: "Go to Stocks",
            shortkey: "Ctrl+Shift+S",
            path: "/inventory",
            vtDefault: "list",
            active: true,
        },
        {
            key: "movements",
            label: "Go to Movements",
            shortkey: "Ctrl+Shift+M",
            path: "/inventory",
            vtDefault: "list",
            active: true,
        },
        {
            key: "warehouse",
            label: "Go to Warehouse",
            shortkey: "Ctrl+Shift+W",
            path: "/inventory",
            vtDefault: "list",
            active: true,
        },
        {
            key: "reports",
            label: "Go to Reports",
            shortkey: "Ctrl+Shift+R",
            path: "/inventory",
            vtDefault: "list",
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

export const dropdownDashboard = {
    key: "dashboard",
    shortcut: [
        {
            key: "overview",
            label: "Go to Overview",
            shortkey: "Ctrl+Shift+O",
            path: "/dashboard",
            active: true,
        },
        {
            key: "analytics",
            label: "Go to Analytics",
            shortkey: "Ctrl+Shift+A",
            path: "/dashboard",
            active: true,
        },
        {
            key: "reports",
            label: "Go to Reports",
            shortkey: "Ctrl+Shift+R",
            path: "/dashboard",
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
        path: "/dashboard",
        keyModule: "dashboard",
    }
}

export const dropdownAccounting = {
    key: "accounting",
    shortcut: [
        {
            key: "invoices",
            label: "Go to Invoices",
            shortkey: "Ctrl+Shift+I",
            path: "/accounting",
            active: true,
        },
        {
            key: "journals",
            label: "Go to Journals",
            shortkey: "Ctrl+Shift+J",
            path: "/accounting",
            active: true,
        },
        {
            key: "payments",
            label: "Go to Payments",
            shortkey: "Ctrl+Shift+P",
            path: "/accounting",
            active: true,
        },
        {
            key: "reports",
            label: "Go to Reports",
            shortkey: "Ctrl+Shift+R",
            path: "/accounting",
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
        path: "/accounting",
        keyModule: "accounting"
    }
}

export const dropdownPurchase = {
    key: "purchase",
    shortcut: [
        {
            key: "orders",
            label: "Go to Purchase Orders",
            shortkey: "Ctrl+Shift+O",
            path: "/purchase",
            active: true,
        },
        {
            key: "vendors",
            label: "Go to Vendors",
            shortkey: "Ctrl+Shift+V",
            path: "/purchase",
            active: true,
        },
        {
            key: "receipts",
            label: "Go to Receipts",
            shortkey: "Ctrl+Shift+R",
            path: "/purchase",
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
        path: "/purchase",
        keyModule: "purchase"
    }
}

export const dropdownCrm = {
    key: "crm",
    shortcut: [
        {
            key: "leads",
            label: "Go to Leads",
            shortkey: "Ctrl+Shift+L",
            path: "/crm",
            active: true,
        },
        {
            key: "customers",
            label: "Go to Customers",
            shortkey: "Ctrl+Shift+C",
            path: "/crm",
            active: true,
        },
        {
            key: "pipelines",
            label: "Go to Pipelines",
            shortkey: "Ctrl+Shift+P",
            path: "/crm",
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
        path: "/crm",
        keyModule: "crm",
    }
}

export const dropdownConfiguration = {
    key: "configuration",
    shortcut: [
        {
            key: "modules",
            label: "Go to Modules",
            shortkey: "Ctrl+Shift+M",
            path: "/configuration",
            active: true,
        },
        {
            key: "roles",
            label: "Go to Roles",
            shortkey: "Ctrl+Shift+R",
            path: "/configuration",
            active: true,
        },
        {
            key: "preferences",
            label: "Go to Preferences",
            shortkey: "Ctrl+Shift+P",
            path: "/configuration",
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
        path: "/configuration",
        keyModule: "configuration",
    }
}

export const dropdownExpenses = {
    key: "expenses",
    shortcut: [
        {
            key: "claims",
            label: "Go to Claims",
            shortkey: "Ctrl+Shift+C",
            path: "/expenses",
            active: true,
        },
        {
            key: "reports",
            label: "Go to Reports",
            shortkey: "Ctrl+Shift+R",
            path: "/expenses",
            active: true,
        },
        {
            key: "approvals",
            label: "Go to Approvals",
            shortkey: "Ctrl+Shift+A",
            path: "/expenses",
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
        path: "/expenses",
        keyModule: "expenses"
    }
}

export const dropdownEmployees = {
    key: "employees",
    shortcut: [
        {
            key: "directory",
            label: "Go to Directory",
            shortkey: "Ctrl+Shift+D",
            path: "/employees",
            active: true,
        },
        {
            key: "attendance",
            label: "Go to Attendance",
            shortkey: "Ctrl+Shift+T",
            path: "/employees",
            active: true,
        },
        {
            key: "contracts",
            label: "Go to Contracts",
            shortkey: "Ctrl+Shift+C",
            path: "/employees",
            active: true,
        },
        {
            key: "departments",
            label: "Go to Departments",
            shortkey: "Ctrl+Shift+P",
            path: "/employees",
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
        path: "/employees",
        keyModule: "employees"
    }


}

export const dropdownMembers = {
    key: "members",


    shortcut: [
        {
            key: "directory",
            label: "Go to Directory",
            shortkey: "Ctrl+Shift+D",
            path: "/members",
            active: true,
        },
        {
            key: "subscriptions",
            label: "Go to Subscriptions",
            shortkey: "Ctrl+Shift+S",
            path: "/members",
            active: true,
        },
        {
            key: "activities",
            label: "Go to Activities",
            shortkey: "Ctrl+Shift+A",
            path: "/members",
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
        path: "/members",
        keyModule: "members"
    }


}

export const dropdownPos = {
    key: "pos",


    shortcut: [
        {
            key: "sessions",
            label: "Go to Sessions",
            shortkey: "Ctrl+Shift+S",
            path: "/pos",
            active: true,
        },
        {
            key: "orders",
            label: "Go to Orders",
            shortkey: "Ctrl+Shift+O",
            path: "/pos",
            active: true,
        },
        {
            key: "payments",
            label: "Go to Payments",
            shortkey: "Ctrl+Shift+P",
            path: "/pos",
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
        path: "/pos",
        keyModule: "pos"
    }


}

export const dropdownSales = {
    key: "sales",


    shortcut: [
        {
            key: "quotations",
            label: "Go to Quotations",
            shortkey: "Ctrl+Shift+Q",
            path: "/sales",
            active: true,
        },
        {
            key: "orders",
            label: "Go to Orders",
            shortkey: "Ctrl+Shift+O",
            path: "/sales",
            active: true,
        },
        {
            key: "customers",
            label: "Go to Customers",
            shortkey: "Ctrl+Shift+C",
            path: "/sales",
            active: true,
        },
        {
            key: "reports",
            label: "Go to Reports",
            shortkey: "Ctrl+Shift+R",
            path: "/sales",
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
        path: "/sales",
        keyModule: "sales"
    }


}

export const dropdownSetting = {
    key: "setting",


    shortcut: [
        {
            key: "general",
            label: "Go to General",
            shortkey: "Ctrl+Shift+G",
            path: "/setting",
            active: true,
        },
        {
            key: "appearance",
            label: "Go to Appearance",
            shortkey: "Ctrl+Shift+A",
            path: "/setting",
            active: true,
        },
        {
            key: "notifications",
            label: "Go to Notifications",
            shortkey: "Ctrl+Shift+N",
            path: "/setting",
            active: true,
        },
        {
            key: "security",
            label: "Go to Security",
            shortkey: "Ctrl+Shift+S",
            path: "/setting",
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
        path: "/setting",
        keyModule: "setting"
    }


}

export const dropdownManufacturing = {
    key: "manufacturing",


    shortcut: [
        {
            key: "workorders",
            label: "Go to Work Orders",
            shortkey: "Ctrl+Shift+W",
            path: "/manufacturing",
            active: true,
        },
        {
            key: "boms",
            label: "Go to BOMs",
            shortkey: "Ctrl+Shift+B",
            path: "/manufacturing",
            active: true,
        },
        {
            key: "operations",
            label: "Go to Operations",
            shortkey: "Ctrl+Shift+O",
            path: "/manufacturing",
            active: true,
        },
        {
            key: "planning",
            label: "Go to Planning",
            shortkey: "Ctrl+Shift+P",
            path: "/manufacturing",
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
        path: "/manufacturing",
        keyModule: "manufacturing"
    }


}

export const dropdownProject = {
    key: "project",


    shortcut: [
        {
            key: "tasks",
            label: "Go to Tasks",
            shortkey: "Ctrl+Shift+T",
            path: "/project",
            active: true,
        },
        {
            key: "boards",
            label: "Go to Boards",
            shortkey: "Ctrl+Shift+B",
            path: "/project",
            active: true,
        },
        {
            key: "members",
            label: "Go to Members",
            shortkey: "Ctrl+Shift+M",
            path: "/project",
            active: true,
        },
        {
            key: "timeline",
            label: "Go to Timeline",
            shortkey: "Ctrl+Shift+L",
            path: "/project",
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
        path: "/project",
        keyModule: "project"
    }


}

export const dropdownTimesheet = {
    key: "timesheet",


    shortcut: [
        {
            key: "entries",
            label: "Go to Entries",
            shortkey: "Ctrl+Shift+E",
            path: "/timesheet",
            active: true,
        },
        {
            key: "approvals",
            label: "Go to Approvals",
            shortkey: "Ctrl+Shift+A",
            path: "/timesheet",
            active: true,
        },
        {
            key: "reports",
            label: "Go to Reports",
            shortkey: "Ctrl+Shift+R",
            path: "/timesheet",
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
        path: "/timesheet",
        keyModule: "timesheet"
    }


}

export const dropdownHelpdesk = {
    key: "helpdesk",


    shortcut: [
        {
            key: "tickets",
            label: "Go to Tickets",
            shortkey: "Ctrl+Shift+T",
            path: "/helpdesk",
            active: true,
        },
        {
            key: "customers",
            label: "Go to Customers",
            shortkey: "Ctrl+Shift+C",
            path: "/helpdesk",
            active: true,
        },
        {
            key: "sla",
            label: "Go to SLA",
            shortkey: "Ctrl+Shift+S",
            path: "/helpdesk",
            active: true,
        },
        {
            key: "reports",
            label: "Go to Reports",
            shortkey: "Ctrl+Shift+R",
            path: "/helpdesk",
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
        path: "/helpdesk",
        keyModule: "helpdesk"
    }


}

export const dropdownMarketing = {
    key: "marketing",


    shortcut: [
        {
            key: "campaigns",
            label: "Go to Campaigns",
            shortkey: "Ctrl+Shift+C",
            path: "/marketing",
            active: true,
        },
        {
            key: "audiences",
            label: "Go to Audiences",
            shortkey: "Ctrl+Shift+A",
            path: "/marketing",
            active: true,
        },
        {
            key: "emails",
            label: "Go to Email Marketing",
            shortkey: "Ctrl+Shift+E",
            path: "/marketing",
            active: true,
        },
        {
            key: "reports",
            label: "Go to Reports",
            shortkey: "Ctrl+Shift+R",
            path: "/marketing",
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
        path: "/marketing",
        keyModule: "marketing"
    }


}

export const dropdownWebsite = {
    key: "website",


    shortcut: [
        {
            key: "pages",
            label: "Go to Pages",
            shortkey: "Ctrl+Shift+P",
            path: "/website",
            active: true,
        },
        {
            key: "themes",
            label: "Go to Themes",
            shortkey: "Ctrl+Shift+T",
            path: "/website",
            active: true,
        },
        {
            key: "media",
            label: "Go to Media Library",
            shortkey: "Ctrl+Shift+M",
            path: "/website",
            active: true,
        },
        {
            key: "seo",
            label: "Go to SEO",
            shortkey: "Ctrl+Shift+S",
            path: "/website",
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
        path: "/website",
        keyModule: "website"
    }


}

export const dropdownEcommerce = {
    key: "ecommerce",


    shortcut: [
        {
            key: "products",
            label: "Go to Products",
            shortkey: "Ctrl+Shift+P",
            path: "/ecommerce",
            active: true,
        },
        {
            key: "orders",
            label: "Go to Orders",
            shortkey: "Ctrl+Shift+O",
            path: "/ecommerce",
            active: true,
        },
        {
            key: "customers",
            label: "Go to Customers",
            shortkey: "Ctrl+Shift+C",
            path: "/ecommerce",
            active: true,
        },
        {
            key: "payments",
            label: "Go to Payments",
            shortkey: "Ctrl+Shift+M",
            path: "/ecommerce",
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
        path: "/ecommerce",
        keyModule: "ecommerce"
    }


}

export const dropdownQuality = {
    key: "quality",


    shortcut: [
        {
            key: "checks",
            label: "Go to Quality Checks",
            shortkey: "Ctrl+Shift+Q",
            path: "/quality",
            active: true,
        },
        {
            key: "inspections",
            label: "Go to Inspections",
            shortkey: "Ctrl+Shift+I",
            path: "/quality",
            active: true,
        },
        {
            key: "alerts",
            label: "Go to Alerts",
            shortkey: "Ctrl+Shift+A",
            path: "/quality",
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
        path: "/quality",
        keyModule: "quality"
    }


}

export const dropdownMaintenance = {
    key: "maintenance",


    shortcut: [
        {
            key: "requests",
            label: "Go to Requests",
            shortkey: "Ctrl+Shift+R",
            path: "/maintenance",
            active: true,
        },
        {
            key: "equipment",
            label: "Go to Equipment",
            shortkey: "Ctrl+Shift+E",
            path: "/maintenance",
            active: true,
        },
        {
            key: "calendar",
            label: "Go to Maintenance Calendar",
            shortkey: "Ctrl+Shift+C",
            path: "/maintenance",
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
        path: "/maintenance",
        keyModule: "maintenance"
    }


}

export const dropdownFleet = {
    key: "fleet",


    shortcut: [
        {
            key: "vehicles",
            label: "Go to Vehicles",
            shortkey: "Ctrl+Shift+V",
            path: "/fleet",
            active: true,
        },
        {
            key: "drivers",
            label: "Go to Drivers",
            shortkey: "Ctrl+Shift+D",
            path: "/fleet",
            active: true,
        },
        {
            key: "services",
            label: "Go to Services",
            shortkey: "Ctrl+Shift+S",
            path: "/fleet",
            active: true,
        },
        {
            key: "routes",
            label: "Go to Routes",
            shortkey: "Ctrl+Shift+R",
            path: "/fleet",
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
        path: "/fleet",
        keyModule: "fleet"
    }


}

export const dropdownRecruitment = {
    key: "recruitment",


    shortcut: [
        {
            key: "vacancies",
            label: "Go to Vacancies",
            shortkey: "Ctrl+Shift+V",
            path: "/recruitment",
            active: true,
        },
        {
            key: "candidates",
            label: "Go to Candidates",
            shortkey: "Ctrl+Shift+C",
            path: "/recruitment",
            active: true,
        },
        {
            key: "interviews",
            label: "Go to Interviews",
            shortkey: "Ctrl+Shift+I",
            path: "/recruitment",
            active: true,
        },
        {
            key: "offers",
            label: "Go to Offers",
            shortkey: "Ctrl+Shift+O",
            path: "/recruitment",
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
        path: "/recruitment",
        keyModule: "recruitment"
    }


}

export const dropdownDocuments = {
    key: "documents",


    shortcut: [
        {
            key: "files",
            label: "Go to Files",
            shortkey: "Ctrl+Shift+F",
            path: "/documents",
            active: true,
        },
        {
            key: "folders",
            label: "Go to Folders",
            shortkey: "Ctrl+Shift+O",
            path: "/documents",
            active: true,
        },
        {
            key: "shared",
            label: "Go to Shared Documents",
            shortkey: "Ctrl+Shift+S",
            path: "/documents",
            active: true,
        },
        {
            key: "archives",
            label: "Go to Archives",
            shortkey: "Ctrl+Shift+A",
            path: "/documents",
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
        path: "/documents",
        keyModule: "documents"
    }


}

export const dropdownCalendar = {
    key: "calendar",


    shortcut: [
        {
            key: "events",
            label: "Go to Events",
            shortkey: "Ctrl+Shift+E",
            path: "/calendar",
            active: true,
        },
        {
            key: "meetings",
            label: "Go to Meetings",
            shortkey: "Ctrl+Shift+M",
            path: "/calendar",
            active: true,
        },
        {
            key: "deadlines",
            label: "Go to Deadlines",
            shortkey: "Ctrl+Shift+D",
            path: "/calendar",
            active: true,
        },
        {
            key: "reminders",
            label: "Go to Reminders",
            shortkey: "Ctrl+Shift+R",
            path: "/calendar",
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
        path: "/calendar",
        keyModule: "calendar"
    }


}
