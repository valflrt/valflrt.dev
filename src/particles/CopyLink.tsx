import React from "react";
import toast from "react-hot-toast";

// Used to create a link that copies some text to clipboard
const CopyLink: React.FC<
  Omit<React.HTMLProps<HTMLSpanElement>, "onClick"> & {
    textToCopy: string;
    infoDelay?: number;
  }
> = (props) => {
  let { textToCopy, infoDelay, ...filteredProps } = props;

  let handleClick: React.MouseEventHandler<HTMLSpanElement> = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(props.textToCopy).then(() => {
      toast("Copied !", { duration: 2e3 });
    });
  };

  return <span onClick={handleClick} {...filteredProps} />;
};

export default CopyLink;
