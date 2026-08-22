import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import Preloader from "./components/Preloader/Preloader";
import pagesSeo from "./data/pagesSeo/pagesSeo";
import PrivateRoute from "./layouts/PrivateRoute";
import NotFound from "./pages/NotFound/page";
import Dashboard from "./pages/private/Dashboard/page";
import Signin from "./pages/public/Signin/page";
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
