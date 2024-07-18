import {
  createBrowserRouter,
  Outlet,
  RouterProvider as RootRouterProvider,
} from 'react-router-dom';
import HomePage from '../pages/Home';
import Layout from '../pages/Layout';
import NotFoundPage from '../pages/NotFound';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routes.tasks.index,
        element: <h2>{routes.tasks.index}</h2>,
      },
      {
        path: routes.designers.index,
        element: <h2>{routes.designers.index}</h2>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default function RouterProvider() {
  return <RootRouterProvider router={router} />;
}
