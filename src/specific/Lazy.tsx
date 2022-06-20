import React from "react";

export type LazyProps = {
  importPromise: () => Promise<{ default: (props: any) => JSX.Element }>;
  loadStart?: () => unknown;
  loadEnd?: () => unknown;
};

const Lazy: React.FC<LazyProps> = (props) => {
  let { importPromise, loadStart, loadEnd } = props;

  let [element, setElement] = React.useState<JSX.Element | null>(null);

  React.useEffect(() => {
    setElement(null);
    if (loadStart) loadStart();
    importPromise().then((i) => {
      if (loadEnd) loadEnd();
      setElement(i.default(props));
    });
  }, [importPromise]);

  return element;
};

export default Lazy;
