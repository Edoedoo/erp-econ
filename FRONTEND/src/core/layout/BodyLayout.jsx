import { Outlet, useLocation } from "react-router-dom";
import BodyHeader from "../../component/bodyHeader/BodyHeader";
import { resolvePath } from "../router/routerResolver";
import NotFound from "../../component/404page.jsx/404page";
import { useState, useEffect, useMemo } from "react";

import { getGlobalUom } from "../../core/shared/uomStore";

function BodyLayout() {
  const location = useLocation();

  const [formData, setFormData] = useState({});
  const [record, setRecord] = useState(null);

  const [selectedIds, setselectedIds] = useState([]);
  const [viewRows, setViewRows] = useState([])
  const [currentIndex, setCurrentIndex] = useState(-1)

  let route;

  try {
    route = resolvePath(location.pathname);
  } catch (err) {
    console.error("Route error:", err);
    return <NotFound />;
  }

  useEffect(() => {

    setFormData({});
    setselectedIds([]);

    if (!route?.id) {
      setRecord(null);
      return;
    }

    if (route.view === "units_of_measure") {

      const allUom = getGlobalUom();

      const found = allUom.find(
        (item) => item.id === route.id
      );

      setRecord(found || null);
      if (viewRows?.length) {

        const index =
          viewRows.findIndex(
            item => item.id === route.id
          )
      
        setCurrentIndex(index)
      }
    }

  }, [location.pathname]);

  useEffect(() => {

    const savedRows =
      sessionStorage.getItem(
        "econix_view_rows"
      )
  
    const savedIndex =
      sessionStorage.getItem(
        "econix_current_index"
      )
  
    if (savedRows) {
      setViewRows(JSON.parse(savedRows))
    }
  
    if (savedIndex !== null) {
      setCurrentIndex(Number(savedIndex))
    }
  
  }, [])

  const layoutContext = useMemo(() => {
    return {
      route: {
        ...route,
        record
      },

      formStore: {
        formData,
        setFormData,
      },

      selectedIds,
      setselectedIds,

      viewRows,
      setViewRows,

      currentIndex,
      setCurrentIndex,

      setRecord


    };
  }, [
    route,
    record,
    formData,
    selectedIds,
    viewRows,
    currentIndex
  ]);
  return (
    <div id="bodyLayout">

      <div id="body-header">
        <BodyHeader context={layoutContext} />
      </div>

      <div id="body-content">
        <Outlet context={layoutContext} />
      </div>

    </div>
  );
}

export default BodyLayout;