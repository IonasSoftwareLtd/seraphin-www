import React from "react";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";
import { PageHeader } from '../component/PageHeader';

export default function Services() {
  return (
    <PageLayout>
      <div className="fist-panel">
        <PageHeader />
        <Panel header="Our services">Info here</Panel>
      </div>
    </PageLayout>
  );
}
