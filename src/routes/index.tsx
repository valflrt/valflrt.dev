import React from "react";
import { Route, Routes as RouteGroup } from "react-router-dom";

const Main = React.lazy(() => import("./Main"));
const Projects = React.lazy(() => import("./Projects"));
const Social = React.lazy(() => import("./Social"));
const NotFound = React.lazy(() => import("./NotFound"));

import "./Routes.scss";

const Routes = () => (
  <React.Suspense fallback={null}>
    <RouteGroup>
      <Route path={"/"} element={<Main />} />
      <Route path={"/projects"} element={<Projects />} />
      <Route path={"/social"} element={<Social />} />
      <Route path={"*"} element={<NotFound />} />
    </RouteGroup>
  </React.Suspense>
);

export default Routes;
