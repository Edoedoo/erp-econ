import AppGrid from "../../ViewType/AppGrid/AppGrid"
import "../WorkspaceSection/WorkspaceSection.css"

function WorkspaceSection({ dataUi, viewType, showDropdown, setShowDropdown, wrapperRef, actDropdown }) {
    const registry = {
        appgrid: AppGrid
    }
    const Component =
        registry[viewType]

    return (
        <div className="workspace-section">
            <Component
                identity={dataUi.map(i => i.identity)}
                action={dataUi.map(a => a.action)}
                dropdown={dataUi.map(d => d.dropdown)}
                content={dataUi.map(c => c.content)}
                realtime={dataUi.map(r => r.realtime)}
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
                wrapperRef={wrapperRef}
                actDropdown={actDropdown}
            />
        </div>
    )
}

export default WorkspaceSection