import React from "react";
import { FirstPanel } from "../../component/FirstPanel";
import { PageLayout } from "../../component/PageLayout";
import { Panel } from "../../component/Panel";

export default function TemperatureTransmitter() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          header="Temperature & Humidity Sensor"
          content="Built-in Temperature & Humidity sensor."
          className="panel--centered"
        ></Panel>
      </FirstPanel>
      <Panel>
        <div className="grid">
          <div>
            <img
              src="/sensors/TempHum.png"
              alt="Temperature & Humidity Sensor"
              className="product-detail-image"
            />

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
            <h2>Sensor Spec:</h2>
            <ul>
              <li>Built-in Temperature Sensor:</li>
              <li>Resolution: 0.01 °C</li>
              <li>Accuracy Tolerance : Typ +/-0.3°C</li>
              <li>Long Term Drift: {"<"} 0.02 °C/yr</li>
              <li>Operating Range: -40 ~ 125 °C</li>
            </ul>
            <h2>Built-in Humidity Sensor:</h2>
            <ul>
              <li>Resolution: 0.04 %RH</li>
              <li>Accuracy Tolerance : Typ +/-3%PH</li>
              <li>Long Term Drift: {"<"} 0.02 °C/yr</li>
              <li>Operating Range: 0 ~ 100 °C</li>
              <li>External Temperature Sensor – E1:</li>
            </ul>
            <h2>Resolution: 0.0625 °C</h2>
            <ul>
              <li>±0.5°C accuracy from -10°C to +85°C</li>
              <li>±2°C accuracy from -55°C to +125°C</li>
              <li>Operating Range: -55 °C ~ 125 °C</li>
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
              <li>Size:135 x 70 x 30 mm/pcs</li>
              <li>Weight: 105g</li>
            </ul>
          </div>
        </div>
      </Panel>
    </PageLayout>
  );
}
