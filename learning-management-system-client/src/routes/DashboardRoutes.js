// project import
import { lazy } from 'react';
import Loadable from "../components/suspense/Loadable";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import MainLayout from "../layout/mainLayout/MainLayout";

// render - dashboard
const Home = Loadable(lazy(() => import("../pages/home/index.js")));
const About = Loadable(lazy(() => import("../pages/about/index.js")));
const AuthLogin = Loadable(
  lazy(() => import("../pages//authentication/Login"))
);

// ==============================|| MAIN ROUTING ||============================== //

const DashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "dahsboardAbout",
      element: <About />,
    },
  ],
};

export default DashboardRoutes;
