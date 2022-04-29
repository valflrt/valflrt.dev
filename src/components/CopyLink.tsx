import { FC, HTMLProps, useEffect, useState } from "react";

import { omit } from "../utils";

// Used to create a link that copies some text to clipboard
const CopyLink: FC<
  HTMLProps<HTMLAnchorElement> & {
    textToCopy: string;
    infoDelay?: number;
  }
> = (props) => {
  let { textToCopy, infoDelay, ...filteredProps } = omit(props, "onClick");

  let [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (showConfirm) setTimeout(() => setShowConfirm(false), infoDelay ?? 1000);
  }, [showConfirm]);

  let handleClick = () =>
    navigator.clipboard
      .writeText(props.textToCopy)
      .then(() => setShowConfirm(true));

  return (
    <span
      {...filteredProps}
      children={!showConfirm ? props.children : "Copied !"}
      onClick={handleClick}
    />
  );
};

export default CopyLink;
