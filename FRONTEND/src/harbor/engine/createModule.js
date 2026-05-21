import findActiveModule from "./findActiveModule"

export default function createModule(modules) {

    const pathname =
        window.location.pathname

    const activeModule =
        findActiveModule(modules, pathname)
    return {
        pathname,
        activeModule
    }

}