import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";
import Router from "./router/Router";

import GlobalStyles from "./global.styles";

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);
