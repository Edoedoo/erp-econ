import { mergeHarbor } from "./mergeHarbor"
import { params } from "../../helper/paramsQuery"

export const resolveHarbor = () => {
    const pathname =
        window.location.pathname

    const view = params.view()

    const merge = mergeHarbor()
        .find(item =>
            !item.view
                ? item.route === pathname
                : item.route === pathname && item.view === view
        )
    return {
        pathname,
        view,
        activeModule: merge,
    }
}