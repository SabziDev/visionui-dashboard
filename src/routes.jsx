import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";

import Preloader from "./components/Preloader/Preloader";
import pagesMeta from "./data/pages-meta/pages-meta";
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
          pageMeta: { ...pagesMeta.dashboard },
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
          pageMeta: { ...pagesMeta.tables },
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
          pageMeta: { ...pagesMeta.profile },
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
      pageMeta: { ...pagesMeta.signin },
    },
  },

  {
    path: "*",
    element: <NotFound />,
    handle: {
      pageMeta: { ...pagesMeta.notFound },
    },
  },
]);

export default router;
