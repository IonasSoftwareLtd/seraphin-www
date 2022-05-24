import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "gatsby";
import React from "react";
import { ContactUsPanel } from "./ContactUsPanel";
import { menuItems } from "./PageHeader";
import { Panel } from "./Panel";
import { SeraphinBy } from "./SeraphinBy";

export function PageFooter() {
  return (
    <>
      <ContactUsPanel />
      <Panel className="panel--no-spacing">
        <div className="footer">
          <div className="footer__inner">

            <div className="footer__left">
              <SeraphinBy />
              <div>
                <a
                  className="social-link"
                  href="https://www.facebook.com/IonasSoftware"
                >
                  <FacebookIcon />
                </a>

                <a
                  className="social-link"
                  href="https://github.com/IonasSoftwareLtd"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>

            <div className="footer__right">
              <div className="footer__item">
                <ul>
                  {menuItems
                    .filter((item, index) => index <= 2)
                    .map((item) => (
                      <li key={item.link}>
                        <Link to={item.link}>{item.label}</Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="footer__item">
                <ul>
                  {menuItems
                    .filter((item, index) => index > 2)
                    .map((item) => (
                      <li key={item.link}>
                        <Link to={item.link}>{item.label}</Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/legal/privacy">Privacy policy</Link>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="/documents/tnc.pdf">Terms and conditions</a>
                    </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="footer__date">
            <div>
              &copy; {new Date().getFullYear()} Seraphin. All rights reserved
            </div>
          </div>
        </div>
      </Panel>
    </>
  );
}
