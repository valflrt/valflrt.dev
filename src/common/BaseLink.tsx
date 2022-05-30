import React from "react";

const BaseLink: React.FC<
  Omit<React.HTMLProps<HTMLSpanElement>, "onClick"> & {
    toDo: () => any;
    toAwait?: (resolve: (value?: unknown) => void) => void;
  }
> = (props) => {
  let { toDo, toAwait, ...filteredProps } = props;

  let handleClick: React.MouseEventHandler<HTMLSpanElement> = async (e) => {
    e.preventDefault();
    if (props.toAwait) await new Promise(props.toAwait);
    toDo();
  };

  return <span onClick={handleClick} {...filteredProps} />;
};

export default BaseLink;
