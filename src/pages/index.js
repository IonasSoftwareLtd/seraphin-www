import EditIcon from "@mui/icons-material/Edit";
import MonitorIcon from "@mui/icons-material/Monitor";
import SensorsIcon from "@mui/icons-material/Sensors";
import ShieldIcon from "@mui/icons-material/Shield";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "gatsby";
import React from "react";
import { Feature, FeatureList } from "../component/Feature";
import { FirstPanel } from "../component/FirstPanel";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";
import { ImageTextRow } from "./../component/ImageTextRow";

export default function Home() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel className="panel--no-spacing">
          <div className="banner">
            <div className="banner__background-fill">
              <div className="light x1"></div>
              <div className="light x2"></div>
              <div className="light x3"></div>
              <div className="light x4"></div>
              <div className="light x5"></div>
              <div className="light x6"></div>
              <div className="light x7"></div>
              <div className="light x8"></div>
              <div className="light x9"></div>
            </div>

            <div className="banner__inner">
              <div className="banner__text">
                <h1 className="banner__header">Seraphin Monitoring Platform</h1>
                <div className="banner__content">
                  Seraphin Monitoring Platform is a comprehensive IoT solution
                  for asset protection with real-time monitoring 
                  and rapid alert capabilities.
                
                </div>
              </div>

              <div className="banner__background">
                <div className="banner__image">
                  <picture>
                    <source
                      media="(max-width: 550px)"
                      srcSet="app/illustration-mobile-550w.png"
                    />
                    <source
                      media="(min-width: 700px)"
                      srcSet="app/illustration-home.png"
                    />
                    <img src="app/illustration-home.png" />
                    {/* <StaticImage 
                      placeholder="blurred"
                      src="../../static/app/illustration-home.png" 
                      alt="Seraphin Platform Illustration" /> */}
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </FirstPanel>
      <Panel header="How it works">
        <ImageTextRow
          imageUrl="/combinedSensors.png"
          imageAlt="Sensor activation image"
          title="Sensor sends data"
          body="The system protects your assets by
            sending telemetry data from variety of supported sensors to the
            Seraphin cloud servers. Incoming data is evaluated against user
            defined rules, which trigger alerts if something is amiss. 
            All sensor-sent telemetry data is stored in the cloud and is available
            for live and retrospective view via a mobile friendly and secure web
            portal."
          link="/seraphin-platform/#sensor-activation-section"
          imageFirst={true}
        />
        <ImageTextRow
          imageUrl="/combinedTelemetry.png"
          title="Telemetry event evaluation"
          body="Organisations onboarded onto Serpahin online portal define rules
          that every incoming telemetry event is evaluated against. The result 
          determines if an alert should be trigerred to an on-call
          engineer. The portal makes it easy to define and manage any number 
          of rules you may need, browse through the alerts, and stay 
          informed about actions your on-call engineers have taken."
          link="/seraphin-platform/#telemetry-section"
          imageFirst={false}
        />
        <ImageTextRow
          imageUrl="/combinedNotifications.png"
          title="Alert management using online portal"
          body="If rule conditions are met, a notification in the form of email,
          text message or a phone call is triggered to inform the user about the
          alert. Our system makes it easy to track the lifetime of each alert,
          from the moment it was trigerred until it's acknowledged by an on-call 
          engineer."
          link="/seraphin-platform/#portal-section"
          imageFirst={true}
        />
        <ImageTextRow
          imageUrl="/combinedPlatforms.png"
          title="User management"
          body="Seraphin Monitoring Platform is a multi-tenant software solution that
          has been designed for individual users, organisations and re-sellers. 
          The system supports 3 user access roles that cater for the needs of individual
          customers as well as franchisers. This makes Seraphin the perfect product for 
          clients who wish to manage their own monitoring as well as those who wish to 
          employ an intermediatry to manage the system for them."
          link="/seraphin-platform/#user-management-section"
          imageFirst={false}
        />
        {/* <FeatureList className="how-it-works">
          <Feature
            icon={<img src="/svgBlobs/blob1.svg" alt="sensor" width="80px" />}
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
        </FeatureList> */}
      </Panel>
      <Panel header="How is it better?">
        <FeatureList className="product-features">
          <div className="product-features__row">
            <Feature
              icon={<MonitorIcon />}
              header="Scalable and reliable"
              content="The Seraphin Monitoring Platform is a brand new product developed using the latest technology. The platform is hosted within the AWS cloud, powered by the same infrastructure as Netflix and government websites. Reliability and performance are therefore inherent in the product, ensuring you can expect the platform to scale with predictable performance whether you gather data from a handful or thousands of IoT devices."
            />
            <Feature
              icon={<ShieldIcon />}
              header="Secure, encrypted technology"
              content="Seraphin Cloud Monitoring platform is based on LoRa, long range and low power wireless transmittion, designed to work with LoRA compliant devices that implement the latest specifications of the Lorawan protocol. All wireless radio communications are encrypted while ensuring very high delivery ratio."
            />
            <Feature
              icon={<SensorsIcon />}
              header="Flexible deployment options"
              content="Seraphin platform providers can advise on a range of sensor deployment options for both wireless and wired installations. Wireless installations allow versatility of deployment options, while wired setups are advised where the reliability of transmissions is of highest priority. Our consultants are available to advise on the most optimal deployment package for your needs."
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
        className="panel--gray panel--centered"
      >
        <FeatureList className="help-features">
          <Feature
            className="feature--testimonial"
            header="Maintenance and support"
            icon={<SupportAgentIcon />}
          >
            We will keep your system up and running, so you can ensure important
            data is delivered on schedule and all your assets remain protected.
            Our engineers are by your side, ready to help whenever support is
            needed. We guarantee fast response times and swift resolution where 
            action is needed.
          </Feature>
          <Feature
            className="feature--testimonial"
            header="Product customization"
            icon={<EditIcon />}
          >
            We offer our partners and customers close cooperation to ensure the
            designed monitoring system meets any specific expectations.
          </Feature>
        </FeatureList>
        <div className="panel__cta">
          <Link to="/services" className="btn">
            Read more about our Services
          </Link>
        </div>
      </Panel>

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
