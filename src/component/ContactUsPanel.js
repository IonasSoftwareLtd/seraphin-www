import { Link } from "gatsby";
import React from "react";
import { Panel } from "../component/Panel";

export const ContactUsPanel = () => {
  return (
    <Panel
      header="We are here to help"
      className="panel--centered panel--gray"
      content={
        <>
          <p>Let's talk about your specific project. </p>
          <p>
            Our team of specialist's will help you with your requirements and
            propose solutions that fit your needs.
          </p>
        </>
      }
    >
      <Link to="/contact" className="btn">
        Contact us
      </Link>
    </Panel>
  );
};
