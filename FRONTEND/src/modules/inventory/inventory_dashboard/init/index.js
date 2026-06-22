import { params } from "../../../../helper/paramsQuery";
import { inventaryDashboardDefault } from "../registry/inventaryDashboardDefault";

export const initInventaryDashboard = {
  id: "inventory_dashboard",
  route: "/inventory",
  vt: params.vt(),
  vtDefault: "kanban",
  view: "",
  payload: inventaryDashboardDefault,
};
