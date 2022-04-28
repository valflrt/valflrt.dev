import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import Router from "./router/Router";
import Layout from "./layout/Layout";

import "./globalStyles.css";

ReactDOM.render(
  <HashRouter>
    <Layout>
      <Router />
    </Layout>
  </HashRouter>,
  document.getElementById("root")
);
