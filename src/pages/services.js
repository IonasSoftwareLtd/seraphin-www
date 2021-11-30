import React from "react";
import { PageHeader } from "../component/PageHeader";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";

export default function Services() {
  return (
    <PageLayout>
      <div className="first-panel">
        <PageHeader />
        <Panel
          header="Our services"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit
          temporibus possimus soluta, velit reprehenderit harum, corporis neque
          voluptate modi quisquam, culpa ab in reiciendis et officiis! Culpa,
          natus voluptates."
          className="panel--centered"
        ></Panel>
      </div>
    </PageLayout>
  );
}
