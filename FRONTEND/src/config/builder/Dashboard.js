import { INVENTORY_DASHBOARD } from "../../modules/inventory/config/inventoryDashboard"
import { ACCOUNTING_DASHBOARD } from "../../modules/accounting/config/accountingDashboard"

export const DASHBOARD = [
    ...INVENTORY_DASHBOARD,
    ...ACCOUNTING_DASHBOARD
]