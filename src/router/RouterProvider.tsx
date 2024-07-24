import {
  createBrowserRouter,
  Outlet,
  RouterProvider as RootRouterProvider,
} from 'react-router-dom';
import IssuesPage from '../pages/Issues';
import Layout from '../pages/Layout';
import MainPage from '../pages/Main';
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
        element: <MainPage />,
      },
      {
        path: routes.issues.index,
        element: <IssuesPage />,
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
