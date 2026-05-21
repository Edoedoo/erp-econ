
export const mergeCoreMenu = ({ defaultSource, databaseSource }) => {
    return {
        id: "menu",

        state: {
            ...defaultSource.state,
            ...databaseSource.state,
        },

        actions: {
            ...defaultSource.actions,
            ...databaseSource.actions,
        },

        services: {
            ...defaultSource.services,
            ...databaseSource.services,
        },

        repository: {
            ...defaultSource.repository,
            ...databaseSource.repository,
        },

        guards: {
            ...defaultSource.guards,
            ...databaseSource.guards,
        },
    }
}