import { engineWorkspace } from "../engine/workspace"
import { handleCloseDropdownOutside, handleShowDropdown } from "../../../../actions/dropdown/dropdownEngine"
import { params } from "../../../../helper/paramsQuery"

export const initUi = {
    header: {
        active: true,
        left: [],                       //next valuenya dari engine
        center: [],                     //next valuenya dari engine
        right: ["edo.edo1212"],         //next valuenya dari engine
    },
    workspace: {
        active: true,
        actions: {
            handleShowDropdown: handleShowDropdown,
            closeDropdown: handleCloseDropdownOutside
        },
        view: params.view,
        viewDefault: "appgrid",
        data: engineWorkspace
    }
}
