import React from "react";
import { ContentWrapper } from "../component/ContentWrapper";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";

export default function About() {
  return (
    <PageLayout>
      <Panel header="About Seraphin">
        <ContentWrapper>
          <p>
            Seraphin is the supplier of sensors and gateways products for
            capturing temperature data in order to be complient with food and
            healthcare industries regulations.
          </p>
          <p>
            Our secure and performant technology utilizing cloud based
            architecture to store and retrieve realtime data anywhere in the
            world.
          </p>
        </ContentWrapper>
      </Panel>
    </PageLayout>
  );
}
