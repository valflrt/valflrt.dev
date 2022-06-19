const Link: React.FC<
  Omit<React.HTMLProps<HTMLAnchorElement>, "onClick"> & {
    to: string;
  }
> = (props) => {
  let { to, ...filteredProps } = props;

  return <a href={to} {...filteredProps}></a>;
};

export default Link;
