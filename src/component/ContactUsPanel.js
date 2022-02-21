import { Link } from "gatsby";
import React from "react";
import { Panel } from "../component/Panel";

export const ContactUsPanel = ({
  className = "panel--centered panel--filled",
}) => {
  return (
    <Panel
      header="We are here to help"
      className={className}
      content={
        <>
          <p>Let's talk about your specific project. </p>
          <p>
            We want to hear about your requirements and
            propose solutions that meet your expectations.
          </p>
        </>
      }
    >
      <Link to="/contact" className="btn-secondary">
        Contact us
      </Link>
    </Panel>
  );
};
