import { RouterProvider, createBrowserRouter, BrowserRouter } from 'react-router-dom';
import { paths } from '@/config/paths';


const router = createBrowserRouter([
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
    // {
    //   path: paths.article.path,
    //   lazy: async () => {
    //     const { ArticleRoute } = await import('./routes/article');
    //     return { Component: ArticleRoute };
    //   },
    // },
    // {
    //   path: '*',
    //   lazy: async () => {
    //     const { NotFoundRoute } = await import('./routes/not-found');
    //     return {
    //       Component: NotFoundRoute,
    //     };
    //   },
    // },
  ],
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouterProvider router={router} />
    </BrowserRouter>
  );
};