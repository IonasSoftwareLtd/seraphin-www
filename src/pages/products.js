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
            image="/temperature-sensor.jpg"
            url="/products/SoilPhSensor"
            header="Soil Ph Sensor"
            content="The Soil Ph Sensor is designed to monitor Ph of soil for different
            environment."
          />
          <Product
            image="/temperature-sensor.jpg"
            url="/products/CustomizedSensor"
            header="Customized sensor"
            content="Two types of connections RS485 and UART interface for connecting various sensors."
          />
          <Product
            image="/temperature-sensor.jpg"
            url="/products/WaterLeakSensor"
            header="Water leak sensor"
            content="Water leak sensor will detect and water spillage and notifiy you."
          />
          <Product
            image="/temperature-sensor.jpg"
            url="/products/DoorSensor"
            header="Door sensor"
            content="Door sensor will detect weather door was opened or closed."
          />
          <Product
            image="/temperature-sensor.jpg"
            url="/products/LiquidLevelSensor"
            header="Liquid level sensor"
            content="Liquid Level Measurement by Ultrasonic technology."
          />
          <Product
            image="/temperature-sensor.jpg"
            url="/products/DistanceSensor"
            header="Distance sensor"
            content="Laser technology for distance detection."
          />
          <Product
            image="/temperature-sensor.jpg"
            url="/products/TemperatureAndHumiditySensor"
            header="Temperature & Humidity Sensor"
            content="Built-in Temperature & Humidity sensor."
          />
          <Product
            image="/temperature-sensor.jpg"
            url="/products/LowTemperatureSensor"
            header="Low temperature sensor"
            content="Low temperature sensor to gather real time data in extremely low temperatures."
          />
        </ProductList>
      </Panel>
    </PageLayout>
  );
}
