import { Outlet } from "react-router-dom"
import Header from "../../component/header/Header"

import "./layout.css"

function AppLayout() {

  return (
    <div id="appLayout">
  
      <header id="header">
        <Header />
      </header>

      <main id="main">
        <Outlet />
      </main>

    </div>
  )
}

export default AppLayout