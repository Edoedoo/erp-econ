import profile from "../../../Assets/SVG/profile.svg";
import chat from "../../../Assets/SVG/notificationChat.svg";
import "./HeaderSection.css";

function HeaderSection({ dataUI, headerLeft, headerCenter, headerRight }) {
  return (
    <div className="header-section">
      <div className="header-left">
        <h3>{headerLeft.charAt(1).toUpperCase() + headerLeft.slice(2)}</h3>
      </div>

      <div className="header-center">
        <span>{dataUI?.center?.map((item) => item)}</span>
      </div>

      <div className="header-right">
        <span className="message-header">
          <img src={chat} />
          <span className="badge-message-header">10</span>
        </span>
        <span className="profile-header">
          <img src={profile} />
          <span>{dataUI?.right?.map((item) => item)}</span>
        </span>
      </div>
    </div>
  );
}

export default HeaderSection;
