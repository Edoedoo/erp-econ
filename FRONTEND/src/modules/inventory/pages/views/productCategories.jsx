import { useSearchParams, Outlet, useOutletContext } from "react-router-dom";
import { VIEW_TYPE } from "../../../../component/viewType/viewType";

function ProductCategories() {

  const [params] = useSearchParams();

  const layoutContext = useOutletContext();
  const route = layoutContext?.route || {};
  const { currentView } = route;

  const viewType =
    params.get("view_type") ||
    currentView?.defaultView ||
    "list";

  const ViewComponent = VIEW_TYPE[viewType];

  const data = [1,2,3,4,5,6,7];

  const column = data.length > 0
    ? currentView?.columns
    : undefined;


  if (route.action) {
    return (
      <Outlet context={layoutContext} />
    );
  }

  return (
      <ViewComponent data={data} columns={column} />
  );
}

export default ProductCategories;