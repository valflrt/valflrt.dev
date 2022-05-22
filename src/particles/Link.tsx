import BaseLink from "./BaseLink";

const RouterLink: React.FC<
  Omit<React.HTMLProps<HTMLSpanElement>, "onClick"> & {
    to: string | URL;
  }
> = (props) => {
  let { to, ...filteredProps } = props;

  let toDo = () => {
    window.location.assign(to);
  };

  return <BaseLink toDo={toDo} {...filteredProps} />;
};

export default RouterLink;
