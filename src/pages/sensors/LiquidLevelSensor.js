import React from "react";
import { FirstPanel } from "../../component/FirstPanel";
import { PageLayout } from "../../component/PageLayout";
import { Panel } from "../../component/Panel";

export default function TemperatureTransmitter() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          header="Liquid Level Sensor"
          content="Liquid Level Measurement by Ultrasonic technology."
          className="panel--centered"
        ></Panel>
      </FirstPanel>
      <Panel>
        <div className="grid">
          <div>
            <img
              src="/sensors/WaterLevel.png"
              alt="Liquid Level Sensor"
              className="product-detail-image"
            />
            <p>Liquid Level Measurement by Ultrasonic technology.</p>
            <h2>Applications: </h2>
            <ul>
              <li>Smart liquid control solution</li>
              <li>Smart liquefied gas solution</li>
            </ul>
          </div>
          <div>
            <h2>Features:</h2>
            <ul>
              <li>Ultra low power consumption</li>
              <li>Liquid Level Measurement by Ultrasonic technology</li>
              <li>Measure through container, No need to contact Liquid.</li>
              <li>Valid level range 20mm - 2000mm</li>
              <li>Accuracy: ±(5mm+S*0.5%) (S: Measure Value)</li>
              <li>Cable Length : 25cm</li>
              <li>IP66 Waterproof Enclosure</li>
              <li>8500mAh Battery for long term use</li>
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
