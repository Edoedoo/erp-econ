import { mergeAppGrid } from "./mergeAppGrid"
import { engineRoute } from "../../../../../actions/route/actionRouteGlobal"
import { handleShowDropdown } from "../../../../../actions/dropdown/dropdownEngine"
import { params } from "../../../../../helper/paramsQuery"


export const engineWorkspace = mergeAppGrid().map(
    item => ({
        ...item,
        action: {
            ...item?.action,
            goPath: (path) => {
                engineRoute({ path: path })
            },
            actDropdown: handleShowDropdown,
        },
        content: {
            ...item?.content,
            hoverLabelOption: "Customize and Shortcuts",
        },
        dropdown: {
            ...item.dropdown,
            shortcut: item.dropdown.shortcut.map(s => ({
                ...s,
                goPath: (path, view, vt) => {
                    engineRoute({ path: path })
                    params.view(view)
                    params.vt(vt)
                },
            })),
            appearance: item.dropdown.appearance.map(a => ({
                ...a,
            })),
            documentation: {
                ...item.dropdown.documentation,
                goPath: (path, module) => {
                    engineRoute({ path: path })
                    params.module(module)
                },
            }
        }
    })
)