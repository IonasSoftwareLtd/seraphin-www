import React from "react";
import { FirstPanel } from "../component/FirstPanel";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";

export default function About() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          header="Legal"
          headerLevel={1}
          content={
            <>
              <p>{"TEXT".repeat(100)}</p>
            </>
          }
          className="panel--centered"
        ></Panel>
      </FirstPanel>
    </PageLayout>
  );
}
