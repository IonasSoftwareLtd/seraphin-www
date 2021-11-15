import React from "react";
import { Meta } from "./Meta";
import { PageFooter } from "./PageFooter";

export function PageLayout({ children, title, pageHeader }) {
  return (
    <div className="page" id="outer-container">
      <Meta title={title} />
      {pageHeader}
      {/* <PageHeader /> */}
      <div className="page__content" id="page-wrap">{children}</div>
      <PageFooter />
    </div>
  );
}
