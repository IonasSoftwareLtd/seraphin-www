import React from "react";
import { ContactUsPanel } from "../component/ContactUsPanel";
import { PageHeader } from "../component/PageHeader";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "gatsby";

export default function SeraphinPlatform() {
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

      <Panel header="Sensor management">
        {/* Sensors - general */}
        <div className="row card">
          <div className="row__text">
            <p>
              To find out more about the types of sensors the portal supports, 
              their capabilities and specifications go to &nbsp;
              <Link to="/sensors" className="text-link text-link--with-icon">
                Sensors <ArrowForwardIosIcon />
              </Link>
            </p>
            <br />
            <p>
              Seraphin Platform Online Portal makes it extremely easy to manage sensors deployed at your site. 
            </p>
          </div>
        </div>
        {/* Sensors - browse */}
        <div className="row">
          <img 
            src="/app/sensor-browse.jpg" 
            alt="Sensors Management - Browsing"
          />
          <div className="row__text">
            <h3>
              Browse 
            </h3>
            You can use the portal to browse through all sensors that have been associated with your organisation, 
            giving you an instant view into the state of your devices. The portal gives you’re a convenient way 
            to browse the sensors whether you manage only a handful or hundreds of them.
          </div>
        </div>
        {/* Sensors - organise */}
        <div className="row">
          <img 
            src="/app/sensor-grouped.jpg" 
            alt="Sensors Management - Organisation"
          />
          <div className="row__text">
            <h3>
              Organise 
            </h3>
            The portal gives you the ability to group your sensors into meaningful compartments e.g., you may 
            want to organise your devices according to their physical location, type or purpose.  It is easy to 
            move sensors between these compartments customising the views according to personal preferences.
          </div>
        </div>
        {/* Sensors - inspect */}
        <div className="row">
          <img 
            src="/app/sensor-graph.jpg" 
            alt="Sensors Management - Inspection"
          />
          <div className="row__text">
            <h3>
              Inspect 
            </h3>
            Zooming in on a specific sensor uncovers the latest data gathered throughout the day. The data is 
            plotted on a line chart for easy insight and neat presentation. In addition, all historical data 
            is available for browsing at your fingertips in an easy to view and pageable table. 
          </div>
        </div>
      </Panel>

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
        <h3 id="sensor-activation-section">Sensor activation</h3>
        <h3 id="telemetry-section">Telemetry event evaluation</h3>
        <h3 id="notifications-section">Notifications triggering</h3>
        <h3 id="portal-section">Management using online portal</h3>

        <div className="image-gallery">
          <img src="/app/admin-manager.png" />
          <img src="/app/admin-company.png" />
          <img src="/app/admin-sensors.png" />
          
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
