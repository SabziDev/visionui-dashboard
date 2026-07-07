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
      },
      {
        path: "dashboard",
        element: <Navigate to="/" replace />,
      },

      {
        path: "tables",
        element: <Tables />,
      },
      {
        path: "billing",
        element: <Billing />,
      },
      {
        path: "profile",
        element: <Profile />,
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
