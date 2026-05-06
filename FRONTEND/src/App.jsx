import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MENU_LIST } from "./config/MENU_LIST"
import { MODULE_REGISTRY } from "./config/MODULE_REGISTRY"

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
            const modulePath = item.path
            const moduleConfig = MODULE_REGISTRY[modulePath]

            if (!modulePath || !moduleConfig) return null

            const ModulePage = moduleConfig.element
            const views = moduleConfig.views || []

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
                    view.element || (() => <NotFound page={`halaman ${view.name} sedang diperbaiki`}/>)
                   
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
                        const ActionPage =
                          action.element || (() => <NotFound page={`halaman ${actions.name} sedang diperbaiki`}/>)
                          
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
                <Route path="*" element={<NotFound page="kalian nyasar gatau kemana..."/>} />

              </Route>
            )
          })}

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App