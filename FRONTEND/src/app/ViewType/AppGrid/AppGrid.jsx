import optionSetting from "../../../Assets/SVG/optionSetting.svg"
import openLink from "../../../Assets/SVG/openLink.svg"
import "./AppGrid.css"
import { useState } from "react"

function AppGrid(workspace) {
    const [dropdownView, setDropdownView] = useState(null)

    const handleDropdown = (key) => {
        setDropdownView(prev =>
            prev === key ? null : key
        )

    }

    return (
        <div className="app-grid" >
            {workspace.data.map(item => {
                return (
                    <div key={item.key} className="card-app" onClick={() => item.action(item.path)}>

                        <img src={optionSetting} className="option" onClick={(e) => { e.stopPropagation(), handleDropdown(item.key) }} />
                        {dropdownView === item.key && (
                            <span className="option-dropdown" key={item.key}>
                                <div className="option-dropdown-shortcut">
                                    {item.dropdown?.shortcut?.map(s => {
                                        return (
                                            <div key={s.key} className="option-dropdown-row">
                                                <span></span>
                                                <span>{s.label}</span>
                                                <span className="last-dropdown-row"></span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="option-dropdown-apperance">
                                    {item.dropdown?.appearance?.map(a => {
                                        return (
                                            <div key={a.key} className="option-dropdown-row">
                                                <span>✓</span>
                                                <span>{a.label}</span>
                                                <span className="last-dropdown-row"></span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="documentationLink">
                                    {item.dropdown?.documentation.link && (
                                        <div className="documentation-dropdown-row">
                                            <span></span>
                                            <span>{item.dropdown?.documentation?.label}</span>
                                            <span><img src={openLink} alt="" /></span>
                                        </div>
                                    )}
                                </div>
                            </span>
                        )}

                        <span className="card-identity">
                            <img src={item.icon} alt="" />
                            {item.showBadge && item.badge > 0 && (
                                <span>{item.badge}</span>
                            )}
                        </span>

                        <h4>{item.label}</h4>

                    </div>
                )
            })}
        </div>
    )
}

export default AppGrid