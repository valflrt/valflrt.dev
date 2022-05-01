import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import Routes from "./routes";
import Layout from "./layout/Layout";

import "./globalStyles.scss";

ReactDOM.render(
  <HashRouter>
    <Layout>
      <Routes />
    </Layout>
  </HashRouter>,
  document.getElementById("root")
);
