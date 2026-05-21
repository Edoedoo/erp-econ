
// import { coreMenuRegistry } from "../registry/menu"

// import { mergeCoreMenu } from "../engine/merge/menu"

import { coreMenuRegistry } from "../../registry/menu/menu"
import { mergeCoreMenu } from "../../engines/menu/merge"

export const initCoreMenu = () => {
    return mergeCoreMenu({
        defaultSource:
            coreMenuRegistry.source.default,

        databaseSource:
            coreMenuRegistry.source.database,
    })
}