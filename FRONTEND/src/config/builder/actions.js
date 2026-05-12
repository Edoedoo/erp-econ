import { GLOBAL_ACTIONS } from "../registry/globalAction";
import { ACCOUNTING_ACTIONS } from "../../modules/accounting/config/accountingActions";
import { INVENTORY_ACTIONS } from "../../modules/inventory/config/inventoryActions";

export const ACTIONS = {
    ...GLOBAL_ACTIONS,
    // ...ACCOUNTING_ACTIONS,
    ...INVENTORY_ACTIONS
}