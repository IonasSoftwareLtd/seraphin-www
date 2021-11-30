import React from "react";
import { PageHeader } from "../../component/PageHeader";
import { PageLayout } from "../../component/PageLayout";
import { Panel } from "../../component/Panel";

export default function Gateway() {
  return (
    <PageLayout>
      <div className="first-panel">
        <PageHeader />
        <Panel
          header="Seraphin Gateway"
          content="The Seraphin Gateway is an open source LoRaWAN Pico Gateway. It
          lets you bridge LoRa wireless network to an IP network via WiFi,
          Ethernet, 3G or 4G cellular network. The LoRa wireless allows
          users to send data and reach extremely long ranges at low
          data-rates."
          className="panel--centered"
        ></Panel>
      </div>
      <Panel>
        <div className="grid">
          <div>
            <img src="/gateway.jpg" alt="Seraphin Gateway" />
            <p>
              The Seraphin Gateway is an open source LoRaWAN Pico Gateway. It
              lets you bridge LoRa wireless network to an IP network via WiFi,
              Ethernet, 3G or 4G cellular network. The LoRa wireless allows
              users to send data and reach extremely long ranges at low
              data-rates.
            </p>
            <p>
              The Seraphin Gateway uses Semtech packet forwarder and fully
              compatible with LoRaWAN protocol. It includes a SX1301 LoRa
              concentrator, which provides 10 programmable parallel demodulation
              paths.
            </p>
            <p>
              Seraphin Gateway has pre-configured standard LoRaWAN frequency
              bands to use for different countries. User can also customized the
              frequency bands to use in their own LoRa network.
            </p>
            <p>
              Seraphin Gateway can communicate with ABP LoRaWAN end node without
              LoRaWAN server. System integrator can use it to integrate with
              their existing IoT Service without set up own LoRaWAN server or
              use 3rd party LoRaWAN service.
            </p>
            <h2>Features</h2>
            <ul>
              <li> Open Source Linux system</li>
              <li> Managed by Web GUI, SSH via LAN or WiFi</li>
              <li> Emulates 49x LoRa demodulators</li>
              <li> LoRaWAN Gateway</li>
              <li> 10 programmable parallel demodulation paths</li>
            </ul>
          </div>
          <div>
            <h2>Technical specification</h2>
            <h3>Hardware System: Linux Part:</h3>
            <ul>
              <li> 400Mhz ar9331 processor </li>
              <li> 64MB RAM</li>
              <li> 16MB Flash</li>
            </ul>
            <h3>Interface:</h3>
            <ul>
              <li> 10M/100M RJ45 Ports x 2 </li>
              <li> WiFi : 802.11 b/g/n</li>
              <li> LoRaWAN Wireless</li>
              <li> Power Input: 12V DC, 1 A </li>
              <li> USB 2.0 host connector x 1 </li>
              <li> Mini-PCI E connector x 1 </li>
              <li> SX1301 + 2 x SX1257</li>
            </ul>
            <h3>WiFi Spec:</h3>
            <ul>
              <li> IEEE 802.11 b/g/n</li>
              <li> Frequency Band: 2.4 ~ 2.462GHz</li>
              <li>
                Tx power:
                <ul>
                  <li> 11n tx power : mcs7/15: 11db mcs0 : 17db</li>
                  <li> 11b tx power: 18db </li>
                  <li> 11g 54M tx power: 12db </li>
                  <li> 11g 6M tx power: 18db</li>
                </ul>
              </li>
              <li>
                Wifi Sensitivity
                <ul>
                  <li> 11g 54M : -71dbm </li>
                  <li> 11n 20M : -67dbm</li>
                </ul>
              </li>
            </ul>
            <h3>LoRa Spec: </h3>
            <li> Up to -142.5dBm sensitivity with SX1257 Tx/Rx front-end</li>
            <li> 70 dB CW interferer rejection at 1 MHz offset</li>
            <li> Able to operate with negative SNR, CCR up to 9dB</li>
            <li> Emulates 49x LoRa demodulators and 1x (G)FSK demodulator</li>
            <li> Dual digital TX&RX radio front-end interfaces</li>
            <li> 10 programmable parallel demodulation paths</li>
            <li> Dynamic data-rate (DDR) adaptation</li>
            <li> True antenna diversity or simultaneous dual-band operation</li>
            <h3>Cellular 4G LTE (optional):</h3>
            <li> Quectel EC25 LTE module</li>
            <li> Micro SIM Slot</li>
            <li> External 4G Sticker Antenna.</li>
          </div>
        </div>
      </Panel>
    </PageLayout>
  );
}
