import CN from "classnames";
import React from "react";

export function GridRow({
  children,
  image,
  className,
  topAlign = false,
  imageFirst = false,
}) {
  return (
    <div className={CN("row", { "row--top-align": topAlign }, className)}>
      {imageFirst && image}
      <div className="row__text">{children}</div>
      {!imageFirst && image}
    </div>
  );
}
