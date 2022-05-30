import React from "react";
import { Route, Routes as RouteGroup } from "react-router-dom";

const Main = React.lazy(() => import("./Main"));
const Projects = React.lazy(() => import("./Projects"));
const ExternalLinks = React.lazy(() => import("./ExternalLinks"));
const NotFound = React.lazy(() => import("./NotFound"));

import "./Routes.scss";

const Routes = () => (
  <div className={"main"}>
    <React.Suspense fallback={null}>
      <RouteGroup>
        <Route path={"/"} element={<Main />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/external-links"} element={<ExternalLinks />} />
        <Route path={"*"} element={<NotFound />} />
      </RouteGroup>
    </React.Suspense>
  </div>
);

export default Routes;
