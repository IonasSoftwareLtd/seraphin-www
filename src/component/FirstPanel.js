import React from "react";
import { PageHeader } from "../component/PageHeader";

export function FirstPanel({ children }) {
  return (
    <div className="first-panel">
      <PageHeader />
      {children}
    </div>
  );
}
