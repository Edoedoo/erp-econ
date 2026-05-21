
import module from "../harbor/init"
import RootLayout from "./RootLayout/RootLayout"
import NotFound from "../component/404page.jsx/404page"

function App() {
  return (
    <>
      {module.activeModule === undefined || "" || null
        ? <NotFound pathname={module.pathname} />
        : <RootLayout
          module={module.activeModule}
        />
      }
    </>
  )
}

export default App