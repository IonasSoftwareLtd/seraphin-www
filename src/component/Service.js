import CN from "classnames";
import React from "react";

export function ServiceList({ children, className }) {
  return <div className={CN("service-list", className)}>{children}</div>;
}

export function Service({
  children,
  header,
  headerLevel = 2,
  content,
  className,
  icon,
}) {
  const Tag = `h${headerLevel}`;

  return (
    <div className={CN("service", className)}>
      <div className="service__inner">
        {icon && <div className="service__icon">{icon}</div>}
        <div className="service__content">
          {header && <Tag className="service__header">{header}</Tag>}
          {content && <div>{content}</div>}
          {children}
        </div>
      </div>
    </div>
  );
}
