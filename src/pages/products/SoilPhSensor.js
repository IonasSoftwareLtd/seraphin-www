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
          header="Soil Ph Sensor"
          content="The Soil Ph Sensor is designed to monitor
          Ph of soil for different environment."
          className="panel--centered"
        ></Panel>
      </div>
      <Panel>
        <div className="grid">
          <div>
            <img src="/temperature-sensor.jpg" alt="Soil Ph Sensor" />
            <p>
              The Soil Ph Sensor is designed to monitor Ph of soil for different
              environment.
            </p>
            <h2>Sensor specs:</h2>
            <ul>
              <li>Soil pH:</li>
              <li>Range: 3 ~ 10 pH</li>
              <li>Resolution: 0.01 pH</li>
              <li>
                Accuracy: &plusmn;2% under (0~50 ℃, Accuracy will poor under 0
                due to frozen)
              </li>
              <li>Temperature Compensation Range: 0 ~ 50℃</li>
              <li>IP68 Protection</li>
              <li>Length: 3.5 meters</li>
            </ul>
          </div>
          <div>
            <h2>Soil Temperature:</h2>
            <ul>
              <li>Range -40℃～85℃</li>
              <li>Resolution: 0.1℃</li>
              <li>
                Accuracy: {"<"}&plusmn;0.5℃(-10℃～40℃)，{"<"}&plusmn;0.8℃
                (others)
              </li>
              <li>IP68 Protection</li>
              <li>Length: 3.5 meters </li>
            </ul>
            <h2>Features:</h2>
            <ul>
              <li>Ultra-low power consumption</li>
              <li>Monitor soil pH with temperature compensation</li>
              <li>Monitor soil temperature</li>
              <li>Monitor Battery Level</li>
              <li>IP66 Waterproof Enclosure</li>
              <li>IP68 rate for the Sensor Probe</li>
              <li>8500mAh Battery for long term use</li>
            </ul>
            <h2>Applications: </h2>
            <ul>
              <li>Smart Agriculture</li>
            </ul>

            <h2>Dimensions and Weight:</h2>
            <ul>
              <li>Device Size: 13.0 x 5 x 4.5 cm</li>
              <li>Device Weight: 150g</li>
            </ul>
          </div>
        </div>
      </Panel>
    </PageLayout>
  );
}
