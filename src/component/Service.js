import CN from "classnames";
import React from "react";

export function ServiceList({ children, className }) {
  return <div className={CN("service-list", className)}>{children}</div>;
}

export function Service({ children, header, content, className, icon }) {
  return (
    <div className={CN("service", className)}>
      <div className="service__inner">
        {icon && <div className="service__icon">{icon}</div>}
        <div className="service__content">
          {header && <h1 className="service__header">{header}</h1>}
          {content && <div>{content}</div>}
          {children}
        </div>
      </div>
    </div>
  );
}
