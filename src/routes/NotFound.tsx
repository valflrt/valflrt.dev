import { Link } from "react-router-dom";

import "./NotFound.scss";

const NotFound = () => (
  <>
    <h1 className={"fortyHundredAndFour"}>404</h1>
    <p>There's nothing here !</p>
    <Link className={"link"} to={"/"}>
      Back home
    </Link>
  </>
);

export default NotFound;
