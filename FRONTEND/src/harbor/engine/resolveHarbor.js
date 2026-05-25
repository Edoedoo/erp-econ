import { mergeHarbor } from "./mergeHarbor"

export const resolveHarbor = () => {

    const pathname =
        window.location.pathname

    const merge = mergeHarbor()
        .find(
            item => item.route === pathname
        )

    return {
        pathname,
        activeModule: merge
    }
}