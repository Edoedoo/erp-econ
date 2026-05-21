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
                    <div key={item.key} className="card-app">

                        <img src={optionSetting} className="option" onClick={() => handleDropdown(item.key)} />
                        {dropdownView === item.key && (
                            <span className="option-dropdown" key={item.key}>
                                <div className="option-dropdown-shortcut">
                                    {item.dropdown?.shortcut?.map(s => {
                                        return (
                                            <div key={s.key} className="option-dropdown-row">
                                                <span></span>
                                                <span>{s.label}</span>
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
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="documentationLink">
                                    {item.dropdown?.documentation.link && (
                                        <div className="option-dropdown-row">
                                            <span>{item.dropdown?.documentation?.label}</span>
                                            <img src={openLink} alt="" />
                                        </div>
                                    )}
                                </div>
                            </span>
                        )}

                        <span className="card-identity">
                            <img src={item.icon} alt="" />
                            {item.badge && (
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