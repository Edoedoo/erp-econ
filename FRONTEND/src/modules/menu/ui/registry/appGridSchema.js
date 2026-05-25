
export const appGridSchema = {
    key: "",
    label: "",
    path: "/",
    icon: null,
    active: false,
    favorite: false,
    badge: 0,
    showBadge: false,
    description: "",

    dropdown: {
        visible: false,
        shortcut: [
            {
                key: "",
                label: "No Shortcut",
                path: "/",
                active: true,
            },
        ],

        appearance: [
            {
                key: "",
                label: "No Appearance",
                path: "/",
                active: true,
            },
        ],

        documentation: {
            label: "No Link",
            link: "/"
        }
    }
}