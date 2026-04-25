import { Outlet, useLocation } from "react-router-dom"
import BodyHeader from "../../component/bodyHeader/BodyHeader"
import { resolvePath } from "../router/routerResolver"
import NotFound from "../../component/404page.jsx/404page"

function BodyLayout () {

    const location = useLocation()
  
    let result
  
    try {
      result = resolvePath(location.pathname)
    } catch (err) {
      console.error("Route error:", err)
      return <NotFound />
    }
  
    if (result.status === "not_found") {
      return <NotFound />
    }
  
    return (
      <div id="bodyLayout">
        <div id="body-header">
          <BodyHeader />
        </div>
  
        <div id="body-content">
          <Outlet context={result} />
        </div>
      </div>
    )
  }
export default BodyLayout