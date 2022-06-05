import BaseLink from "./BaseLink";

const Link: React.FC<
  Omit<React.HTMLProps<HTMLSpanElement>, "onClick"> & {
    to: string | URL;
    target?: "_blank" | "_self";
  }
> = (props) => {
  let { to, target, ...filteredProps } = props;

  let toDo = () => {
    window.open(to, target ?? "_self");
  };

  return <BaseLink toDo={toDo} {...filteredProps} />;
};

export default Link;
