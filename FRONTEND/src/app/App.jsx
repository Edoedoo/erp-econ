import { useEffect, useState } from "react"

import { initHarbor } from "../harbor/init"

import RootLayout from "./RootLayout/RootLayout"
import NotFound from "../component/404page.jsx/404page"

function App() {

  const [harbor, setHarbor] = useState(initHarbor.getState())
  useEffect(() => {
    return initHarbor.subscribe(setHarbor)
  }, [])
  return (
    <>
      {!harbor.activeModule
        ? (
          <NotFound
            pathname={harbor.pathname}
          />
        )
        : (
          <RootLayout
            module={harbor.activeModule}
          />
        )
      }
    </>
  )
}

export default App