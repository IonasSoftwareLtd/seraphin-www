import React from "react";
import { FirstPanel } from "../../component/FirstPanel";
import { PageLayout } from "../../component/PageLayout";
import { Panel } from "../../component/Panel";

export default function TemperatureTransmitter() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          header="Water leak sensor"
          headerLevel={1}
          content="Water leak sensor will detect and water spillage and notifiy you."
          className="panel--centered"
        ></Panel>
      </FirstPanel>
      <Panel>
        <div className="grid">
          <div>
            <img
              src="/sensors/WaterLeak.png"
              alt="Water leak sensor"
              className="product-detail-image"
            />
            <p>
              Water leak sensor will detect and water spillage and notifiy you.
            </p>
            <h2>Features:</h2>
            <ul>
              <li>Built-in 2400mAh battery for more than 10 year use.</li>
              <li>Built-in Temperature & Humidity sensor</li>
              <li>Optional External Sensors</li>
              <li>Tri-color LED to indicate status</li>
              <li>3200 set sensor record with time stamp</li>
            </ul>
          </div>
          <div>
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
              <li>Size:135 x 70 x 30 mm</li>
              <li>Weight: 105g</li>
            </ul>
          </div>
        </div>
      </Panel>
    </PageLayout>
  );
}
