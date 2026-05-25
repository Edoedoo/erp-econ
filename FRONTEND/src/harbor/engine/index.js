import { resolveHarbor } from "./resolveHarbor"

const listeners = new Set()

let harborState =
    resolveHarbor()

window.addEventListener("popstate", () => {

    harborState =
        resolveHarbor()

    listeners.forEach(listener =>
        listener(harborState)
    )
}
)

export const engineHarbor = () => {

    return {

        getState() {
            return harborState
        },

        subscribe(listener) {

            listeners.add(listener)

            return () => {
                listeners.delete(listener)
            }
        }
    }
}