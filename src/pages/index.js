import { Link } from "gatsby";
import React from "react";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";

export default function Home() {
  return (
    <PageLayout>
      <Panel className="panel--no-spacing">
        <div className="banner">
          <div className="banner__inner">
            <div className="banner__header">
              Wireless sensor cloud monitoring system
            </div>
            <div className="banner__cta">
              <Link to="/services" className="btn">
                Our services
              </Link>
            </div>
          </div>
        </div>
      </Panel>

      <Panel header="Services">Info here</Panel>
    </PageLayout>
  );
}
