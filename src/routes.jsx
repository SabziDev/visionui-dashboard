import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import PrivateRoute from "./layouts/PrivateRoute";
import NotFound from "./pages/NotFound/page";
import Dashboard from "./pages/private/Dashboard/page";
import Signin from "./pages/public/Signin/page";

const Billing = lazy(() => import("./pages/private/Billing/page"));
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
          pageTitle: "layouts.header.pagesTitle.dashboard",
          pagePath: "dashboard",
        },
      },
      {
        path: "dashboard",
        element: <Navigate to="/" replace />,
        handle: {
          pageTitle: "layouts.header.pagesTitle.dashboard",
          pagePath: "dashboard",
        },
      },

      {
        path: "tables",
        element: <Tables />,
        handle: {
          pageTitle: "layouts.header.pagesTitle.tables",
          pagePath: "tables",
        },
      },
      {
        path: "billing",
        element: <Billing />,
        handle: {
          pageTitle: "layouts.header.pagesTitle.billing",
          pagePath: "billing",
        },
      },
      {
        path: "profile",
        element: <Profile />,
        handle: {
          pageTitle: "layouts.header.pagesTitle.profile",
          pagePath: "profile",
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
      isPage404: true,
      isHideLayout: true,
    },
  },
]);

export default router;
