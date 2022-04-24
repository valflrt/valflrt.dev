import { Link } from "react-router-dom";

/**
 * You can import images
 */
import logo from "../assets/logo-128.png";

const Main = () => (
  <>
    {/* imported image used here */}
    <img src={logo} alt="logo" />
    <h1>Heya !</h1>
    <p>This is a react template</p>
    {/* use react-router-dom `Link` to redirect properly */}
    <Link to={"/nothing"}>
      Go to <b>/nothing</b> to test 404 page
    </Link>
  </>
);

export default Main;
