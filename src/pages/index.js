import BarChartIcon from "@mui/icons-material/BarChart";
import BuildIcon from "@mui/icons-material/Build";
import CloudIcon from "@mui/icons-material/Cloud";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import SensorsIcon from "@mui/icons-material/Sensors";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import { Link } from "gatsby";
import React from "react";
import { Feature, FeatureList } from "../component/Feature";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";
export default function Home() {
  return (
    <PageLayout>
      <Panel className="panel--no-spacing">
        <div className="banner">
          <div className="banner__inner">
            <div className="banner__header">
              Wireless sensor cloud monitoring system
            </div>
            <div className="banner__content">
              Real time temperature monitoring system for monitoring your
              inventory and assets.
            </div>
            <div className="banner__cta">
              <Link to="/services" className="btn">
                Our services
              </Link>
            </div>
          </div>
        </div>
      </Panel>
      <Panel header="How it works?">
        <FeatureList>
          <Feature
            icon={<SensorsIcon />}
            header="Sensor capture"
            content="Our high quality sensors capture real time data"
          />
          <Feature
            icon={<TrackChangesIcon />}
            header="Gateway"
            content="Gateway is processing data and saving it to the cloud with GPRS"
          />
          <Feature
            icon={<CloudIcon />}
            header="Seraphin Cloud App"
            content="All the data is securly stored and displayed in user friendly interface"
          />
        </FeatureList>
      </Panel>
      <Panel header="Product features">
        <FeatureList>
          <Feature
            icon={<TimelineIcon />}
            header="Access to realtime data"
            content="Sensors data and reports can be checked in one place via integrated
            cloud platform. No need to be on site in order to view data and you
            have 24/7 access to cloud portal."
          />
          <Feature
            icon={<BuildIcon />}
            header="Easy installation"
            content="Sensors have integrated SIM card reciever that makes the
            installation easy and does not require complicated IT support."
          />
          <Feature
            icon={<EditNotificationsIcon />}
            header="Instant notifications"
            content="Alarm feature warns when safe limits are exeded or sensor is not working."
          />
          <Feature
            icon={<BarChartIcon />}
            header="Charts and graphs"
            content="User friendly and powerfull charts display real-time or historical data in easy to understand charts."
          />
        </FeatureList>
      </Panel>

      <Panel header="We can help you with" className="panel--special">
        <FeatureList>
          <Feature
            header="Productivity"
            content="Removes time consuming paper records Quality Control"
          />
          <Feature
            header="Quality Control"
            content="Protects the integrity of the products"
          />
          <Feature header="Cost" content="Reduced product/sample wastage" />
          <Feature
            header="Reliability"
            content="Real-time, web-based temperature monitoring system"
          />
          <Feature
            header="Traceability"
            content="Live data history available on-line"
          />
        </FeatureList>
      </Panel>
      <Panel header="Testimonials">
        <Feature
          content={
            <div>
              <div>
                <em>
                  "I love the Seraphin cloud dashboard interface. It is very
                  intuitive and I have easy access to the sensor data on my
                  mobile."
                </em>
              </div>
              Mark
            </div>
          }
        />
      </Panel>
    </PageLayout>
  );
}
