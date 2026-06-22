import AppGrid from "../../ViewType/AppGrid/AppGrid";
import Kanban from "../../ViewType/Kanban/kanban";
import List from "../../ViewType/List/List";
import Form from "../../ViewType/Form/Form";

import "./WorkspaceSection.css";

function WorkspaceSection({
  dataUi,
  vt,
  vtDefault,
  showDropdown,
  setShowDropdown,
  wrapperRef,
  actDropdown,
}) {
  const registry = {
    appgrid: AppGrid,
    kanban: Kanban,
    list: List,
    form: Form,
  };
  const Component = registry[vt()] || registry[vtDefault];
  console.log(vtDefault);
  return (
    <div className="workspace-section">
      <Component
        identity={dataUi.map((i) => i.identity)}
        action={dataUi.map((a) => a.action)}
        dropdown={dataUi.map((d) => d.dropdown)}
        content={dataUi.map((c) => c.content)}
        realtime={dataUi.map((r) => r.realtime)}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
        wrapperRef={wrapperRef}
        actDropdown={actDropdown}
      />
    </div>
  );
}

export default WorkspaceSection;
