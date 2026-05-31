import AppGrid from "../../ViewType/AppGrid/AppGrid"
import "../WorkspaceSection/WorkspaceSection.css"

function WorkspaceSection({ dataUi }) {
    const registry = {
        appgrid: AppGrid
    }
    const Component =
        registry[dataUi.viewDefault]
    return (
        <div className="workspace-section">
            <Component {...dataUi} />
        </div>
    )
}

export default WorkspaceSection