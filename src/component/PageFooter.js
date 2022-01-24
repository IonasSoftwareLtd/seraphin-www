import { Link } from "gatsby";
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
              <ul>
                <li>
                  <Link to="/legal">Legal</Link>
                </li>
                <li>
                  <Link to="/cookies">Cookies</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__date">
            <div className="footer__logo">
              <SeraphinBy />
            </div>
            <div>
              &copy; {new Date().getFullYear()} Seraphin. All rights reserved
            </div>
          </div>
        </div>
      </Panel>
    </>
  );
}
