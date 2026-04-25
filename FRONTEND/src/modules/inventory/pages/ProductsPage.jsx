import { useLocation, useSearchParams, Outlet } from "react-router-dom"
import { resolvePath } from "../../../core/router/routerResolver"
import { VIEW_TYPE } from "../../../component/viewType/viewType"

function ProductsPage () {

  const location = useLocation()
  const [params] = useSearchParams()

  const segments = location.pathname.split("/").filter(Boolean)
  const [modulePath, viewPath, action] = segments

  const { currentView } = resolvePath(location.pathname)

  const viewType =
    params.get("view_type") || currentView?.defaultView || "list"

  const ViewComponent = VIEW_TYPE[viewType]

  const data = []

  if (action) {
    return <Outlet />
  }

  return (
    <ViewComponent
      data={data}
      columns={currentView?.columns}
    />
  )
}

export default ProductsPage