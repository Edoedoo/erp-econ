
import { useSearchParams, Outlet, useOutletContext } from "react-router-dom";
import { VIEW_TYPE } from "../../../../component/viewType/viewType";

import { getGlobalUom } from "../../../../core/shared/uomStore";
import { DEFAULT_UOM_CATEGORY } from "../../../../config/defaultData/defaultCategoryUom";

function UnitOfMeasure() {
    const [params] = useSearchParams();

    const layoutContext = useOutletContext();
    const route = layoutContext?.route || {};
    const { currentView } = route;
    const viewType =
      params.get("view_type") ||
      currentView?.defaultView ||
      "list";
    
    const data = getGlobalUom().map((uom) => {

      const category = DEFAULT_UOM_CATEGORY.find(
        (cat) => cat.key === uom.uom_category
      );
    
      return {
        ...uom,
        uom_category: category?.name || uom.uom_category
      };
    
    });

    const ViewComponent = VIEW_TYPE[viewType];
    const column = data.length > 0
    ? currentView?.columns
    : undefined;

    if (route.action) {
        return (
          <Outlet context={layoutContext} />
        );
      }
      return (
        <ViewComponent data={data} columns={column} context={layoutContext}/>
    );
}
export default UnitOfMeasure 