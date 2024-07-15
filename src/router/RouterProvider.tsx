import {
  createBrowserRouter,
  RouterProvider as RootRouterProvider,
} from 'react-router-dom';
import HomePage from '../pages/Home';
import NotFoundPage from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default function RouterProvider() {
  return <RootRouterProvider router={router} />;
}
