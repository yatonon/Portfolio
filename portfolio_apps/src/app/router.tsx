import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { paths } from '@/config/paths';

const basename = import.meta.env.MODE === 'production' ? import.meta.env.BASE_URL : undefined;

const router = createBrowserRouter(
  [
    {
      path: paths.home.path,
      lazy: async () => {
        const { HomeRoute } = await import('./routes/index');
        return { Component: HomeRoute };
      },
    },
    {
      path: paths.work.path,
      lazy: async () => {
        const { WorkRoute } = await import('./routes/project');
        return { Component: WorkRoute };
      },
    },
    {
      path: paths.selfwork.path,
      lazy: async () => {
        const { WorkRoute } = await import('./routes/project');
        return { Component: WorkRoute };
      },
    },
  ],
  {
    basename,
  }
);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};
