import { engineWorkspace } from "../engine/workspace"

export const initUi = {
    header: {
        active: true,
        left: [],                       //next valuenya dari engine
        center: [],                     //next valuenya dari engine
        right: ["edo.edo1212"],         //next valuenya dari engine
    },
    workspace: {
        active: true,
        viewType: "appgrid",            //next valuenya lewat engine
        data: engineWorkspace()
    }
}

console.log(initUi)