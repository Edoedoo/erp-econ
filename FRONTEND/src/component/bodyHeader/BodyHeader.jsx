import { useLocation, useSearchParams } from "react-router-dom";
import { MODULE_REGISTRY } from "../../config/builder/MODULE_REGISTRY";
import { useAppNavigate } from "../../core/router/useAppNavigate";
import { ACTION_GROUP } from "../../config/builder/actionCore";
import { toAction } from "../../core/router/routerSercive";
import "./bodyHeader.css";
import Search from "../search/search";

import btnList from "../../Assets/SVG/list.svg";
import btnKanban from "../../Assets/SVG/kanban.svg";
import nextPage from "../../Assets/SVG/nextPage.svg"
import prevPage from "../../Assets/SVG/prevPage.svg"
import btnCloseMark from "../../Assets/SVG/btnCloseMarkSearch.svg"
import settingAction from "../../Assets/SVG/settingAction.svg"



function BodyHeader({ context }) {
  const location = useLocation();
  const { go } = useAppNavigate();

  const [params, setParams] = useSearchParams();

  const {
    route,
    formStore,
    selectedIds,
    setselectedIds,

    viewRows,
    currentIndex,
    setCurrentIndex

  } = context || {};

  const formData = formStore?.formData;
  const segments = location.pathname.split("/").filter(Boolean);
  const [modulePath, viewPath] = segments;

  const isViewLevel = segments.length === 2;

  const isActionLevel =
    route?.action === "view" ||
    route?.action === "edit"

  const currentModule = MODULE_REGISTRY[modulePath];

  const currentView = currentModule?.views?.find(
    (v) => v.path === viewPath
  ) || [];


  const currentActions = route?.action
    ? `/ ${route.action}`
    : "";


  const viewType =
    params.get("view_type") ||
    currentView?.defaultView;

  const uiContext = {
    go,
    module: modulePath,
    view: viewPath,
    selectedIds,
    formData,
    id: route?.id,
    route
  };

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

  const handleNext = () => {
    const nextIndex = currentIndex + 1
    const nextRow =
      viewRows?.[nextIndex]
    if (!nextRow) return
    setCurrentIndex(nextIndex)
    go(
      toAction(
        route.module,
        route.view,
        "view",
        nextRow.id
      )
    )
  }

  const handlePrev = () => {
    const prevIndex = currentIndex - 1
    const prevRow =
      viewRows?.[prevIndex]
    if (!prevRow) return
    setCurrentIndex(prevIndex)
    go(
      toAction(
        route.module,
        route.view,
        "view",
        prevRow.id
      )
    )
  }

  if (!currentModule) return null;

  return (
    <div className="body-header">

      <div className="body-top">
        <div className={ACTION_GROUP.TOP_LEFT}>
          <div className="module-name">
            {currentView && (
              <h4 onClick={() => go({ module: modulePath, view: currentView.path, })} >
                {currentView.name}
              </h4>
            )}
            <span>{currentActions}</span>
          </div>
        </div>

        {isViewLevel && (
          <div className={ACTION_GROUP.TOP_RIGHT}>
            <Search />
          </div>
        )}

      </div>




      <div className="body-center">

        <div className={ACTION_GROUP.CENTER_LEFT}>
          {currentView.actions
            ?.filter(
              (action) =>
                action.group === ACTION_GROUP.CENTER_LEFT
            )
            ?.filter(
              (action) =>
                action.visible?.(uiContext) !== false
            )
            .map((action) => (
              <button
                key={action.key}
                onClick={() => action.handler(uiContext)}
              >
                {action.label}
              </button>
            ))}
        </div>

        <div className={ACTION_GROUP.CENTER_RIGHT}>
          {currentView.actions
            ?.filter(
              (action) =>
                action.group === ACTION_GROUP.CENTER_RIGHT
            )
            ?.filter(
              (action) =>
                action.visible?.(uiContext) !== false
            )
            .map((action) => (
              <button
                key={action.key}
                onClick={() => action.handler(uiContext)}
              >
                <img src={action.icon} />{action.label}
              </button>
            ))}
        </div>

      </div>




      <div className="body-bottom">

        <div className={ACTION_GROUP.BOTTOM_LEFT}>
          {currentView.actions
            ?.filter(
              (action) =>
                action.group === ACTION_GROUP.BOTTOM_LEFT
            )
            ?.filter(
              (action) =>
                action.visible?.(uiContext) !== false
            )
            .map((action) => (
              <button
                key={action.key}
                onClick={() => action.handler(uiContext)}
              >
                {action.label}
              </button>
            ))}
        </div>

        <div className={ACTION_GROUP.BOTTOM_CENTER}>
          {selectedIds.length > 0 && (
            <>
              <span>
                {selectedIds.length} selected
                <img src={btnCloseMark} onClick={() => setselectedIds([])} className={"x-selected"} />

              </span>
              <span className="selectedAction"><img src={settingAction} />action</span>
            </>
          )}
        </div>

        <div className={ACTION_GROUP.BOTTOM_RIGHT}>

          {isViewLevel && (
            <>
              <span
                className={viewType === "list" ? "active" : ""}
                onClick={handleListView}
              >
                <img src={btnList} />
              </span>

              <span
                className={viewType === "kanban" ? "active" : ""}
                onClick={handleKanbanView}
              >
                <img src={btnKanban} />
              </span>
            </>
          )}

          {isActionLevel && (
            <>
              <span>
                {currentIndex >= 0
                  ? `${currentIndex + 1} / ${viewRows?.length || 0}`
                  : "- / -"}
              </span>

              <img src={prevPage} onClick={handlePrev} />
              <img src={nextPage} onClick={handleNext} />
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default BodyHeader;