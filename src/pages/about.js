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
          header="About Seraphin Monitoring Platform"
          content={
            <>
              <p>
                Seraphin Monitoring Platform is a comprehensive IoT (Internet of
                Things) software platform developed to provide real-time
                monitoring and rapid alert capability.
              </p>
              <p>
                The system is designed to protect your assets. It achieves that
                by sending telemetry data from variety of supported sensors to
                the Seraphin cloud servers. Incoming data is evaluated against
                user defined rules. If rule conditions are met, the notification
                in the form of email, text message or a phone call is triggered
                to inform the user about alarm condition. All sensor-sent
                telemetry data is stored in the cloud and available for live and
                retrospective view via a mobile friendly and secure web portal.
              </p>
            </>
          }
          className="panel--centered"
        ></Panel>
      </div>
    </PageLayout>
  );
}
