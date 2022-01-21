import EditIcon from "@mui/icons-material/Edit";
import PeopleIcon from "@mui/icons-material/People";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import UpdateIcon from "@mui/icons-material/Update";
import React from "react";
import { ContentWrapper } from "../component/ContentWrapper";
import { PageHeader } from "../component/PageHeader";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";
import { Service, ServiceList } from "../component/Service";

export default function Services() {
  return (
    <PageLayout>
      <div className="first-panel">
        <PageHeader />
        <Panel
          header="Our services"
          content={
            <>
              <p>
                We offer the full spectrum of services to help organizations
                work better.
              </p>
              <p>
                We can combine any of our products and services to create a
                package that’s tailored to your business. This removes the
                complexity and unnecessary cost of getting you where you want to
                be.
              </p>
            </>
          }
          className="panel--centered"
        ></Panel>
      </div>
      <Panel>
        <ContentWrapper>
          <ServiceList className="product-features">
            <Service
              header="Consulting services"
              icon={<RecordVoiceOverIcon />}
            >
              We are open to any consultation ranging from possible existing
              solutions to bespoke product design.
            </Service>
            <Service header="Product customization" icon={<EditIcon />}>
              We offer our partners and customers close cooperation to help the
              designed monitoring system meet any specific expectations.
            </Service>

            <Service
              header="Installation of system components"
              icon={<SettingsInputComponentIcon />}
            >
              Professional installation of your/our monitoring system assuring
              best signal range for undisturbed communication between system
              components.
            </Service>
            <Service header="Training programs" icon={<PeopleIcon />}>
              We provide to our partners theoretical and practical trainings for
              better understanding of the concept and functionality of the
              system.
            </Service>

            <Service
              header="Maintenance and support"
              icon={<SupportAgentIcon />}
            >
              We help keep your system up and running, so you can ensure
              important data is delivered on schedule.
            </Service>
            <Service
              header="Annual calibration services"
              icon={<PhonelinkSetupIcon />}
            >
              High quality regular calibration of your/our system essential to
              ensure the best possible accuracy.
            </Service>

            <Service header="Software update" icon={<UpdateIcon />}>
              We guarantee the latest software installed on all of the
              components of your/our system to ensure most efficient and safe
              data logging.
            </Service>
          </ServiceList>
        </ContentWrapper>
      </Panel>
    </PageLayout>
  );
}
