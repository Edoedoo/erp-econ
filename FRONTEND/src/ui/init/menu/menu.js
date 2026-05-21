
import { uiMenuRegistry } from "../../registry/menu/menu"
import { mergeUiMenu } from "../../engines/menu/merge"

export const initUiMenu = () => {
    return mergeUiMenu({
        defaultSource:
            uiMenuRegistry.source.default,

        databaseSource:
            uiMenuRegistry.source.database,
    })
}