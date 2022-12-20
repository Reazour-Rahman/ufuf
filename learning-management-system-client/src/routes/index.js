import { useRoutes } from "react-router-dom";

// project import
// import AuthenticationRoutes from "./AuthenticationRoutes";
import MainRoutes from "./MainRoutes";
// import DashboardRoutes from "./DashboardRoutes";

// ==========|| ROUTING RENDER ||========= //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes]);
}
/* , AuthenticationRoutes, DashboardRoutes */
