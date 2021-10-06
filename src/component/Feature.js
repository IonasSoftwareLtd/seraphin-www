import CN from "classnames";
import React from "react";

export function FeatureList({ children, className }) {
  return <div className={CN("feature-list", className)}>{children}</div>;
}

export function Feature({ children, header, content, className, icon }) {
  return (
    <div className={CN("feature", className)}>
      <div className="feature__inner">
        {icon && <div className="feature__header">{icon}</div>}
        {header && <h1 className="feature__header">{header}</h1>}
        {content && <div>{content}</div>}
        {children}
      </div>
    </div>
  );
}
