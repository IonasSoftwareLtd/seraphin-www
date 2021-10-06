import CN from "classnames";
import React from "react";

export function ContentWrapper({ children, className }) {
  return <div className={CN("content-wrapper", className)}>{children}</div>;
}
