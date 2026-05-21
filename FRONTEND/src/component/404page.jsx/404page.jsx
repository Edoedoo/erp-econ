import "./notfound.css";
import Rudra from "../../Assets/SVG_MEMBERS/Rudra/Rudra";


export default function NotFound({ message = "heleh... nanti aku tegur yang kasih link", pathname }) {

  return (
    <div className="nf-container">

      <div className="nf-robot">
        <Rudra message={message} size={100} />
      </div>

      <h1 className="nf-title">404</h1>
      <p className="nf-sub">
        halaman <span className="pathname">{pathname}</span> tidak ditemukan
      </p>
    </div>
  );
}