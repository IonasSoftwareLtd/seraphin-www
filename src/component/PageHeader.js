import { Link } from "gatsby";
import React from "react";
import { Panel } from "./Panel";

export function PageHeader() {
  return (
    <Panel className="panel--header">
      <div className="header">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">
              <img src="/logo.svg" alt="Seraphin logo" />
            </Link>
          </div>
          <div className="header__nav">
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Panel>
  );
}
