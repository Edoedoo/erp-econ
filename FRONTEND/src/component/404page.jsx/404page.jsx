import "./notfound.css";
import { toView, toModule } from "../../core/router/routerSercive";
import { useAppNavigate } from "../../core/router/useAppNavigate";
import { useLocation } from "react-router-dom";
import Rudra from "../../Assets/SVG_MEMBERS/Rudra/Rudra";


export default function NotFound({message= "yu balik dulu ke dashboard, biar aku tegur yang kasih link...!", page =""}) {
    
  const { go } = useAppNavigate()
    const location = useLocation()

    const segments = location.pathname.split("/").filter(Boolean)
    const [modulePath, viewPath] = segments


  return (
    <div className="nf-container">
      
      <div className="nf-robot">
        <Rudra  message="balik dulu ke dashboard yuu, nanti gue tegur yang kasih link" />
      </div>

      <h1 className="nf-title">404</h1>
      <p className="nf-sub">
        {page}
      </p>

      <div className="nf-actions">
        <button className="btn-primary" onClick={() => go(toModule(modulePath))}>kembali</button>
      </div>

    </div>
  );
}