import EditIcon from "@mui/icons-material/Edit";
import MonitorIcon from "@mui/icons-material/Monitor";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import SensorsIcon from "@mui/icons-material/Sensors";
import ShieldIcon from "@mui/icons-material/Shield";
import TrackChangesIcon from "@mui/icons-material/TrackChangesOutlined";
import { Link } from "gatsby";
import React from "react";
import CloudIconPng from "../../static/cloudIcon.png";
import SensorIconPng from "../../static/sensorIcon.png";
import { ContactUsPanel } from "../component/ContactUsPanel";
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
              <h1 className="banner__header">Seraphin Monitoring Platform</h1>
              <div className="banner__content">
                Seraphin Monitoring Platform is a comprehensive IoT (Internet of
                Things) software platform developed to provide real-time
                monitoring and rapid alert capability.
              </div>
              <div className="banner__cta">
                <Link to="/about" className="btn">
                  Read more about Seraphin Platform
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
      <Panel header="How is it better?">
        <FeatureList className="product-features">
          <div className="product-features__row">
            <Feature
              icon={<MonitorIcon />}
              header="Scalable and reliable"
              content="The Seraphin Monitoring Platform is a brand new product developed using the latest technology. The platform is hosted within the AWS cloud, powered by the same infrastructure that is used by Netflix and government websites. Reliability and performance are therefore inherent to the product, ensuring you can expect the platform to scale with predictable performance whether you gather data from a handful or thousands of IoT devices."
            />
            <Feature
              icon={<ShieldIcon />}
              header="Secure and reliable technology"
              content="Seraphin Cloud Monitoring platform is based on LoRa, long range and low power wireless transmittion, designed to work with LoRA compliant devices that implement the latest specifications of the Lorawan protocol. All wireless radio communications are encrypted while ensuring very high delivery ratio."
            />
            <Feature
              icon={<SensorsIcon />}
              header="Flexible deployment options"
              content="Seraphin platform providers can advise on a range of sensor deployment options for both wireless and wired installations. Wireless installations afford versatility and flexibility of deployment options. Wired installations are advised where the reliability of transmissions is of highest priority. Our consultants are available to advise on the most optimal deployment package for your needs."
            />
          </div>
        </FeatureList>
      </Panel>

      <Panel
        header="Our services"
        content={
          <>
            <p>
              We offer the full spectrum of services to help organizations work
              better.
            </p>
            <p>
              We can combine any of our products and services to create a
              package that’s tailored to your business.
            </p>
          </>
        }
        className="panel--orange panel--centered"
      >
        <FeatureList className="help-features">
          <Feature
            className="feature--testimonial"
            header="Consulting services"
            icon={<RecordVoiceOverIcon />}
          >
            We are open to any consultation ranging from possible existing
            solutions to bespoke product design.
          </Feature>
          <Feature
            className="feature--testimonial"
            header="Product customization"
            icon={<EditIcon />}
          >
            We offer our partners and customers close cooperation to help the
            designed monitoring system meet any specific expectations.
          </Feature>
        </FeatureList>
        <div className="panel__cta">
          <Link to="/services" className="btn-secondary">
            Read more about our Services
          </Link>
        </div>
      </Panel>

      <ContactUsPanel />
      {/* <Panel
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
      </Panel> */}
    </PageLayout>
  );
}
