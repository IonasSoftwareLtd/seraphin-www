import React from "react";
import { PageHeader } from "../component/PageHeader";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";
import { Product, ProductList } from "../component/Product";

export default function Sensors() {
  return (
    <PageLayout>
      <div className="first-panel">
        <PageHeader />
        <Panel
          header="Our sensors"
          content="We offer wide range of real time monitoring sensors for monitoring
          your inventory and assets."
          className="panel--centered"
        ></Panel>
      </div>
      <Panel>
        <ProductList>
          <Product
            image="/sensors/SoilPH.png"
            url="/sensors/SoilPhSensor"
            header="Soil Ph Sensor"
            content="The Soil Ph Sensor is designed to monitor Ph of soil for different
            environment."
          />
          <Product
            image="/sensors/customised.png"
            url="/sensors/CustomizedSensor"
            header="Customized sensor"
            content="Two types of connections RS485 and UART interface for connecting various sensors."
          />
          <Product
            image="/sensors/WaterLeak.png"
            url="/sensors/WaterLeakSensor"
            header="Water leak sensor"
            content="Water leak sensor will detect and water spillage and notifiy you."
          />
          <Product
            image="/sensors/Door.png"
            url="/sensors/DoorSensor"
            header="Door sensor"
            content="Door sensor will detect weather door was opened or closed."
          />
          <Product
            image="/sensors/WaterLevel.png"
            url="/sensors/LiquidLevelSensor"
            header="Liquid level sensor"
            content="Liquid Level Measurement by Ultrasonic technology."
          />
          <Product
            image="/sensors/Distance.png"
            url="/sensors/DistanceSensor"
            header="Distance sensor"
            content="Laser technology for distance detection."
          />
          <Product
            image="/sensors/TempHum.png"
            url="/sensors/TemperatureAndHumiditySensor"
            header="Temperature & Humidity Sensor"
            content="Built-in Temperature & Humidity sensor."
          />
          <Product
            image="/sensors/LowTemp.png"
            url="/sensors/LowTemperatureSensor"
            header="Low temperature sensor"
            content="Low temperature sensor to gather real time data in extremely low temperatures."
          />
        </ProductList>
      </Panel>
    </PageLayout>
  );
}
