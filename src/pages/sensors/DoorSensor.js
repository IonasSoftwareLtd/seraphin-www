import React from "react";
import { FirstPanel } from "../../component/FirstPanel";
import { PageLayout } from "../../component/PageLayout";
import { Panel } from "../../component/Panel";

export default function TemperatureTransmitter() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          header="Door sensor"
          headerLevel={1}
          content="Door sensor will detect weather door was opened or closed."
          className="panel--centered"
        ></Panel>
      </FirstPanel>
      <Panel>
        <div className="grid">
          <div>
            <img
              src="/sensors/Door.png"
              alt="Door sensor"
              className="product-detail-image"
            />
            <p>Door sensor will detect weather door was opened or closed.</p>
            <h2>Features:</h2>
            <ul>
              <li>Door Open/Close detect</li>
              <li>
                Door open/close statistics 8500mAh industrial
                battery(none-rechargeable)
              </li>
              <li>Datalog feature</li>
              <li>Wall Mountable</li>
              <li>Outdoor Use</li>
            </ul>
          </div>
          <div>
            <h2>Applications: </h2>
            <ul>
              <li>Wireless Alarm and Security Systems</li>
              <li>Home and Building Automation</li>
              <li>Industrial Monitoring and Control</li>
            </ul>
            <h2>Dimensions and Weight:</h2>
            <ul>
              <li>Size:135 x 70 x 30 mm/pcs</li>
              <li>Weight: 105g</li>
            </ul>
          </div>
        </div>
      </Panel>
    </PageLayout>
  );
}
