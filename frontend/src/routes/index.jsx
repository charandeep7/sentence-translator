import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Home } from "../pages";
import { LoadingScreen , Past } from "../components";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/past" , element: <Past /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const Page404 = Loadable(lazy(() => import("../pages/Page404")));
