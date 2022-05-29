import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import Routes from "./routes";
import Layout from "./components/Layout";

import "./index.scss";

ReactDOM.render(
  <HashRouter>
    <Layout>
      <div className={"main"}>
        <Routes />
      </div>
    </Layout>
  </HashRouter>,
  document.getElementById("root")
);
