import BarChartIcon from "@mui/icons-material/BarChartOutlined";
import BuildIcon from "@mui/icons-material/BuildOutlined";
// import CloudIcon from "@mui/icons-material/CloudOutlined";
import EditNotificationsIcon from "@mui/icons-material/EditNotificationsOutlined";
import TimelineIcon from "@mui/icons-material/TimelineOutlined";
import TrackChangesIcon from "@mui/icons-material/TrackChangesOutlined";
import { Link } from "gatsby";
import React from "react";
import CloudIconPng from "../../static/cloudIcon.png";
// import SensorsIcon from "@mui/icons-material/SensorsOutlined";
import SensorIconPng from "../../static/sensorIcon.png";
import { Feature, FeatureList } from "../component/Feature";
import { PageHeader } from "../component/PageHeader";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";

export default function Home() {
  return (
    <PageLayout>
      <div className="first-panel">
        <PageHeader />
        <Panel className="panel--no-spacing">
          <div className="banner">
            <div className="banner__inner">
              <h1 className="banner__header">
                Wireless sensor cloud monitoring system
              </h1>
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
            <div className="banner__image" />
          </div>
        </Panel>
      </div>
      <Panel header="How it works?">
        <FeatureList className="how-it-works">
          <Feature
            icon={<img src={SensorIconPng} alt="sensor" width="80px" />}
            header="Sensor capture"
            content="Our high quality sensors capture real time data"
          />
          <Feature
            icon={<TrackChangesIcon />}
            header="Gateway"
            content="Gateway is processing data and saving it to the cloud with GPRS"
          />
          <Feature
            icon={<img src={CloudIconPng} alt="cloud" width="80px" />}
            header="Seraphin Cloud App"
            content="All the data is securly stored and displayed in user friendly interface"
          />
        </FeatureList>
      </Panel>
      <Panel header="Product features">
        <FeatureList className="product-features">
          <div className="product-features__row">
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
          </div>
          <div className="product-features__row">
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
          </div>
        </FeatureList>
      </Panel>

      <Panel header="We can help you with" className="panel--orange panel--centered">
        <FeatureList className="help-features">
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
      <Panel
        header="Don't take our word for it"
        content={
          <>
            <p>
              We asked our customers what changed for better since switching to
              Seraphin.
            </p>
            <p>Here is what they say.</p>
          </>
        }
        className="panel--special panel--centered"
      >
        <FeatureList>
          <Feature
            className="feature--testimonial"
            icon={
              <div className="feature__profile">
                <img src="/armin-photo.jpeg" alt="Testimonial" width="80px" />
              </div>
            }
            content={
              <div>
                <div className="feature__quote">
                  <em>
                    "I love the Seraphin cloud dashboard interface. It is very
                    intuitive and I have easy access to the sensor data on my
                    mobile."
                  </em>
                </div>
                <p className="feature__name">Mark</p>
                <p className="feature__job">Quality Assessor</p>
              </div>
            }
          />
          <Feature
            className="feature--testimonial"
            icon={
              <div className="feature__profile">
                <img src="/armin-photo.jpeg" alt="Testimonial" width="80px" />
              </div>
            }
            content={
              <div>
                <div className="feature__quote">
                  <em>
                    "I love the Seraphin cloud dashboard interface. It is very
                    intuitive and I have easy access to the sensor data on my
                    mobile."
                  </em>
                </div>
                <p className="feature__name">Mark</p>
                <p className="feature__job">Quality Assessor</p>
              </div>
            }
          />
          <Feature
            className="feature--testimonial"
            icon={
              <div className="feature__profile">
                <img src="/armin-photo.jpeg" alt="Testimonial" width="80px" />
              </div>
            }
            content={
              <div>
                <div className="feature__quote">
                  <em>
                    "I love the Seraphin cloud dashboard interface. It is very
                    intuitive and I have easy access to the sensor data on my
                    mobile."
                  </em>
                </div>
                <p className="feature__name">Mark</p>
                <p className="feature__job">Quality Assessor</p>
              </div>
            }
          />
        </FeatureList>
      </Panel>
    </PageLayout>
  );
}
