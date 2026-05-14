// import SidebarSection from "@/sections/sidebar/SidebarSection"
// import HeaderSection from "@/sections/header/HeaderSection"
// import NavbarSection from "@/sections/navbar/NavbarSection"
// import WorkspaceSection from "@/sections/workspace/WorkspaceSection"

export default function RootLayout() {
  return (
    <div className="root-layout">

      <aside className="layout-sidebar">
        {/* <SidebarSection /> */}
      </aside>

      <div className="layout-main">

        <header className="layout-header">
          {/* <HeaderSection /> */}
        </header>

        <nav className="layout-navbar">
          {/* <NavbarSection /> */}
        </nav>

        <main className="layout-workspace">
          {/* <WorkspaceSection /> */}
        </main>

      </div>

    </div>
  )
}