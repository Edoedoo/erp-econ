
export const engineRoute = ({ path = "", params = {}, query = {}, state = {}, replace = false, }) => {

    let finalPath = path

    Object.entries(params).forEach(([key, value]) => {
        finalPath = finalPath.replace(
            `:${key}`,
            value
        )
    })

    const searchParams = new URLSearchParams(query)
    const queryString = searchParams.toString()

    if (queryString) {
        finalPath += `?${queryString}`
    }

    if (replace) {
        window.history.replaceState(
            state,
            "",
            finalPath
        )
    } else {
        window.history.pushState(
            state,
            "",
            finalPath
        )
    }
    window.dispatchEvent(
        new PopStateEvent("popstate")
    )
}