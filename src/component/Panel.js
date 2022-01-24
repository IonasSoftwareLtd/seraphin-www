import CN from "classnames";
import React from "react";

export function Panel({
  children,
  header,
  content,
  className,
  headerId,
  headerLevel = 2,
}) {
  const Tag = `h${headerLevel}`;

  return (
    <div className={CN("panel", className)}>
      <div className="panel__inner">
        {header && (
          <Tag id={headerId} className="panel__header">
            {header}
          </Tag>
        )}
        {content && <div className="panel__content">{content}</div>}
        {children}
      </div>
    </div>
  );
}
