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
          header="Contact Seraphin by IONAS"
          content={
            <>
              <img src="/ionas-logo.png" alt="IONAS Logo" />
              <br />
              <br />
              <p>
                Need assistance with your Seraphin product? We'll get you the
                help you need.
              </p>
              <p>
                <br /> Ionas Software Ltd
                <br /> 20 Summerfield Cottages
                <br /> G14 0RB
                <br /> Glasgow
                <br /> United Kingdom
                <br />
                <br />
              </p>
              <p>
                <a href="mailto:simon@ionas.co.uk" className="btn">
                  simon@ionas.co.uk
                </a>
              </p>
              <p>or</p>
              <p>
                <a href="tel:07871259234" className="btn">
                  07871259234
                </a>
              </p>
            </>
          }
          className="panel--centered"
        ></Panel>
      </div>
    </PageLayout>
  );
}
