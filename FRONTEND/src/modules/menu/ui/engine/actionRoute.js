export const handleRoute = (path) => {

    return () => {
        window.history.pushState({}, "", path)
    }
}