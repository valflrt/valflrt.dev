import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";

import Router from "./router/Router";
import Layout from "./layout/Layout";

import "./globalStyles.css";

ReactDOM.render(
  /**
   * HashRouter is a router using the "#" (hash) in the url
   * (example: `https://md-editor.valflrt.dev/#/editor`) instead of
   * simple adding slashes, I use it because BrowserRouter
   * doesn't work with github-pages because it requires a
   * fallback to index.html in case of 404 error
   *
   * If you want to use BrowserRouter instead of HashRouter,
   * go ahead and replace HashRouter by BrowserRouter in the
   * code below
   */
  <HashRouter>
    <Layout>
      <Router />
    </Layout>
  </HashRouter>,
  document.getElementById("root")
);
