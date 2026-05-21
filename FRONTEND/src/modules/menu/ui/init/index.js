import { mergeAppGrid } from "../engine/mergeAppGrid"
export const ui = {
    header: {
        active: true,
        left: [],
        center: [],
        right: ["administrator"],
    },
    workspace: {
        active: true,
        viewType: "appgrid",
        data: mergeAppGrid()
    }
}