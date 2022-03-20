import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../routes/Main";

const Router = () => (
  <>
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"*"} element={<p>There's nothing here !</p>} />
    </Routes>
  </>
);

export default Router;
