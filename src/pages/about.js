import React from "react";
import { ContactUsPanel } from "../component/ContactUsPanel";
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

      <Panel
        header="Our mobile friendly and secure web portal"
        content={
          <>
            <p>
              Monitor your sensors data and manage all aspects of your project
              from our user friendly web portal.
            </p>
          </>
        }
        className="panel--centered"
      >
        <div className="image-gallery">
          <img src="/app/admin-manager.png" />
          <img src="/app/admin-company.png" />
          <img src="/app/admin-sensors.png" />
          <img src="/app/admin-sensor-details.png" />
        </div>
      </Panel>
      <Panel
        header="Real world example"
        content={
          <>
            <p>
              Temperature in Seraphin monitored freezer rises above the user
              defined threshold of -70 degrees Celsius. Shortly after, the
              wireless temperature sensor attached to the freezer reads the
              temperature and transmits it to the Seraphin Cloud Server (SCS).
            </p>
            <p>
              The SCS executes the user defined test which compares the received
              reading against the predefined value of -70 degrees.
            </p>
            <p>
              The test criteria are met and the system triggers a phone call to
              i.e. a clients on-call engineer. The engineer answers the call,
              the system records the receipt of the alert call. The engineer is
              now notified of the issue and proceeds to examine the site.
            </p>
          </>
        }
        className="panel--centered panel--gray"
      ></Panel>
      <ContactUsPanel className="panel--centered" />
    </PageLayout>
  );
}
