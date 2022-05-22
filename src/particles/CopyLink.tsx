import React from "react";
import toast from "react-hot-toast";

import BaseLink from "./BaseLink";

// Used to create a link that copies some text to clipboard
const CopyLink: React.FC<
  Omit<React.HTMLProps<HTMLSpanElement>, "onClick"> & {
    textToCopy: string;
    notificationTimeout?: number;
  }
> = (props) => {
  let { textToCopy, notificationTimeout, ...filteredProps } = props;

  let toDo = () => {
    navigator.clipboard.writeText(props.textToCopy).then(() => {
      toast("Copied !", { duration: notificationTimeout ?? 2e3 });
    });
  };

  return <BaseLink toDo={toDo} {...filteredProps} />;
};

export default CopyLink;
