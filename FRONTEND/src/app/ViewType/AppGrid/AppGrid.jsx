import optionSetting from "../../../Assets/SVG/optionSetting.svg"
import openLink from "../../../Assets/SVG/openLink.svg"
import "./AppGrid.css"

function AppGrid({ identity, action, dropdown, content, realtime, showDropdown, setShowDropdown, wrapperRef, actDropdown }) {
    return (
        <div className="app-grid" >
            {identity.filter(i => i.active).map(item => {
                return (
                    <div key={item.key} className="card-app" onClick={(e) => { e.stopPropagation(), action.filter(i => i.key === item.key).map(i => i.goPath(item.path)) }}>

                        <img
                            src={optionSetting}
                            className="option"
                            onClick={(e) => e.stopPropagation()}
                            onMouseDown={() => actDropdown(item.key, setShowDropdown)}
                        />
                        {!showDropdown && (
                            <span className="option-card">{content.filter(i => i.key === item.key).map(i => i.hoverLabelOption)}</span>
                        )}

                        {dropdown.filter(i => i.key === item.key).map(i => {
                            return (
                                <div key={i.key}>
                                    {showDropdown === i.key && (
                                        <span className="option-dropdown" onClick={(e) => e.stopPropagation()} ref={wrapperRef}>
                                            <div className="option-dropdown-shortcut">
                                                {i.shortcut.map(s => {
                                                    return (
                                                        <div key={s.key} className="option-dropdown-row"
                                                            onClick={(e) => { 
                                                                e.stopPropagation(), 
                                                                s.goPath(s.path, s.key, s.vtDefault), 
                                                                actDropdown(item.key, setShowDropdown) 
                                                            }}>
                                                            <span></span>
                                                            <span>{s.label}</span>
                                                            <span className="last-dropdown-row">{s.shortkey}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="option-dropdown-apperance">
                                                {i.appearance.map(a => {
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
                                                {i.documentation.path && (
                                                    <div className="documentation-dropdown-row"
                                                        onClick={(e) => {
                                                            e.stopPropagation(),
                                                                i.documentation.goPath(
                                                                    i.documentation.path,
                                                                    i.documentation.keyModule,
                                                                    actDropdown(item.key, setShowDropdown)
                                                                )
                                                        }}>
                                                        <span></span>
                                                        <span>{i.documentation.label}</span>
                                                        <span><img src={openLink} alt="" /></span>
                                                    </div>
                                                )}
                                            </div>
                                        </span>
                                    )}
                                </div>
                            )
                        })}


                        <span className="card-identity" >
                            <img src={item.icon} alt="" />
                            {dropdown.filter(i => i.key === item.key).map(i =>
                                i.appearance.map(a => {
                                    return (
                                        <div key={a.key}>
                                            {realtime.filter(i => i.key === item.key).map(r => {
                                                return (
                                                    <div key={r.badge}>
                                                        {a.key === "showBadge" && a.checked && r.badge > 0 && (
                                                            <span>{r.badge}</span>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            )}
                            <h4 >{content.filter(i => 
                                i.key === item.key)
                                .map(i => 
                                i.label)}
                                </h4>
                        </span>
                        
                        {!showDropdown && (
                            <>
                                {dropdown.filter(i => i.key === item.key).map(d =>
                                    d.appearance.map(a => {
                                        return (
                                            <span key={a.key} className="description-card">
                                                {a.key === "showDescription" && 
                                                a.checked && 
                                                (content.filter(i => 
                                                i.key === item.key)
                                                .map(i => 
                                                i.description))}
                                            </span>
                                        )
                                    })
                                )}
                            </>
                        )}

                    </div>
                )
            })
            }
        </div >
    )
}

export default AppGrid