import { useEffect, useRef, useState } from "react"

import HeaderSection from "./HeaderSection/HeaderSection"
import NavbarSection from "./NavbarSection/NavbarSection"
import WorkspaceSection from "./WorkspaceSection/WorkspaceSection"

export default function RootLayout({ module }) {
  const [showDropdown, setShowDropdown] = useState(null)
  const wrapperRef = useRef(null)
  useEffect(() => {

    const handleClickOutside = (e) => {
      module.actDropdownOutside(e, wrapperRef, setShowDropdown)
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }

  }, [module])

  const ui =
    module?.payload?.ui || {}

  const core =
    module?.payload?.core || {}

  const vt =
    !module.vt
      ? module.vtDefault
      : module.vt

  return (
    <>
      {
        ui.header && (
          <HeaderSection
            viewType={vt}
            dataUi={ui.header}
            headerLeft={ui.header.left}
            headerCenter={ui.header.center}
            headerRight={ui.header.right}

            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            wrapperRef={wrapperRef}
          />
        )
      }

      {
        ui.navbar && (
          <NavbarSection
            viewType={vt}
            dataUi={ui.navbar}

            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            wrapperRef={wrapperRef}
          />
        )
      }

      {
        ui.workspace && (
          <WorkspaceSection
            viewType={vt}
            dataUi={ui.workspace}

            actDropdown={module.actDropdown}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            wrapperRef={wrapperRef}
          />
        )
      }
    </>
  )
}