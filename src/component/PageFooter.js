import React from "react";
import { ContactUsPanel } from "./ContactUsPanel";
import { Panel } from "./Panel";
import { SeraphinBy } from "./SeraphinBy";

export function PageFooter() {
  return (
    <>
      <ContactUsPanel />
      <Panel className="panel--no-spacing">
        <div className="footer">
          <div className="footer__inner">
            <div className="footer__item">
              <div className="footer__logo">
                <SeraphinBy />
              </div>
              <br /> 20 Summerfield Cottages
              <br /> G14 0RB
              <br /> Glasgow
              <br /> United Kingdom
              <div>
                <a href="mailto:simon@ionas.co.uk">simon@ionas.co.uk</a>
              </div>
            </div>
          </div>
          <div className="footer__date">
            &copy; {new Date().getFullYear()} Seraphin. All rights reserved
          </div>
        </div>
      </Panel>
    </>
  );
}
