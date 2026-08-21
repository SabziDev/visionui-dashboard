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
          pageMeta: {
            title: "pagesMeta.dashboard.title",
            desc: "pagesMeta.dashboard.desc",
          },
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
          pageMeta: {
            title: "pagesMeta.tables.title",
            desc: "pagesMeta.tables.desc",
          },
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
          pageMeta: {
            title: "pagesMeta.profile.title",
            desc: "pagesMeta.profile.desc",
          },
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
      pageMeta: {
        title: "pagesMeta.notFound.title",
        desc: "pagesMeta.notFound.desc",
      },
    },
  },

  {
    path: "*",
    element: <NotFound />,
    handle: {
      pageMeta: {
        title: "pagesMeta.notFound.title",
        desc: "pagesMeta.notFound.desc",
      },
    },
  },
]);

export default router;
