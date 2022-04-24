import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

/**
 * The following enables lazy-loading: the code for the
 * routes will only be loaded when redirected to one of them
 *
 * If you don't want this feature (not recommended), replace
 * the following with:
 * ```typescript
 * import Main from "../routes/Main";
 * import NotFound from "../routes/NotFound";
 * ```
 * and remove the "Suspense" element in the Router declaration
 */
const Main = React.lazy(() => import("../routes/Main"));
const NotFound = React.lazy(() => import("../routes/NotFound"));

const Router = () => (
  <Suspense fallback={<>Loading ...</>}>
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default Router;
