import React from "react";
import { FirstPanel } from "../component/FirstPanel";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";

export default function Home() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          className="panel--special"
          headerLevel={1}
          header="Page not found"
        ></Panel>
      </FirstPanel>
    </PageLayout>
  );
}
