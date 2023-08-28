import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Orders from 'views/pages/orders/Orders';
import OneOrder from 'views/pages/orders/OneOrder';
import Category from 'views/pages/category/Category';
import AddCategory from 'views/pages/category/AddCategory';
import EditCategory from 'views/pages/category/EditCategory';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// order routing

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/orders',
      element: <Orders />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: '/orders/:id',
      element: <OneOrder />
    },
    {
      path: '/category',
      element: <Category />
    },
    {
      path: '/category/add',
      element: <AddCategory />
    },
    {
      path: '/category/edit/:id',
      element: <EditCategory />
    },
  ]
};

export default MainRoutes;
