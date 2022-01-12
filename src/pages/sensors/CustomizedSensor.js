import React from "react";
import { PageHeader } from "../../component/PageHeader";
import { PageLayout } from "../../component/PageLayout";
import { Panel } from "../../component/Panel";

export default function TemperatureTransmitter() {
  return (
    <PageLayout>
      <div className="first-panel">
        <PageHeader />
        <Panel
          header="Customized sensor"
          content="Two types of connections RS485 and UART interface for connecting various sensors."
          className="panel--centered"
        ></Panel>
      </div>
      <Panel>
        <div className="grid">
          <div>
            <img
              src="/sensors/customised.png"
              alt="Customized sensor"
              className="product-detail-image"
            />
            <p>
              Two types of connections RS485 and UART interface for connecting
              various sensors
            </p>
            <h2>Features:</h2>
            <ul>
              <li>Ultra low power consumption</li>
              <li>
                Two types of connections RS485 and UART interface for connecting
                various sensors
              </li>
              <li>High capacity 8500 mAh Li-SOCI2 battery</li>
            </ul>
          </div>
          <div>
            <h2>Interface for Model:</h2>
            <ul>
              <li>1 x RS485 Interface</li>
              <li>1 x TTL Serial , 3.3v or 5v.</li>
              <li>1 x I2C Interface, 3.3v or 5v.</li>
              <li>1 x one wire interface</li>
              <li>1 x Interrupt Interface</li>
              <li>1 x Controllable 5V output, max</li>
            </ul>

            <h2>Applications: </h2>
            <ul>
              <li>Wireless Alarm and Security Systems</li>
              <li>Home and Building Automation</li>
              <li>Automated Meter Reading</li>
              <li>Industrial Monitoring and Control</li>
              <li>Long range Irrigation Systems,etc.</li>
            </ul>
            <h2>Dimensions and Weight:</h2>
            <ul>
              <li>Device Size: 135 x 70 x 30 mm</li>
              <li>Device Weight: 150g</li>
            </ul>
          </div>
        </div>
      </Panel>
    </PageLayout>
  );
}
