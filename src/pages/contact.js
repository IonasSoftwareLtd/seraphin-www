import React from "react";
import { FirstPanel } from "../component/FirstPanel";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";
import { SeraphinBy } from "../component/SeraphinBy";

export default function Contact() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          header="Contact us"
          content={
            <>
              <SeraphinBy />
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
                <a href="tel:01412374636" className="btn">
                  0141 237 4636
                </a>
              </p>
            </>
          }
          className="panel--centered"
        />
      </FirstPanel>
    </PageLayout>
  );
}
