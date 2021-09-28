import CN from "classnames";
import React from "react";

export function Panel({ children, header, content, className }) {
  return (
    <div className={CN("panel", className)}>
      <div className="panel__inner">
        {header && <h1 className="panel__header">{header}</h1>}
        {content && <div>{content}</div>}
        {children}
      </div>
    </div>
  );
}
