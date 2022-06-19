export type LinkProps = Omit<React.HTMLProps<HTMLAnchorElement>, "onClick"> & {
  to: string;
};

const Link: React.FC<LinkProps> = (props) => {
  let { to, ...filteredProps } = props;

  return <a href={to} {...filteredProps}></a>;
};

export default Link;
