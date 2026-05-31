import optionSetting from "../../../Assets/SVG/optionSetting.svg"
import openLink from "../../../Assets/SVG/openLink.svg"
import "./AppGrid.css"
import { useState, useEffect, useRef } from "react"

function AppGrid(workspace) {
    const [showDropdown, setShowDropdown] = useState(null)
    const wrapperRef = useRef(null)
    useEffect(() => {

        document.addEventListener("click", (e) => {
            workspace.data().map(item => item.handleCloseDropdownOutside(e, wrapperRef, setShowDropdown))
        })
        return () => {
            document.removeEventListener("click", (e) => {
                workspace.data().map(item => item.handleCloseDropdownOutside(e, wrapperRef, setShowDropdown))
            })
        }
    }, [])

    return (
        <div className="app-grid" >
            {workspace.data().map(item => {

                return (
                    <div key={item.key} className="card-app"
                        onClick={(e) => {
                            e.stopPropagation(),
                                item.action(item.path)
                        }} >

                        <img
                            src={optionSetting}
                            className="option"
                            onClick={(e) => e.stopPropagation()}
                            onMouseDown={() => item.handleShowDropdown(item.key, setShowDropdown)} />

                        {!showDropdown && (
                            <span className="option-card">{item.option}</span>
                        )}

                        {showDropdown === item.key && (
                            <span className="option-dropdown" onClick={(e) => e.stopPropagation()} ref={wrapperRef}>
                                <div className="option-dropdown-shortcut">
                                    {item.dropdown?.shortcut?.map(s => {
                                        return (
                                            <div key={s.key} className="option-dropdown-row"
                                                onClick={(e) => {
                                                    e.stopPropagation(),
                                                        s.action(s.path),
                                                        s.view(s.key)
                                                }}>
                                                <span></span>
                                                <span>{s.label}</span>
                                                <span className="last-dropdown-row">{s.shortkey}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="option-dropdown-apperance">
                                    {item.dropdown?.appearance?.map(a => {
                                        return (
                                            <div key={a.key} className="option-dropdown-row" >
                                                {a.checked ? (
                                                    <span>✓</span>
                                                ) : (
                                                    <span></span>
                                                )}
                                                <span>{a.label}</span>
                                                <span className="last-dropdown-row"></span>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="documentationLink">
                                    {item.dropdown?.documentation.path && (
                                        <div className="documentation-dropdown-row"
                                            onClick={(e) => {
                                                e.stopPropagation(),
                                                    item.dropdown?.documentation?.action(item.dropdown?.documentation?.path),
                                                    item.dropdown?.documentation?.module(item.dropdown?.documentation?.keyModule)
                                            }}>
                                            <span></span>
                                            <span>{item.dropdown?.documentation?.label}</span>
                                            <span><img src={openLink} alt="" /></span>
                                        </div>
                                    )}
                                </div>
                            </span>
                        )}


                        <span className="card-identity" >
                            <img src={item.icon} alt="" />
                            {item.dropdown.appearance.map(i => {
                                return (
                                    <div key={i.key}>
                                        {i.key === "showBadge" && i.checked && item.badge > 0 && (
                                            <span>{item.badge}</span>
                                        )}
                                    </div>
                                )
                            })}
                        </span>

                        {!showDropdown && (
                            <>
                                {item.dropdown.appearance.map(i => {
                                    return (
                                        <span key={i.key} className="description-card">
                                            {i.key === "showDescription" && i.checked && (item.description)}
                                        </span>
                                    )
                                })}
                            </>
                        )}
                        <h4>{item.label}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default AppGrid