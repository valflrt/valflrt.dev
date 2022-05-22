import { To, useNavigate } from "react-router-dom";

import BaseLink from "./BaseLink";

const RouterLink: React.FC<
  Omit<React.HTMLProps<HTMLSpanElement>, "onClick"> & {
    to: To;
  }
> = (props) => {
  let navigate = useNavigate();
  let { to, ...filteredProps } = props;

  let toDo = () => {
    navigate(to);
  };

  return <BaseLink toDo={toDo} {...filteredProps} />;
};

export default RouterLink;
