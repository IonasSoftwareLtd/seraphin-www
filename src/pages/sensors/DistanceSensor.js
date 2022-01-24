import React from "react";
import { FirstPanel } from "../../component/FirstPanel";
import { PageLayout } from "../../component/PageLayout";
import { Panel } from "../../component/Panel";

export default function TemperatureTransmitter() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          header="Distance Sensor"
          content="Laser technology for distance detection."
          className="panel--centered"
        ></Panel>
      </FirstPanel>
      <Panel>
        <div className="grid">
          <div>
            <img
              src="/sensors/Distance.png"
              alt="Distance Sensor"
              className="product-detail-image"
            />
            <p>Laser technology for distance detection.</p>
            <h2>Features:</h2>
            <ul>
              <li>Ultra-low power consumption</li>
              <li>Laser technology for distance detection</li>
              <li>Operating Range - 0.1m~12m①</li>
              <li>Accuracy - ±5cm@(0.1-6m), ±1%@(6m-12m)</li>
              <li>Monitor Battery Level</li>
              <li>8500mAh Battery for long term use</li>
            </ul>
          </div>
          <div>
            <h2>Probe specs:</h2>
            <ul>
              <li>Storage temperature ：-20℃~75℃</li>
              <li>Operating temperature - -20℃~60℃</li>
              <li>Operating Range - 0.1m~12m①</li>
              <li>Accuracy - ±5cm@(0.1-6m), ±1%@(6m-12m)</li>
              <li>Distance resolution - 5mm</li>
              <li>Ambient light immunity - 70klux</li>
              <li>Enclosure rating - IP65</li>
              <li>Light source - LED</li>
              <li>Central wavelength - 850nm</li>
              <li>FOV - 3.6°</li>
              <li>Material of enclosure - ABS+PC</li>
              <li>Wire length - 25cm</li>
            </ul>

            <h2>Applications:</h2>
            <ul>
              <li>Horizontal distance measurement</li>
              <li>Parking management syste</li>
              <li>Object proximity and presence detection</li>
              <li>Intelligent trash can management system</li>
              <li>Robot obstacle avoidance</li>
              <li>Automatic control</li>
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
