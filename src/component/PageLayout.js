import React from "react";
import { Meta } from "./Meta";
import { PageFooter } from "./PageFooter";
import { PageHeader } from "./PageHeader";

export function PageLayout({ children, title }) {
  return (
    <div className="page">
      <Meta title={title} />
      <PageHeader />
      <div className="page__content">{children}</div>
      <PageFooter />
    </div>
  );
}
