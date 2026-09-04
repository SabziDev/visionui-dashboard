import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import pagesSeo from "./data/pagesSeo/pagesSeo";
import Preloader from "./layouts/components/Preloader/Preloader";
import PrivateRoute from "./layouts/PrivateRoute";
import Signin from "./pages/auth/Signin/page";
import NotFound from "./pages/NotFound/page";
import Dashboard from "./pages/private/Dashboard/page";
import AppLoadError from "./services/components/AppLoadError/AppLoadError";
import { adminsQueryOpts } from "./services/features/admin/hooks/useAdmin/useAdmin";
import queryClient from "./services/queryClient";

const Profile = lazy(() => import("./pages/private/Profile/page"));
const Tables = lazy(() => import("./pages/private/Tables/page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    hydrateFallbackElement: <Preloader />,
    errorElement: <AppLoadError />,
    loader: async () => {
      await queryClient.prefetchQuery(adminsQueryOpts);
    },

    children: [
      {
        index: true,
        element: <Dashboard />,
        handle: {
          seo: pagesSeo.dashboard,
          breadcrumb: {
            pageTitle: "layouts.header.pagesTitle.dashboard",
            pagePath: "dashboard",
          },
        },
      },
      {
        path: "dashboard",
        element: <Navigate to="/" replace />,
      },

      {
        path: "tables",
        element: (
          <Suspense fallback={<Preloader />}>
            <Tables />
          </Suspense>
        ),
        handle: {
          seo: pagesSeo.tables,
          breadcrumb: {
            pageTitle: "layouts.header.pagesTitle.tables",
            pagePath: "tables",
          },
        },
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Preloader />}>
            <Profile />
          </Suspense>
        ),
        handle: {
          seo: pagesSeo.profile,
          breadcrumb: {
            pageTitle: "layouts.header.pagesTitle.profile",
            pagePath: "profile",
          },
        },
      },
    ],
  },

  {
    path: "/signin",
    element: <Signin />,
    hydrateFallbackElement: <Preloader />,
    errorElement: <AppLoadError />,
    loader: async () => {
      await queryClient.prefetchQuery(adminsQueryOpts);
    },
    handle: {
      seo: pagesSeo.signin,
    },
  },

  {
    path: "*",
    element: <NotFound />,
    handle: {
      seo: pagesSeo.notFound,
    },
  },
]);

export default router;
