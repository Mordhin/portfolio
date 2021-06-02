import React from "react";

export const Tag = (props) => {
  return <div className={props.type}>{props.children}</div>;
};
