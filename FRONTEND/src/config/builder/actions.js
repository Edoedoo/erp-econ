import { GLOBAL_ACTIONS } from "../../defaults/ui/actions/globalActions";
import { ACCOUNTING_ACTIONS } from "../../modules/accounting/config/accountingActions";
import { INVENTORY_ACTIONS } from "../../modules/inventory/config/inventoryActions";

export const ACTIONS = {
    ...GLOBAL_ACTIONS,
    // ...ACCOUNTING_ACTIONS,
    ...INVENTORY_ACTIONS
}