import { resolveHarbor } from "./resolveHarbor"

const listeners = new Set()

window.addEventListener("popstate", () => {
    listeners.forEach(listener => listener())
})

export const engineHarbor = () => {
    return {

        getState() {
            return resolveHarbor()
        },

        subscribe(listener) {

            listeners.add(listener)

            return () => {
                listeners.delete(listener)
            }
        }
    }
}