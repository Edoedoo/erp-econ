import { mergeAppGrid } from "./mergeAppGrid"
import { engineRoute } from "../../../../../actions/route/actionRouteGlobal"
import { handleCloseDropdownOutside } from "../../../../../actions/dropdown/dropdownEngine"
import { handleShowDropdown } from "../../../../../actions/dropdown/dropdownEngine"
import { params } from "../../../../../helper/paramsQuery"


export const engineWorkspace = () => {
    return mergeAppGrid().map(item => ({
        ...item,
        action: (path) => {
            engineRoute({ path: path })
        },
        handleShowDropdown: handleShowDropdown,
        handleCloseDropdownOutside: handleCloseDropdownOutside,
        option: "Customize and Shortcuts",

        dropdown: {
            shortcut: item.dropdown.shortcut.map(s => ({
                ...s,
                action: (path) => {
                    engineRoute({ path: path })
                },
                view: (key) => {
                    params.view(key)
                },

            })),
            appearance: item.dropdown.appearance.map(a => ({
                ...a,
            })),
            documentation: {
                ...item.dropdown.documentation,
                action: (path) => {
                    engineRoute({ path: path })
                },
                module: (value) => {
                    params.module(value)
                },
            }
        }
    }))
}