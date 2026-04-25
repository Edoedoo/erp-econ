import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MENU_LIST } from "./config/menuConfig"
import AppLayout from "./core/layout/AppLayout"
import BodyLayout from "./core/layout/BodyLayout"
import Menu from "./modules/menu/menu"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<AppLayout />}>

          <Route index element={<Menu />} />

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
                {ModulePage && (
                  <Route index element={<ModulePage />} />
                )}

                {views.map(view => {
                  const Page = view.element || (() => <div>Coming Soon</div>)

                  return (
                    <Route
                      key={view.key}
                      path={view.path}
                      element={<Page />}
                    />
                  )
                })}
              </Route>
            )
          })}

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App