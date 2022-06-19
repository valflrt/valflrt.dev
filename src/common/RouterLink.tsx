import { Link, LinkProps } from "react-router-dom";

const RouterLink: React.FC<LinkProps> = (props) => {
  return <Link {...props} />;
};

export default RouterLink;
