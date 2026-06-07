import { mergeHarbor } from "./mergeHarbor";
import { handleCloseDropdownOutside } from "../../actions/dropdown/dropdownEngine";
import { handleShowDropdown } from "../../actions/dropdown/dropdownEngine";
import { params } from "../../helper/paramsQuery";

export const injector =
    mergeHarbor().map(item => ({
        ...item,
        actDropdownOutside: handleCloseDropdownOutside,
        actDropdown: handleShowDropdown,
        vt: params.vt(),
    }))
