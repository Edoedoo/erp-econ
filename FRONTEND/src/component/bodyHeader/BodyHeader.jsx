import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { MENU_LIST } from "../../config/menuConfig"

import { getAvailableActions } from "../../config/actionEngine"
import { groupActions } from "../../config/groupEngine"

import { toView } from "../../core/router/routerSercive"
import { useAppNavigate } from "../../core/router/useAppNavigate"

import "./bodyHeader.css"
import Search from "../search/search"

import btnList from "../../Assets/SVG/list.svg"
import btnKanban from "../../Assets/SVG/kanban.svg"

function BodyHeader() {

  const location = useLocation()
  const navigate = useNavigate()
  const { go } = useAppNavigate()

  const [params, setParams] = useSearchParams()
  const updateParams = (callback) => {
    const next = new URLSearchParams(params)
    callback(next)
    setParams(next)
  }
  
  const handleListView = () => {
    updateParams(p => p.set("view_type", "list"))
  }
  
  const handleKanbanView = () => {
    updateParams(p => p.set("view_type", "kanban"))
  }

  const segments = location.pathname.split("/").filter(Boolean)
  const [modulePath, viewPath] = segments
  
  const isViewLevel = segments.length === 2

  const currentMenu = MENU_LIST.find(item =>
    item.module?.path === modulePath
  )

  const currentView = currentMenu?.module?.views?.find(
    view => view.path === viewPath
  )
  const viewType = params.get("view_type") || currentView?.defaultView

  const selectedIds = []

  const context = {
    navigate, 
    go,       
    module: modulePath,
    view: viewPath,
    selectedIds
  }

  const rawActions = currentView?.actions || {}

  const flatActions = Object.values(rawActions)
    .flat()
    .filter(Boolean)

  const available = getAvailableActions({
    actions: flatActions,
    selectedIds
  })

  const grouped = groupActions(available)

  return (
    <div className="body-header">

      {/* ================= TOP ================= */}
      <div className="body-top">

        <div className="body-left">
          <div className="module-name">
            <h4>{currentMenu?.name || ""}</h4>

            {currentView && (
              <span
                onClick={() =>
                  go(toView(currentMenu.key, currentView.key))
                }
              >
                / {currentView.name}
              </span>
            )}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="body-right">
          <Search />
        </div>

      </div>

      {/* ================= CENTER ACTION ================= */}
      <div className="body-center">

        <div className="action-primary">
          {grouped.mainActions?.map(action => (
            <button
              key={action.key}
              className="btn-primary"
              onClick={() => action.handler(context)}
            >
              {action.label}
            </button>
          ))}
        </div>

        <div className="action-secondary">
          {grouped.listActions?.map(action => (
            <button
              key={action.key}
              className="btn-secondary"
              onClick={() => action.handler(context)}
            >
              {action.label}
            </button>
          ))}
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="body-bottom">
      {selectedIds.length > 0 && (
          <div className="body-bottom-left">

            <div className="action-contextual">
              {grouped.selectionActions?.map(action => (
                <button
                  key={action.key}
                  className="btn-secondary"
                  onClick={() => action.handler(context)}
                >
                  {action.label}
                </button>
              ))}
            </div>

            <div className="action-bulk">
              {grouped.bulkActions?.map(action => (
                <button
                  key={action.key}
                  className="btn-bulk-secondary"
                  onClick={() => action.handler(context)}
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
  )
}

export default BodyHeader