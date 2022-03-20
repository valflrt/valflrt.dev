import React from "react";
import ReactDOM from "react-dom";

import Layout from "./layout/Layout";

import Main from "./components/Main";

import GlobalStyles from "./global.styles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Layout>
      <Main />
    </Layout>
  </>,
  document.getElementById("root")
);
