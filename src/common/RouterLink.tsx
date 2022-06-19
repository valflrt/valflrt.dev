import { Link, LinkProps, useMatch } from "react-router-dom";

const RouterLink: React.FC<
  Omit<LinkProps, "className" | "to"> & {
    to: string;
    className: (isFocused: boolean) => string;
  }
> = (props) => {
  let { className, ...filteredProps } = props;
  let isFocused = !!useMatch({ path: props.to, end: true });

  return (
    <Link
      className={className ? className(isFocused) : undefined}
      {...filteredProps}
    />
  );
};

export default RouterLink;
