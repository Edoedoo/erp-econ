import { params } from "../../helper/paramsQuery"
import { injector } from "./injector"
import { mergeHarbor } from "./mergeHarbor"

export const resolveHarbor = () => {
    const pathname =
        window.location.pathname
    const view = params.view()

    const merge = injector
        .find(item =>
            item.view === "" || null || undefined
                ? item.route === pathname
                : item.route === pathname && item.view === view
        )
    return {
        pathname,
        view,
        activeModule: merge,
    }
}