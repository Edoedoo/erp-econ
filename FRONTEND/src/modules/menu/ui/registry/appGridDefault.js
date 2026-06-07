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

import {
    dropdownAccounting,
    dropdownCalendar,
    dropdownConfiguration,
    dropdownCrm,
    dropdownDashboard,
    dropdownDocuments,
    dropdownEcommerce,
    dropdownEmployees,
    dropdownExpenses,
    dropdownFleet,
    dropdownHelpdesk,
    dropdownInventory,
    dropdownMaintenance,
    dropdownManufacturing,
    dropdownMarketing,
    dropdownMembers,
    dropdownPos,
    dropdownProject,
    dropdownPurchase,
    dropdownQuality,
    dropdownRecruitment,
    dropdownSales,
    dropdownSetting,
    dropdownTimesheet,
    dropdownWebsite
} from "./dropdownAppGrid"


export const appGridDefault = [
    {
        key: "inventory",
        identity: {
            key: "inventory",
            active: true,
            path: "/inventory",
            icon: iconInventory,
        },
        action: {
            key: "inventory",
        },
        content: {
            key: "inventory",
            key: "inventory",
            label: "Inventory",
            description: "Manage products, stock, and warehouse operations",
        },
        realtime: {
            key: "inventory",
            badge: 4,
        },
        dropdown: dropdownInventory
    },

    {
        key: "dashboard",
        identity: {
            key: "dashboard",
            active: true,
            path: "/dashboard",
            icon: btnDashboard,
        },

        action: {
            key: "dashboard",
        },

        content: {
            key: "dashboard",
            label: "Dashboard",
            description: "Overview analytics, activity, and business performance",
        },

        realtime: {
            key: "dashboard",
            badge: 20,
        },

        dropdown: dropdownDashboard
    },

    {
        key: "accounting",
        identity: {
            key: "accounting",
            path: "/accounting",
            icon: btnAccounting,
            active: true,
        },
        action: {
            key: "accounting",
        },
        content: {
            key: "accounting",
            label: "Accounting",
            description: "Manage invoices, journals, and financial reports",
        },
        realtime: {
            key: "accounting",
            badge: 6,
        },
        dropdown: dropdownAccounting
    },

    {
        key: "purchase",
        identity: {
            key: "purchase",
            path: "/purchase",
            icon: btnPurchase,
            active: true,
        },
        action: {
            key: "purchase",
        },
        content: {
            key: "purchase",
            label: "Purchase",
            description: "Handle procurement, vendors, and purchase orders",
        },
        realtime: {
            key: "purchase",
            badge: 0,
        },
        dropdown: dropdownPurchase
    },

    {
        key: "crm",
        identity: {
            key: "crm",
            path: "/crm",
            icon: btnCrm,
            active: true,

        },
        realtime: {
            key: "crm",
            badge: 0,

        },
        content: {
            key: "crm",
            label: "CRM",
            description: "Track leads, customers, and sales pipelines",

        },
        action: {
            key: "crm",

        },
        dropdown: dropdownCrm

    },

    {
        key: "configuration",
        identity: {
            key: "configuration",
            path: "/configuration",
            icon: btnConfiguration,
            active: true,

        },
        realtime: {
            key: "configuration",
            badge: 2,

        },
        content: {
            key: "configuration",
            label: "Configuration",
            description: "Configure modules, permissions, and system settings",

        },
        action: {
            key: "configuration",

        },
        dropdown: dropdownConfiguration
    },

    {
        key: "expenses",

        identity: {
            key: "expenses",
            active: true,
            path: "/expenses",
            icon: btnExpenses,

        },
        action: {
            key: "expenses",

        },
        content: {
            key: "expenses",
            label: "Expenses",
            description: "Track operational expenses and reimbursement requests",

        },
        realtime: {
            key: "expenses",
            badge: 0,

        },
        dropdown: dropdownExpenses
    },

    {
        key: "employees",

        identity: {
            key: "employees",
            active: true,
            path: "/employees",
            icon: btnEmployees,
        },

        action: {
            key: "employees",
        },

        content: {
            key: "employees",
            label: "Employees",
            description: "Manage employee profiles, attendance, and contracts",
        },

        realtime: {
            key: "employees",
            badge: 11,
        },

        dropdown: dropdownEmployees,
    },

    {
        key: "members",

        identity: {
            key: "members",
            active: true,
            path: "/members",
            icon: btnMembers,
        },

        action: {
            key: "members",
        },

        content: {
            key: "members",
            label: "Members",
            description: "Manage member accounts, subscriptions, and activities",
        },

        realtime: {
            key: "members",
            badge: 0,
        },

        dropdown: dropdownMembers,
    },

    {
        key: "pos",

        identity: {
            key: "pos",
            active: true,
            path: "/pos",
            icon: btnPos,
        },

        action: {
            key: "pos",
        },

        content: {
            key: "pos",
            label: "Point of Sale",
            description: "Handle cashier operations and retail transactions",
        },

        realtime: {
            key: "pos",
            badge: 8,
        },

        dropdown: dropdownPos,
    },

    {
        key: "sales",

        identity: {
            key: "sales",
            active: true,
            path: "/sales",
            icon: btnSales,
        },

        action: {
            key: "sales",
        },

        content: {
            key: "sales",
            label: "Sales",
            description: "Manage quotations, orders, and customer sales",
        },

        realtime: {
            key: "sales",
            badge: 14,
        },

        dropdown: dropdownSales,
    },

    {
        key: "setting",

        identity: {
            key: "setting",
            active: true,
            path: "/setting",
            icon: btnSetting,
        },

        action: {
            key: "setting",
        },

        content: {
            key: "setting",
            label: "Setting",
            description: "Manage application preferences and personalization",
        },

        realtime: {
            key: "setting",
            badge: 0,
        },

        dropdown: dropdownSetting,
    },

    {
        key: "manufacturing",

        identity: {
            key: "manufacturing",
            active: true,
            path: "/manufacturing",
            icon: btnManufacturing,
        },

        action: {
            key: "manufacturing",
        },

        content: {
            key: "manufacturing",
            label: "Manufacturing",
            description: "Control production orders and manufacturing workflows",
        },

        realtime: {
            key: "manufacturing",
            badge: 0,
        },

        dropdown: dropdownManufacturing,
    },

    {
        key: "project",

        identity: {
            key: "project",
            active: true,
            path: "/project",
            icon: btnProject,
        },

        action: {
            key: "project",
        },

        content: {
            key: "project",
            label: "Project",
            description: "Organize projects, tasks, and collaboration workflows",
        },

        realtime: {
            key: "project",
            badge: 5,
        },

        dropdown: dropdownProject,
    },

    {
        key: "timesheet",

        identity: {
            key: "timesheet",
            active: true,
            path: "/timesheet",
            icon: btnTimesheet,
        },

        action: {
            key: "timesheet",
        },

        content: {
            key: "timesheet",
            label: "Timesheet",
            description: "Track working hours, attendance, and time reports",
        },

        realtime: {
            key: "timesheet",
            badge: 0,
        },

        dropdown: dropdownTimesheet,
    },

    {
        key: "helpdesk",

        identity: {
            key: "helpdesk",
            active: true,
            path: "/helpdesk",
            icon: btnHelpdesk,
        },

        action: {
            key: "helpdesk",
        },

        content: {
            key: "helpdesk",
            label: "Helpdesk",
            description: "Manage support tickets, customer issues, and resolutions",
        },

        realtime: {
            key: "helpdesk",
            badge: 17,
        },

        dropdown: dropdownHelpdesk,
    },

    {
        key: "marketing",

        identity: {
            key: "marketing",
            active: true,
            path: "/marketing",
            icon: btnMarketing,
        },

        action: {
            key: "marketing",
        },

        content: {
            key: "marketing",
            label: "Marketing",
            description: "Manage campaigns, promotions, and audience engagement",
        },

        realtime: {
            key: "marketing",
            badge: 4,
        },

        dropdown: dropdownMarketing,
    },

    {
        key: "website",

        identity: {
            key: "website",
            active: true,
            path: "/website",
            icon: btnWebsite,
        },

        action: {
            key: "website",
        },

        content: {
            key: "website",
            label: "Website",
            description: "Build and manage website pages and content",
        },

        realtime: {
            key: "website",
            badge: 0,
        },

        dropdown: dropdownWebsite,
    },

    {
        key: "ecommerce",

        identity: {
            key: "ecommerce",
            active: true,
            path: "/ecommerce",
            icon: btnEcommerce,
        },

        action: {
            key: "ecommerce",
        },

        content: {
            key: "ecommerce",
            label: "E-Commerce",
            description: "Manage online store products, orders, and payments",
        },

        realtime: {
            key: "ecommerce",
            badge: 13,
        },

        dropdown: dropdownEcommerce,
    },

    {
        key: "quality",

        identity: {
            key: "quality",
            active: true,
            path: "/quality",
            icon: btnQuality,
        },

        action: {
            key: "quality",
        },

        content: {
            key: "quality",
            label: "Quality",
            description: "Monitor inspections, quality checks, and compliance",
        },

        realtime: {
            key: "quality",
            badge: 0,
        },

        dropdown: dropdownQuality,
    },

    {
        key: "maintenance",

        identity: {
            key: "maintenance",
            active: true,
            path: "/maintenance",
            icon: btnMaintenance,
        },

        action: {
            key: "maintenance",
        },

        content: {
            key: "maintenance",
            label: "Maintenance",
            description: "Schedule equipment maintenance and service operations",
        },

        realtime: {
            key: "maintenance",
            badge: 1,
        },

        dropdown: dropdownMaintenance,
    },

    {
        key: "fleet",

        identity: {
            key: "fleet",
            active: true,
            path: "/fleet",
            icon: btnFleet,
        },

        action: {
            key: "fleet",
        },

        content: {
            key: "fleet",
            label: "Fleet",
            description: "Manage vehicles, drivers, and transportation operations",
        },

        realtime: {
            key: "fleet",
            badge: 0,
        },

        dropdown: dropdownFleet,
    },

    {
        key: "recruitment",

        identity: {
            key: "recruitment",
            active: true,
            path: "/recruitment",
            icon: btnRecruitment,
        },

        action: {
            key: "recruitment",
        },

        content: {
            key: "recruitment",
            label: "Recruitment",
            description: "Manage job vacancies, candidates, and hiring processes",
        },

        realtime: {
            key: "recruitment",
            badge: 7,
        },

        dropdown: dropdownRecruitment,
    },

    {
        key: "documents",

        identity: {
            key: "documents",
            active: true,
            path: "/documents",
            icon: btnDocument,
        },

        action: {
            key: "documents",
        },

        content: {
            key: "documents",
            label: "Documents",
            description: "Store, organize, and manage digital documents",
        },

        realtime: {
            key: "documents",
            badge: 0,
        },

        dropdown: dropdownDocuments,
    },

    {
        key: "calendar",

        identity: {
            key: "calendar",
            active: true,
            path: "/calendar",
            icon: btnCalendar,
        },

        action: {
            key: "calendar",
        },

        content: {
            key: "calendar",
            label: "Calendar",
            description: "Manage schedules, meetings, and event planning",
        },

        realtime: {
            key: "calendar",
            badge: 12,
        },

        dropdown: dropdownCalendar,
    },

]