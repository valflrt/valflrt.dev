import { FC, HTMLProps, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { omit } from "../utils";

// Used to create a link that copies some text to clipboard
const CopyLink: FC<
  HTMLProps<HTMLAnchorElement> & {
    textToCopy: string;
    infoDelay?: number;
  }
> = (props) => {
  let { textToCopy, infoDelay, className, ...filteredProps } = omit(
    props,
    "onClick"
  );

  let handleClick = () =>
    navigator.clipboard.writeText(props.textToCopy).then(() => {
      toast("Copied !", { duration: 2e3 });
    });

  return (
    <span
      {...filteredProps}
      className={className}
      children={props.children}
      onClick={handleClick}
    />
  );
};

export default CopyLink;
