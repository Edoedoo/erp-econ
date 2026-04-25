import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MENU_LIST } from "./config/menuConfig"

import AppLayout from "./core/layout/AppLayout"
import BodyLayout from "./core/layout/BodyLayout"

import Menu from "./modules/menu/menu"
import NotFound from "./component/404page.jsx/404page"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AppLayout />}>

          {/* HOME */}
          <Route index element={<Menu />} />

          {/* MODULE LOOP */}
          {MENU_LIST.map(item => {
            const modulePath = item.module?.path
            const ModulePage = item.module?.element
            const views = item.module?.views || []

            if (!modulePath) return null

            return (
              <Route
                key={item.key}
                path={`${modulePath}/*`}
                element={<BodyLayout />}
              >

                {/* MODULE INDEX */}
                {ModulePage && (
                  <Route index element={<ModulePage />} />
                )}

                {/* VIEW LOOP */}
                {views.map(view => {
                  if (!view) return null

                  const ViewPage =
                    view.element || (() => <div><NotFound /></div>)

                  const actions = (view.actions || []).filter(
                    action => action && action.path
                  )

                  return (
                    <Route
                      key={view.key}
                      path={`${view.path}/*`}
                      element={<ViewPage />}
                    >

                      {/* ACTION LOOP */}
                      {actions.map(action => {
                        if (!action) return null

                        const ActionPage =
                          action.element || (() => <div><NotFound /></div>)

                        return (
                          <Route
                            key={action.key || action.path}
                            path={action.path}
                            element={<ActionPage />}
                          />
                        )
                      })}

                    </Route>
                  )
                })}

                {/* MODULE NOT FOUND */}
                <Route path="*" element={<NotFound />} />

              </Route>
            )
          })}

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App