import React from "react";
import { PageHeader } from "../component/PageHeader";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";

export default function About() {
  return (
    <PageLayout>
      <div className="first-panel">
        <PageHeader />
        <Panel
          header="Cookies"
          content={
            <>
              <p>{"TEXT".repeat(100)}</p>
            </>
          }
          className="panel--centered"
        ></Panel>
      </div>
    </PageLayout>
  );
}
