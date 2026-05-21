import AppGrid from "../../ViewType/AppGrid/AppGrid"

function WorkspaceSection({ dataUI }) {
    const registry = {
        appgrid: AppGrid
    }

    const Component = registry[dataUI.viewType]
    return (
        <Component {...dataUI} />
    )
}

export default WorkspaceSection