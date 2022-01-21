import CN from "classnames";
import React from "react";

export function Panel({ children, header, content, className, headerId }) {
  return (
    <div className={CN("panel", className)}>
      <div className="panel__inner">
        {header && <h1 id={headerId} className="panel__header">{header}</h1>}
        {content && <div className="panel__content">{content}</div>}
        {children}
      </div>
    </div>
  );
}
