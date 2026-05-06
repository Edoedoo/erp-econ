import "./notfound.css";
import { toView, toModule } from "../../core/router/routerSercive";
import { useAppNavigate } from "../../core/router/useAppNavigate";
import { useLocation } from "react-router-dom";
import Rudra from "../../Assets/SVG_MEMBERS/Rudra/Rudra";
import Nara from "../../Assets/SVG_MEMBERS/Nara/Nara";
import Akasa from "../../Assets/SVG_MEMBERS/Akasa/Akasa";
import Bayu from "../../Assets/SVG_MEMBERS/Bayu/Bayu";
import Samya from "../../Assets/SVG_MEMBERS/Samya/Samya";
import Laras from "../../Assets/SVG_MEMBERS/Laras/Laras";
import Citra from "../../Assets/SVG_MEMBERS/Citra/Citra";
import Agni from "../../Assets/SVG_MEMBERS/Agni/Agni";
import Wira from "../../Assets/SVG_MEMBERS/Wira/Wira";
import Sandi from "../../Assets/SVG_MEMBERS/Sandi/Sandi";

export default function NotFound({message= "yu balik dulu ke dashboard, biar aku tegur yang kasih link...!", page =""}) {
    
    const { go } = useAppNavigate()
    const location = useLocation()

    const segments = location.pathname.split("/").filter(Boolean)
    const [modulePath, viewPath] = segments


  return (
    <div className="nf-container">
      
      <div className="nf-robot">
        <Nara   />
        {/* // <Akasa   />
        // <Rudra   />
        // <Bayu   />
        // <Samya   />
        // <Laras   />
        // <Citra   />
        // <Agni   />
        // <Wira   />
        // <Sandi   /> */}
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