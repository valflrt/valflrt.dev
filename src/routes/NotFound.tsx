import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h1>404</h1>
    <p>There's nothing here !</p>
    <Link to={"/"}>Back home</Link>
  </>
);

export default NotFound;