import { useLocation, useSearchParams } from "react-router-dom";
import { MODULE_REGISTRY } from "../../config/MODULE_REGISTRY";

import { getAvailableActions } from "../../config/actionEngine";
import { groupActions } from "../../config/groupEngine";

import { useAppNavigate } from "../../core/router/useAppNavigate";

import "./bodyHeader.css";
import Search from "../search/search";

import btnList from "../../Assets/SVG/list.svg";
import btnKanban from "../../Assets/SVG/kanban.svg";

function BodyHeader({ context }) {
  const location = useLocation();
  const { go } = useAppNavigate();

  const [params, setParams] = useSearchParams();

  const { route, formStore } = context || {};
  const formData = formStore?.formData;

  const segments = location.pathname.split("/").filter(Boolean);
  const [modulePath, viewPath] = segments;

  const isViewLevel = segments.length === 2;

  const isFormMode =
    route?.action === "create" ||
    route?.action === "edit";

  const isViewMode =
    route?.action === "view";

  const currentModule = MODULE_REGISTRY[modulePath];

  const currentView = currentModule?.views?.find(
    (v) => v.path === viewPath
  );

  const currentActions = route?.action
    ? `/ ${route.action}`
    : "";

  const viewType =
    params.get("view_type") ||
    currentView?.defaultView;

  const selectedIds = [];

  const uiContext = {
    go,
    module: modulePath,
    view: viewPath,
    selectedIds,
    formData,
    id: route?.id,
  };

  const rawActions =
  (currentView?.actions || [])
    .filter(Boolean);

  const available = getAvailableActions({
    actions: rawActions,
    selectedIds,
  });

  const grouped = groupActions(available);

  const updateParams = (callback) => {
    const next = new URLSearchParams(params);
    callback(next);
    setParams(next);
  };

  const handleListView = () => {
    updateParams((p) => p.set("view_type", "list"));
  };

  const handleKanbanView = () => {
    updateParams((p) => p.set("view_type", "kanban"));
  };

  if (!currentModule) return null;

  return (
    <div className="body-header">

      <div className="body-top">

        <div className="body-left">
          <div className="module-name">
            {currentView && (
              <h4
                onClick={() =>
                  go({
                    module: modulePath,
                    view: currentView.path,
                  })
                }
              >
                {currentView.name}
              </h4>
            )}

            <span>{currentActions}</span>
          </div>
        </div>

        {isViewLevel && (
          <div className="body-right">
            <Search />
          </div>
        )}

      </div>

      <div className="body-center">

        {isViewLevel && (
          <div className="action-primary">
            {grouped.mainActions?.map((action) => (
              <button
                key={action.key}
                className="btn-primary"
                onClick={() => action.handler(uiContext)}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        {isViewLevel && (
          <div className="action-secondary">
            {grouped.listActions?.map((action) => (
              <button
                key={action.key}
                className="btn-secondary"
                onClick={() => action.handler(uiContext)}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        {isFormMode && (
          <div className="action-secondary">
            {grouped.formActions
              ?.filter(action => action.key !== "edit")
              .map((action) => (
                <button
                  key={action.key}
                  className="btn-secondary"
                  onClick={() => action.handler(uiContext)}
                >
                  {action.label}
                </button>
              ))}
          </div>
        )}

        {isViewMode && (
          <div className="action-secondary">
            {grouped.formActions
              ?.filter(action => action.key === "edit")
              .map((action) => (
                <button
                  key={action.key}
                  className="btn-secondary"
                  onClick={() => action.handler(uiContext)}
                >
                  {action.label}
                </button>
              ))}
          </div>
        )}

      </div>

      <div className="body-bottom">

        {selectedIds.length > 0 && isViewLevel && (
          <div className="body-bottom-left">

            <div className="action-contextual">
              {grouped.selectionActions?.map((action) => (
                <button
                  key={action.key}
                  className="btn-secondary"
                  onClick={() => action.handler(uiContext)}
                >
                  {action.label}
                </button>
              ))}
            </div>

            <div className="action-bulk">
              {grouped.bulkActions?.map((action) => (
                <button
                  key={action.key}
                  className="btn-bulk-secondary"
                  onClick={() => action.handler(uiContext)}
                >
                  {action.label}
                </button>
              ))}
            </div>

          </div>
        )}

        {isViewLevel && (
          <div className="body-bottom-right">

            <span
              className={viewType === "list" ? "active" : ""}
              onClick={handleListView}
            >
              <img src={btnList} alt="" />
            </span>

            <span
              className={viewType === "kanban" ? "active" : ""}
              onClick={handleKanbanView}
            >
              <img src={btnKanban} alt="" />
            </span>

          </div>
        )}

      </div>

    </div>
  );
}

export default BodyHeader;