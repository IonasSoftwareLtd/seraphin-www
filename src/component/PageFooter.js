import React from "react";
import { Panel } from "./Panel";

export function PageFooter() {
  return (
    <Panel className="panel--no-spacing">
      <div className="footer">
        <div className="footer__inner">
          <div className="footer__item">
            <h2 className="footer__logo-header">Seraphin by IONAS</h2>
            <div className="footer__logo">
              <img src="/ionas-logo.png" alt="IONAS Logo" />
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
  );
}
