import React from "react";
import { Meta } from "./Meta";
import { PageFooter } from "./PageFooter";
import { PageHeader } from "./PageHeader";

export function PageLayout({ children, title }) {
  return (
    <div className="page" id="outer-container">
      <Meta title={title} />
      <PageHeader />
      <div className="page__content" id="page-wrap">{children}</div>
      <PageFooter />
    </div>
  );
}
