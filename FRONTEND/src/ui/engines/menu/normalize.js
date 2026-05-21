
export const normalizeMenu = (source = []) => {
    const normalized = {
        id: "",
        route: "/",

        sections: {
            header: {
                left: [],
                center: [],
                right: [],
            },

            navbar: false,

            workspace: {},
        },

        layouts: {},

        overlays: {},
    }

    for (const source of sources) {

        normalized.id =
            source.id || normalized.id

        normalized.route =
            source.route || normalized.route

        normalized.sections = {
            ...normalized.sections,
            ...source.sections,

            header: {
                ...normalized.sections.header,
                ...source.sections?.header,
            },
        }

        normalized.layouts = {
            ...normalized.layouts,
            ...source.layouts,
        }

        normalized.overlays = {
            ...normalized.overlays,
            ...source.overlays,
        }
    }

    return normalized
}