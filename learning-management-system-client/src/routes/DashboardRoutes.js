// project import
import { lazy } from 'react';
import Loadable from "../components/suspense/Loadable";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import MainLayout from "../layout/mainLayout/MainLayout";
import CourseManagement from '../pages/dashboard/courseManagement';
import InstructorDetails from '../pages/dashboard/instructors/instructorDetails';
import InstructorsList from '../pages/dashboard/instructors/instructorList';
import InstructorOverview from '../pages/dashboard/instructors/instructorOverview';
import InstructorPayment from '../pages/dashboard/instructors/instructorPayment';

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
      path: "/dashboard/about",
      element: <About />,
    },
    {
      path: "/dashboard/course-list",
      element: <CourseManagement />,
    },
    {
      path: "/dashboard/instructor-list",
      element: <InstructorsList />,
    },
    {
      path: "/dashboard/instructor-details",
      element: <InstructorDetails />,
    },
    {
      path: "/dashboard/instructor-payment",
      element: <InstructorPayment />,
    },
    {
      path: "/dashboard/instructor-overview",
      element: <InstructorOverview />,
    },
  ],
};

export default DashboardRoutes;
