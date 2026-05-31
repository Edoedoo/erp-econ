import "./notfound.css";
export default function NotFound({ message = "heleh... nanti aku tegur yang kasih link", pathname }) {

  return (
    <div className="nf-container">

      <div className="nf-robot">
      </div>

      <h1 className="nf-title">404</h1>
      <p className="nf-sub">
        halaman <span className="pathname">{pathname.replace("/", "")}</span> tidak ditemukan
      </p>
    </div>
  );
}