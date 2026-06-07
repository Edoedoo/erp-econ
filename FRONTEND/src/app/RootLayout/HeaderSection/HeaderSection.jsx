
import profile from "../../../Assets/SVG/profile.svg"
import chat from "../../../Assets/SVG/notificationChat.svg"
import "./HeaderSection.css"

function HeaderSection({ dataUI, headerLeft, headerCenter, headerRight }) {
    return (
        <div className="header-section">
            {headerLeft && (
                <div className="header-left" >
                    {headerLeft.map(item => {
                        return (
                            <div key={item.key}>
                                <h3>{item.key}</h3>
                            </div>
                        )
                    })}
                </div>
            )}

            <div className="header-center" >
                <span>{dataUI?.center?.map(item => item)}</span>
            </div>

            <div className="header-right" >
                <span className="message-header" >
                    <img src={chat} />
                    <span className="badge-message-header">10</span>

                </span>
                <span className="profile-header">
                    <img src={profile} />
                    <span>{dataUI?.right?.map(item => item)}</span>
                </span>

            </div>
        </div>
    )
}

export default HeaderSection