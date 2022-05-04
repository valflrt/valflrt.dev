import React from "react";

const Link: React.FC<
  Omit<React.HTMLProps<HTMLSpanElement>, "onClick"> & { to: string | URL }
> = (props) => {
  let { to, ...filteredProps } = props;

  let handleClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();
    window.location.assign(to);
  };

  return <span onClick={handleClick} {...filteredProps} />;
};

export default Link;
