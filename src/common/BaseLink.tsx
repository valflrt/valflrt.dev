import React from "react";

export type BaseLinkProps = Omit<
  React.HTMLProps<HTMLSpanElement>,
  "onClick"
> & {
  toDo: () => any;
  toAwait?: (resolve: (value?: unknown) => void) => void;
};

const BaseLink: React.FC<BaseLinkProps> = (props) => {
  let { toDo, toAwait, ...filteredProps } = props;

  let handleClick: React.MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.preventDefault();
    if (props.toAwait) await new Promise(props.toAwait);
    toDo();
  };

  return <span onClick={handleClick} {...filteredProps} />;
};

export default BaseLink;
