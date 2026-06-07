const engine = (key, value) => {

    const query =
        new URLSearchParams(window.location.search)

    if (value === undefined) {
        return query.get(key)
    }

    query.set(
        key,
        String(value)
    )

    const url =
        `${window.location.pathname}?${query.toString()}`

    window.history.pushState(
        {},
        "",
        url
    )

    window.dispatchEvent(
        new PopStateEvent("popstate")
    )

    return value

}

export const params = {

    id: value =>
        engine("id", value),

    key: value =>
        engine("key", value),

    slug: value =>
        engine("slug", value),

    uuid: value =>
        engine("uuid", value),

    view: value =>
        engine("view", value),

    vt: value =>
        engine("vt", value),

    page: value =>
        engine("page", value),

    tab: value =>
        engine("tab", value),

    section: value =>
        engine("section", value),

    panel: value =>
        engine("panel", value),

    modal: value =>
        engine("modal", value),

    drawer: value =>
        engine("drawer", value),

    sidebar: value =>
        engine("sidebar", value),

    workspace: value =>
        engine("workspace", value),

    module: value =>
        engine("module", value),

    project: value =>
        engine("project", value),

    board: value =>
        engine("board", value),

    group: value =>
        engine("group", value),

    search: value =>
        engine("search", value),

    filter: value =>
        engine("filter", value),

    sort: value =>
        engine("sort", value),

    order: value =>
        engine("order", value),

    limit: value =>
        engine("limit", value),

    offset: value =>
        engine("offset", value),

    cursor: value =>
        engine("cursor", value),

    theme: value =>
        engine("theme", value),

    layout: value =>
        engine("layout", value),

    density: value =>
        engine("density", value),

    mode: value =>
        engine("mode", value),

    focus: value =>
        engine("focus", value),

    selected: value =>
        engine("selected", value),

    expanded: value =>
        engine("expanded", value),

    create: value =>
        engine("create", value),

    edit: value =>
        engine("edit", value),

    detail: value =>
        engine("detail", value),

    preview: value =>
        engine("preview", value),

    active: value =>
        engine("active", value),

    status: value =>
        engine("status", value),

    loading: value =>
        engine("loading", value),

    empty: value =>
        engine("empty", value),

    error: value =>
        engine("error", value),

    token: value =>
        engine("token", value),

    session: value =>
        engine("session", value),

    date: value =>
        engine("date", value),

    start: value =>
        engine("start", value),

    end: value =>
        engine("end", value)

}