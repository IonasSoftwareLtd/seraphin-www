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
          header="Low temperature sensor"
          content="Low temperature sensor to gather real time data in extremely low temperatures."
          className="panel--centered"
        ></Panel>
      </div>
      <Panel>
        <div className="grid">
          <div>
            <img src="/temperature-sensor.jpg" alt="Low temperature sensor" />
            <p>
              Low temperature sensor to gather real time data in extremely low
              temperatures.
            </p>
            <h2>Features:</h2>
            <ul>
              <li>max: 2 x monitor temperature channels</li>
              <li>Support 3 -wire PT-100</li>
              <li>8500mAh Li-SOCI2 Battery</li>
              <li>Wall Mountable</li>
              <li>Configurable via LoRa or UART</li>
              <li>Datalog and retrieve via LoRaWAN</li>
              <li>Use pre-load PT100 probe or 3rd PT100 probe</li>
              <li>Factory calibration for different resistance range</li>
              <li>Support accuracy measure of resistance and upload</li>
              <li>Battery Monitoring and upload</li>
              <li>Suitable Environment: Low temperature</li>
            </ul>
          </div>
          <div>
            <h2>Sensor specs:</h2>
            <ul>
              <li>Sen LTC2 with 1 x Low Temperature PT100 probe.</li>
              <li>Cable Length : 2m</li>
              <li>PT100 Class : Class A</li>
              <li>Probe Dimension: 4*30mm</li>
              <li>Measure Range: -196 ~ 150 °C</li>
            </ul>

            <h2>Applications: </h2>
            <ul>
              <li>Logistics and Supply Chain Management</li>
              <li>Food management.</li>
              <li>Cold chains solution</li>
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
