import { ICONS } from "./iconConfig"
import { ACCOUNTING_MENU } from "../modules/accounting/config/accountingConfig"
import { INVENTORY_MENU } from "../modules/inventory/config/inventoryConfig"
import { PURCHASE_MENU } from "../modules/purchase/config/purchaseConfig"

export const MENU_LIST = [
  {
    key: "accounting",
    name: "Accounting",
    icon: ICONS.accounting,
    module: ACCOUNTING_MENU
  },
  {
    key: "expenses",
    name: "Expenses",
    icon: ICONS.expenses,
    module: ACCOUNTING_MENU 
  },
  {
    key: "inventory",
    name: "Inventory",
    icon: ICONS.inventory,
    module: INVENTORY_MENU
  },

  {
    key: "configuration",
    name: "Configuration",
    icon: ICONS.configuration,
    module: {
      path: "configuration",
      views: []
    }
  },
  {
    key: "setting",
    name: "Setting",
    icon: ICONS.setting,
    module: {
      path: "setting",
      views: []
    }
  },
  {
    key: "crm",
    name: "CRM",
    icon: ICONS.crm,
    module: {
      path: "crm",
      views: []
    }
  },
  {
    key: "pos",
    name: "Point Of Sale",
    icon: ICONS.pos,
    module: {
      path: "pos",
      views: []
    }
  },
  {
    key: "purchase",
    name: "Purchase",
    icon: ICONS.purchase,
    module: PURCHASE_MENU
  },
  {
    key: "sales",
    name: "Sales",
    icon: ICONS.sales,
    module: {
      path: "sales",
      views: []
    }
  },
  {
    key: "employees",
    name: "Employees",
    icon: ICONS.employees,
    module: {
      path: "employees",
      views: []
    }
  },
  {
    key: "dashboard",
    name: "Dashboard",
    icon: ICONS.dashboard,
    module: {
      path: "dashboard",
      views: []
    }
  },
  {
    key: "members",
    name: "Members",
    icon: ICONS.members,
    module: {
      path: "members",
      views: []
    }
  }
]