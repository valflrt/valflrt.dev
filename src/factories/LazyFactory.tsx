import React from "react";
import Lazy, { LazyProps } from "../specific/Lazy";

const LazyFactory = <T extends Partial<LazyProps>>(customProps: T) => {
  let CustomLazy: React.FC<Omit<LazyProps, keyof T>> = (props) => {
    return <Lazy {...(customProps as LazyProps)} {...props} />;
  };
  return CustomLazy;
};

export default LazyFactory;
