import { Link } from "gatsby";
import React from "react";
import { Panel } from "./Panel";

export function PageFooter() {
  return (
    <Panel className="panel--no-spacing">
      <div className="footer">
        <div className="footer__inner">
          <div className="footer__item">
            <h2 className="footer__logo">Seraphin</h2>
            <br /> 20 Summerfield Cottages
            <br /> G14 0RB
            <br /> Glasgow
            <br /> United Kingdom
            <div>
              <a href="mailto:simon@ionas.co.uk">simon@ionas.co.uk</a>
            </div>
          </div>
          <div className="footer__item">
            <h3 className="footer__header">Help</h3>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <Link to="/support">Support</Link>
            </div>
          </div>
          <div className="footer__item">
            <h3 className="footer__header">Resources</h3>
            <div>
              <Link to="/contact">Seraphin Cloud</Link>
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
