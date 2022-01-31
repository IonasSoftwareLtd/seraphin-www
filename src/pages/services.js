import EditIcon from "@mui/icons-material/Edit";
import PeopleIcon from "@mui/icons-material/People";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import UpdateIcon from "@mui/icons-material/Update";
import React from "react";
import { ContentWrapper } from "../component/ContentWrapper";
import { FirstPanel } from "../component/FirstPanel";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";
import { Service, ServiceList } from "../component/Service";

export default function Services() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          header="Our services"
          headerLevel={1}
          content={
            <>
              <p>
                We offer the full spectrum of services to help organizations
                work better.
              </p>
              <p>
                Ranging from product customization through to software updates,
                we cover all the steps in the process of getting your idea from
                scratch to fully comprehensive monitoring system and beyond.
              </p>
              <p>
                We take pride in our after sale care aimed to be there for you
                whenever our support is needed. Be it tiny job of reorganisation
                users or totally new service that suits your needs, our priority
                is to ensure you have the best possible experience with your
                Seraphin system.
              </p>
              <p>
                We can combine any of our products and services to create a
                package that's tailored to your business. This removes the
                complexity and unnecessary cost of getting you where you want to
                be.
              </p>
            </>
          }
          className="panel--centered"
        />
      </FirstPanel>
      <Panel>
        <ContentWrapper>
          <ServiceList className="product-features">
            <Service header="Product customization" icon={<EditIcon />}>
              We are open to discussion with our partners and customers about
              their monitoring needs. We offer a wide range of approved devices,
              but we also have the expertise and know-how to design and
              manufacture bespoke sensor products. Bring your idea into reality
              with our experienced team. We will help you protect your valuable
              inventory assisting with the deployment of our Seraphin Platform
              Monitoring solution in a swift and professional manner.
            </Service>

            <Service
              header="Installation of system components"
              icon={<SettingsInputComponentIcon />}
            >
              We provide installation services of our monitoring system,
              assuring the best signal range for undisturbed communication
              between system components. We guarantee our devices to be
              positioned without disturbing of existing setups. It’s only a
              matter of minutes for our skilled engineers to set up your system
              and configure Seraphin Platform to watch and protect your assets.
            </Service>
            <Service header="Training programs" icon={<PeopleIcon />}>
              We provide trainings to our partners for better understanding of
              our software and hardware products. These trainings aim to give
              you a fundamental knowledge of how to manage your system, change
              parameters and get access to readings from your sensors using the
              Seraphin portal. We also provide installation and calibration
              trainings for partners willing to take full control over their
              monitoring system.
            </Service>

            <Service
              header="Maintenance and support"
              icon={<SupportAgentIcon />}
            >
              We will keep your system up and running, so you can ensure
              important data is delivered on schedule and all your assets remain
              protected. Our engineers are by your side, ready to help whenever
              support is needed. We guarantee fast response times and swift
              resolution to any problem you may encounter.
            </Service>
            <Service
              header="Annual calibration services"
              icon={<PhonelinkSetupIcon />}
            >
              High quality, regular calibration of sensors is essential to
              ensure the best possible accuracy. We offer annual service of your
              system involving UKAS calibration, battery checks, signal range
              optimisation and full health checks of all system components.
            </Service>

            <Service header="Software update" icon={<UpdateIcon />}>
              We guarantee the latest software installed on all of the
              components of your system to ensure most efficient and safe data
              logging. Our engineers will notify you whenever new hardware
              updates are released and provide the system update without
              distraction of your monitoring system.
            </Service>
          </ServiceList>
        </ContentWrapper>
      </Panel>
    </PageLayout>
  );
}
