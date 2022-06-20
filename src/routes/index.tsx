import { Route, Routes as RouteGroup } from "react-router-dom";

import LazyFactory from "../factories/LazyFactory";

import useSpinner from "../hooks/useSpinner";

import "./Routes.scss";

let routes = [
  { path: "/", source: () => import("./Main") },
  { path: "/projects", source: () => import("./Projects") },
  { path: "/external-links", source: () => import("./ExternalLinks") },
  { path: "*", source: () => import("./NotFound") },
];

const Routes = () => {
  let setSpinnerState = useSpinner();

  let Lazy = LazyFactory({
    loadStart: () => setSpinnerState("visible"),
    loadEnd: () => setSpinnerState("hidden"),
  });

  return (
    <RouteGroup>
      {routes.map((r) => (
        <Route path={r.path} element={<Lazy importPromise={r.source} />} />
      ))}
    </RouteGroup>
  );
};

export default Routes;
