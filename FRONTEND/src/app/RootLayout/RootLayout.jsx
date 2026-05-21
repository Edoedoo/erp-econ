

import HeaderSection from "./HeaderSection/HeaderSection"
import NavbarSection from "./NavbarSection/NavbarSection"
import WorkspaceSection from "./WorkspaceSection/WorkspaceSection"

export default function RootLayout({ module }) {
  const ui =
    module?.payload?.ui || {}
  return (
    <>
      {
        ui.header?.active && (
          <HeaderSection
            dataUI={ui.header}
          />
        )
      }

      {
        ui.navbar?.active && (
          <NavbarSection
            dataUI={ui.navbar}
          />
        )
      }

      {
        ui.workspace?.active && (
          <WorkspaceSection
            dataUI={ui.workspace}
          />
        )
      }
    </>
  )
}