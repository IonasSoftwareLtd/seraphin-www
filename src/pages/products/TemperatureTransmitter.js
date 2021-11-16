import React from "react";
import { PageLayout } from "../../component/PageLayout";
import { Panel } from "../../component/Panel";

export default function TemperatureTransmitter() {
  return (
    <PageLayout>
      <Panel header="Seraphin Temperature Transmitter">
        <div className="grid">
          <div>
            <img
              src="/temperature-sensor.jpg"
              alt="Seraphin Temperature Transmitter"
            />
            <p>
              The Seraphin Temperature Transmitter is designed to monitor
              temperature for different environment. It supports to read PT100
              probe and convert the value to temperature and uplink to IoT
              server via LoRaWAN protocol.
            </p>
            <p>
              Seraphin Temperature Transmitter supports datalog feature. User
              can retrieve the sensor value via LoRaWAN downlink command.
            </p>
            <p>
              Seraphin Temperature Transmitter is powered by 8500mA Li-SOCI2
              battery for long time measurement. The battery can run 2~10 years
              depends on the network environment and working mode.
            </p>
            <p>
              Each Seraphin Temperature Transmitter has two internal 16 bit ADC
              interfaces and are calibrated on 12 set resistors to make sure the
              accuracy measurement on wide range.
            </p>
            <p>
              Seraphin Temperature Transmitter is LoRaWAN v1.0.3 compatible.
              Each Seraphin Temperature Transmitter is pre-load with a set of
              unique keys for LoRaWAN registration, register these keys to local
              LoRaWAN server and it will auto connect after power on.
            </p>
          </div>
          <div>
            <h2>Features</h2>
            <ul>
              <li>LoRaWAN 1.0.3 compliant</li>
              <li>max: 2 x monitor temperature channels</li>
              <li>Support 3 -wire PT-100</li>
              <li>8500mAh Li-SOCI2 Battery</li>
              <li>Firmware upgrade via console</li>
              <li>Wall Mountable</li>
              <li>Configurable via LoRa or UART</li>
              <li>Datalog and retrieve via LoRaWAN</li>
              <li>
                Use pre-load PT100 probe or 3rd PT100 probe Factory calibration
                for different resistance range Support accuracy measure of
                resistance and upload Battery Monitoring and upload
              </li>
            </ul>
            <h2>Power Consumption:</h2>
            <ul>
              <li>Sleeping Mode: 33uA Sampling: 20mA</li>
              <li>LoRa Transmit: 24 ~ 150mA</li>
            </ul>
            <h2>Dimension:</h2>
            <ul>
              <li>Size: 150 x 120 x 55 mm</li>
              <li>Net Weight: As Per Probe option</li>
            </ul>
            <h2>Specification of Temperature Sensor:</h2>
            <ul>
              <li>Range: as per probe option</li>
              <li>Accurancy: 0 ~ 80°C ± 0.5°C</li>
              <li>Resolution: 0.01°C</li>
            </ul>
          </div>
        </div>
      </Panel>
    </PageLayout>
  );
}
