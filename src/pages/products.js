import React from "react";
import { PageHeader } from "../component/PageHeader";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";
import { Product, ProductList } from "../component/Product";

export default function Products() {
  return (
    <PageLayout>
      <div className="first-panel">
        <PageHeader />
        <Panel
          header="Our products"
          content="We offer wide range of real time monitoring sensors for monitoring
          your inventory and assets."
          className="panel--centered"
        ></Panel>
      </div>
      <Panel>
        <ProductList>
          <Product
            image="/temperature-sensor.jpg"
            url="/products/TemperatureTransmitter"
            header="Seraphin Temperature Transmitter"
            content="The Seraphin Temperature Transmitter Industrial LoRaWAN Temperature Transmitter is
            designed to monitor temperature for different environment. It
            supports to read PT100 probe and convert the value to temperature
            and uplink to IoT server via LoRaWAN protocol."
          />
          <Product
            image="/gateway.jpg"
            url="/products/Gateway"
            header="Seraphin Gateway"
            content="The Seraphin Gateway is an open source LoRaWAN Pico Gateway. It lets you bridge
              LoRa wireless network to an IP network via WiFi, Ethernet, 3G or 4G
              cellular network. The LoRa wireless allows users to send data and
              reach extremely long ranges at low data-rates."
          />
        </ProductList>
      </Panel>
    </PageLayout>
  );
}
