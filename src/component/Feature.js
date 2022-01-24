import CN from "classnames";
import React from "react";

export function FeatureList({ children, className }) {
  return <div className={CN("feature-list", className)}>{children}</div>;
}

export function Feature({
  children,
  header,
  headerLevel = 3,
  content,
  className,
  icon,
}) {
  const Tag = `h${headerLevel}`;

  return (
    <div className={CN("feature", className)}>
      <div className="feature__inner">
        {icon && <div className="feature__header">{icon}</div>}
        {header && <Tag className="feature__header">{header}</Tag>}
        {content && <div>{content}</div>}
        {children}
      </div>
    </div>
  );
}
