import { useEffect, useRef, useState } from "react";

import HeaderSection from "./HeaderSection/HeaderSection";
import NavbarSection from "./NavbarSection/NavbarSection";
import WorkspaceSection from "./WorkspaceSection/WorkspaceSection";

export default function RootLayout({ module }) {
  const [showDropdown, setShowDropdown] = useState(null);
  const wrapperRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      module.actDropdownOutside(e, wrapperRef, setShowDropdown);
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [module]);

  const ui = module?.payload?.ui || {};

  const core = module?.payload?.core || {};

  return (
    <>
      {ui.header && (
        <HeaderSection
          vt={module.vt}
          vtDefault={module.vtDefault}
          dataUi={ui.header}
          headerLeft={ui.header.left}
          headerCenter={ui.header.center}
          headerRight={ui.header.right}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          wrapperRef={wrapperRef}
        />
      )}

      {ui.navbar && (
        <NavbarSection
          vt={module.vt}
          vtDefault={module.vtDefault}
          dataUi={ui.navbar}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          wrapperRef={wrapperRef}
        />
      )}

      {ui.workspace && (
        <WorkspaceSection
          vt={module.vt}
          vtDefault={module.vtDefault}
          dataUi={ui.workspace}
          actDropdown={module.actDropdown}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          wrapperRef={wrapperRef}
        />
      )}
    </>
  );
}
