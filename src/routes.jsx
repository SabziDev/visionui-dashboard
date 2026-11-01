/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @sabzidev/sort-props */

import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import pagesSeo from "./data/pagesSeo/pagesSeo";
import Preloader from "./layouts/components/Preloader/Preloader";
import PrivateRoute from "./layouts/PrivateRoute";
import SigninPage from "./pages/auth/Signin/page";
import NotFoundPage from "./pages/NotFound/page";
import DashboardPage from "./pages/private/Dashboard/page";
import AppLoadError from "./services/components/AppLoadError/AppLoadError";
import { adminsQueryOpts as adminsQueryOptions } from "./services/features/admin/hooks/useAdmin/useAdmin";
import queryClient from "./services/queryClient";

const ProfilePage = lazy(() => import("./pages/private/Profile/page"));
const TablesPage = lazy(() => import("./pages/private/Tables/page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    hydrateFallbackElement: <Preloader />,
    errorElement: <AppLoadError />,
    loader: async () => {
      await queryClient.prefetchQuery(adminsQueryOptions);
    },

    children: [
      {
        index: true,
        element: <DashboardPage />,
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
            <TablesPage />
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
            <ProfilePage />
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
    element: <SigninPage />,
    hydrateFallbackElement: <Preloader />,
    errorElement: <AppLoadError />,
    loader: async () => {
      await queryClient.prefetchQuery(adminsQueryOptions);
    },
    handle: {
      seo: pagesSeo.signin,
    },
  },

  {
    path: "*",
    element: <NotFoundPage />,
    handle: {
      seo: pagesSeo.notFound,
    },
  },
]);

export default router;
