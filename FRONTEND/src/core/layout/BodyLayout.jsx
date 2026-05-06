import { Outlet, useLocation } from "react-router-dom";
import BodyHeader from "../../component/bodyHeader/BodyHeader";
import { resolvePath } from "../router/routerResolver";
import NotFound from "../../component/404page.jsx/404page";
import { useState, useEffect } from "react";

function BodyLayout() {
  const location = useLocation();

  const [formData, setFormData] = useState({});

  let route;

  try {
    route = resolvePath(location.pathname);
  } catch (err) {
    console.error("Route error:", err);
    return <NotFound />;
  }

  useEffect(() => {
    setFormData({});
  }, [location.pathname]);

  const layoutContext = {
    route,
    formStore: {
      formData,
      setFormData,
    },
  };

  return (
    <div id="bodyLayout">

      {/* HEADER */}
      <div id="body-header">
        <BodyHeader context={layoutContext} />
      </div>

      {/* CONTENT */}
      <div id="body-content">
        <Outlet context={layoutContext} />
      </div>

    </div>
  );
}

export default BodyLayout;