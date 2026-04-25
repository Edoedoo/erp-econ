import "./notfound.css";
import { toView, toModule } from "../../core/router/routerSercive";
import { useAppNavigate } from "../../core/router/useAppNavigate";
import { useLocation } from "react-router-dom";

export default function NotFound() {
    
    const { go } = useAppNavigate()
    const location = useLocation()

    const segments = location.pathname.split("/").filter(Boolean)
    const [modulePath, viewPath] = segments


  return (
    <div className="nf-container">
      
      {/* ROBOT SVG */}
      <div className="nf-robot">
        <svg width="140" height="140" viewBox="0 0 200 200">
          {/* head */}
          <rect x="40" y="30" rx="20" ry="20" width="120" height="90" fill="var(--color-bg-card)" stroke="var(--color-border)" />

          {/* eyes */}
          <circle className="eye" cx="85" cy="75" r="8" fill="var(--color-primary)" />
          <circle className="eye" cx="115" cy="75" r="8" fill="var(--color-primary)" />

          {/* mouth (sad) */}
          <path d="M80 100 Q100 85 120 100" stroke="var(--color-primary)" strokeWidth="3" fill="none"/>

          {/* antenna */}
          <line x1="100" y1="30" x2="100" y2="10" stroke="var(--color-border)" />
          <circle cx="100" cy="8" r="4" fill="var(--color-accent)" />
        </svg>
      </div>

      {/* TEXT */}
      <h1 className="nf-title">404</h1>
      <p className="nf-sub">
        Oops... halaman tidak ditemukan
      </p>

      <p className="nf-desc">
        Sepertinya kamu tersesat di sistem Econix.
      </p>

      {/* ACTION */}
      <div className="nf-actions">
        <button className="btn-primary" onClick={() => go(toModule(modulePath))}>Ke Dashboard</button>
      </div>

    </div>
  );
}