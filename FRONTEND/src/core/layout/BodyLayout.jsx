import BodyHeader from "../../component/bodyHeader/BodyHeader";

import "./layout.css"
import { Outlet } from "react-router-dom";

function BodyLayout () {
    return (
        <div id="bodyLayout">
            <div id="body-header">
                <BodyHeader />
            </div>

            <div id="body-content">
                <Outlet />
            </div>

        </div>
    )
}

export default BodyLayout