

import HeaderSection from "./HeaderSection/HeaderSection"
import NavbarSection from "./NavbarSection/NavbarSection"
import WorkspaceSection from "./WorkspaceSection/WorkspaceSection"

export default function RootLayout({ module }) {
  const ui =
    module?.payload?.ui || {}
  const core =
    module?.payload?.core || {}

  return (
    <>
      {
        ui.header?.active && (
          <HeaderSection
            dataUi={ui.header}
          />
        )
      }

      {
        ui.navbar?.active && (
          <NavbarSection
            dataUi={ui.navbar}
          />
        )
      }

      {
        ui.workspace?.active && (
          <WorkspaceSection
            dataUi={ui.workspace}
          />
        )
      }


    </>
  )
}