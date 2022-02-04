import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "gatsby";
import React from "react";
import { Feature, FeatureList } from "../component/Feature";
import { FirstPanel } from "../component/FirstPanel";
import { GridRow } from "../component/Grid";
import { ElevatedImage } from "../component/ImageWithModal";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";

export default function SeraphinPlatform() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel header="About Seraphin Monitoring Platform" headerLevel={1}>
          <GridRow
            topAlign
            imageFirst
            image={
              <img
                src="/app/responsiveHome.png"
                alt="Seraphin Monitoring Platform"
              />
            }
          >
            <p>
              Seraphin Monitoring Platform is a comprehensive IoT (Internet of
              Things) software platform developed to provide real-time
              monitoring and rapid alert capability.
            </p>
            <p>
              The system is designed to protect your assets. It achieves that by
              sending telemetry data from variety of supported sensors to the
              Seraphin cloud servers.
            </p>
            <p>
              Incoming data is evaluated against user defined rules. If rule
              conditions are met, the notification in the form of email, text
              message or a phone call is triggered to inform the user about
              alarm condition.
            </p>
            <p>
              All sensor-sent telemetry data is stored in the cloud and
              available for live and retrospective view via a mobile friendly
              and secure web portal.
            </p>
          </GridRow>
        </Panel>
      </FirstPanel>

      {/* Sensor management */}
      <Panel header="Sensor management" headerId="sensor-activation-section">
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
              Seraphin Platform Online Portal makes it extremely easy to manage
              sensors deployed at your site.
            </p>
          </div>
        </div>
        {/* Sensors - browse */}
        <GridRow
          topAlign
          image={
            <ElevatedImage
              src="/app/sensor-browse.jpg"
              alt="Sensors Management - Browsing"
            />
          }
        >
          <h3>Browse through sensors</h3>
          You can use the portal to browse through all sensors that have been
          associated with your organisation, giving you an instant view into the
          state of your devices. The portal gives you’re a convenient way to
          browse the sensors whether you manage only a handful or hundreds of
          them.
        </GridRow>
        {/* Sensors - organise */}
        <GridRow
          topAlign
          image={
            <ElevatedImage
              src="/app/sensor-grouped.jpg"
              alt="Sensors Management - Organisation"
            />
          }
        >
          <h3>Organise sensors into groups</h3>
          The portal gives you the ability to group your sensors into meaningful
          compartments e.g., you may want to organise your devices according to
          their physical location, type or purpose. It is easy to move sensors
          between these compartments customising the views according to personal
          preferences.
        </GridRow>

        {/* Sensors - inspect */}
        <GridRow
          topAlign
          image={
            <ElevatedImage
              isClickable
              src="/app/sensor-graph.jpg"
              alt="Sensors Management - Inspection"
            />
          }
        >
          <h3>Inspect sensor data</h3>
          Zooming in on a specific sensor uncovers the latest data gathered
          throughout the day. The data is plotted on a line chart for easy
          insight and neat presentation. In addition, all historical data is
          available for browsing at your fingertips in an easy to view and
          pageable table.
        </GridRow>
      </Panel>

      {/* Rule evaluation */}
      <Panel header="Event rule evaluation" headerId="telemetry-section">
        {/* Rule - define */}
        <GridRow
          topAlign
          imageFirst
          image={
            <ElevatedImage
              src="/app/rule-define.jpg"
              alt="Rule Management - Rule definition"
            />
          }
        >
          <h3>Define rules that trigger notifications</h3>
          <p>
            Rules are at the core of the platform. They are evaluated for every
            telemetry event that the platform receives, and result of the
            evaluation determines whether an alert should be triggered. The
            portal allows you to create rules and define rule condition criteria
            in an easy and convenient way. You can create any number of rules,
            and all will be evaluated against every telemetry event your sensors
            emit.
          </p>
          <p>
            A typical rule definition follows an industry recognised pattern of
            ‘For…, When…, Then’ e.g. for a particular sensor, when the
            temperature drops below a specified value, then contact people on
            the following list. This easily understood by humans rule pattern
            can be easily transformed to an extremely performant condition
            evaluation routine that is guaranteed to carry minimal footprint for
            the compute resources required to execute the rule.
          </p>
        </GridRow>
        {/* Rule - inspect */}
        <GridRow
          topAlign
          imageFirst
          image={
            <ElevatedImage
              src="/app/rule-inspect.jpg"
              alt="Rule Management - Inspection"
            />
          }
        >
          <h3>Inspect rules defined for your organisation</h3>
          As an owner of an organisation onboarded onto the Seraphin Monitoring
          Platform you have the ability to grant multiple users admin access to
          your organisation and therefore give them the ability to look at your
          data and view alert triggering rules you defined. In order to improve
          the ease with which newcomers to the platform may inspect existing
          rule definitions, all rules defined for your organisation can be
          presented in a simple human readable formatted output, therefore
          lowering the entry barrier to an absolute minimum for all newly
          onboarded users.
        </GridRow>

        {/* Rule - browse */}
        <GridRow
          topAlign
          imageFirst
          image={
            <ElevatedImage
              src="/app/rule-browse.jpg"
              alt="Rule Management - Browsing"
            />
          }
        >
          <h3>Browse easily through active and disabled rules</h3>
          The Seraphin Monitoring Platforms places no restrictions on the number
          of rules you define. Some of the rules you create will require
          immediate activation, some will be used only for testing and may or
          may not be eventually enabled in your production environment. The
          online portal makes it easy to browse through all rules you have
          defined, test each one in isolation and finally stage for production
          deployment or keep them in testing.
        </GridRow>
      </Panel>

      {/* Notification trigerring */}
      {/*<Panel header="Notification trigerring" headerId="notifications-section">
        <div className="row">
          <div className="row__text">{"TEXT".repeat(100)}</div>
        </div>
      </Panel>*/}

      {/* Management using online portal */}
      {/*<Panel
        header="Alert management using online portal"
        headerId="portal-section"
      >
        <div className="row">
          <div className="row__text">{"TEXT".repeat(100)}</div>
        </div>
      </Panel>*/}

      {/* Real world example */}
      <Panel
        header="Real world example"
        content="A real world example how clients are using our platform."
        className="panel--centered panel--gray panel--example"
      >
        <FeatureList>
          <Feature
            className="feature--testimonial"
            icon={
              <img
                src="/sensors/LowTemp.png"
                alt="Temperature in Seraphin monitored freezer"
              />
            }
          >
            Temperature in Seraphin monitored freezer rises above the user
            defined threshold of -70 degrees Celsius. Shortly after, the
            wireless temperature sensor attached to the freezer reads the
            temperature and transmits it to the Seraphin Cloud Server (SCS).
          </Feature>
          <Feature
            className="feature--testimonial"
            icon={
              <img
                src="/combinedTelemetry.png"
                alt="Temperature in Seraphin monitored freezer"
              />
            }
          >
            The SCS executes the user defined test which compares the received
            reading against the predefined value of -70 degrees.
          </Feature>
          <Feature
            className="feature--testimonial"
            icon={
              <img
                src="/combinedNotifications.png"
                alt="Temperature in Seraphin monitored freezer"
              />
            }
          >
            The test criteria are met and the system triggers a phone call to
            i.e. a clients on-call engineer. The engineer answers the call, the
            system records the receipt of the alert call. The engineer is now
            notified of the issue and proceeds to examine the site.
          </Feature>
        </FeatureList>
      </Panel>
    </PageLayout>
  );
}
