import { lazy } from 'react';

// project import
import Loadable from '../components/suspense/Loadable';
import MainLayout from '../layout/mainLayout/MainLayout'

// render - dashboard
const Home = Loadable(lazy(() => import('../pages/home/index.js')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        }
    ],
};

export default MainRoutes;