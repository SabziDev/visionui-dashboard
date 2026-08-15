import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import Preloader from "./components/Preloader/Preloader";
import PrivateRoute from "./layouts/PrivateRoute";
import NotFound from "./pages/NotFound/page";
import Dashboard from "./pages/private/Dashboard/page";
import Signin from "./pages/public/Signin/page";

const Profile = lazy(() => import("./pages/private/Profile/page"));
const Tables = lazy(() => import("./pages/private/Tables/page"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,

    children: [
      {
        index: true,
        element: <Dashboard />,
        handle: {
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
  },

  {
    path: "*",
    element: <NotFound />,
    handle: {
      isHideLayout: true,
    },
  },
]);

export default router;
