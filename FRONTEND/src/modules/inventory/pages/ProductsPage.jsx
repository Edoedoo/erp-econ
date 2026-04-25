import { useLocation, useSearchParams } from "react-router-dom"
import { resolvePath } from "../../../core/router/routerResolver"
import { VIEW_TYPE } from "../../../component/viewType/viewType"

function ProductsPage () {

  const location = useLocation()
  const [params] = useSearchParams()

  const { currentView } = resolvePath(location.pathname)

  const viewType =
    params.get("view_type") || currentView?.defaultView || "list"

  const ViewComponent = VIEW_TYPE[viewType]

  // ✅ dummy data
  const data = [
    {
      reference: "P001",
      source_location: "WH/Stock",
      destination_location: "Customers",
      state: "draft",
      scheduled_date: "2026-04-24"
    },
    {
      reference: "P002",
      source_location: "WH/Stock",
      destination_location: "Customers",
      state: "done",
      scheduled_date: "2026-04-25"
    }
  ]

  return (
    <ViewComponent
      data={data}
      columns={currentView?.columns}
    />
  )
}

export default ProductsPage