import React from "react";
import { FirstPanel } from "../component/FirstPanel";
import { PageLayout } from "../component/PageLayout";
import { Panel } from "../component/Panel";
import { Product, ProductList } from "../component/Product";
export default function Sensors() {
  return (
    <PageLayout>
      <FirstPanel>
        <Panel
          header="Our sensors"
          headerLevel={1}
          content="Ionas Software Ltd is the vendor and provider of the Seraphin Platform. 
            The company also offers a wide range of sensors verified to work with the platform 
            at very competitive prices"
          className="panel--centered"
        >
          <div className="two-columns">
            <div className="col-left">
              <ul>
                <li> Up to 10 years battery lifetime</li>
                <li> Long range distances supported</li>
                <li> Encrypted connections</li>
                <li> Reliable transmission in noisy environment</li>
                <li> Customisable reading time interval</li>
                <li> Event triggered transmission</li>
              </ul>
            </div>
            <div className="col-right">
              <p>
                Seraphin Platform works with a variety of LoRA compliant sensors.
                LoRa specification has become the de-facto standard in the IoT
                industry for low-powered, long-range radio telemetry solutions.
              </p>
              <p>
                Seraphin sensors can be configured to emit data in response to an
                event, or at regular time intervals. All data is encrypted during
                transmission using strong cipher algorithms. The underlying
                communications protocol is engineered to work in noisy environments
                and guarantees a very high delivery ratio. Our verified LoRA
                compliant sensors can establish reliable communication links that
                extend from the closest vicinity up to 10 miles where direct line of
                sight is not obstructed.
              </p>
            </div>
          </div>
        </Panel>
      </FirstPanel>
      <Panel>
        <ProductList>
          <Product
            image="/sensors/LowTemp.png"
            url="/sensors/LowTemperatureSensor"
            header="Low temperature sensor"
            content="Low temperature sensor to gather real time data in extremely low temperatures. 
            Great for monitoring freezers and fridges with biological materials in labolatories. 
            Temperature measurement ranges from -196 up to 150°C. 
            Supplied with industry standard PT100 temperature sensor on 2m flying lead."
          />
          <Product
            image="/sensors/TempHum.png"
            url="/sensors/TemperatureAndHumiditySensor"
            header="Temperature & Humidity Sensor"
            content="Very versatile sensor with built-in temperature and humidity measurement. 
            This sensor has an interface for an external senros as well. 
            External sensor can be another temperature sensor to measure another location (i.e. outside), 
            interrupt sensor (i.e. a door sensor), illumination sensor, ADC (analogue to digital) sensor, 
            count enevts and more. Let us know your application and we will do the rest."
          />
          <Product
            image="/sensors/WaterLevel.png"
            url="/sensors/LiquidLevelSensor"
            header="Liquid level sensor"
            content="Liquid level measurement sensor using ultrasonic technology for non contact measurement. 
            Detection range is from 2 to 200cm. Sensor is mounted on the bottom of the container so 
            there is no need to drill holes etc. Works well with a regular shape and smooth 
            surface containers made of steel, glass, ceramics, non foaming plastic. 
            IP66 rated enclosure means that the unit is well protected against accidental spills."
          />
          <Product
            image="/sensors/Door.png"
            url="/sensors/DoorSensor"
            header="Door sensor"
            content="Sensor will detect open/close state of a door and inform you about it. 
            It can send alert i.e. in case if a door was open for certain amount of time or 
            whenever door status changes. Also it can count the state change events. 
            Sensor enclosure rated for an outdoor use."
          />
          <Product
            image="/sensors/WaterLeak.png"
            url="/sensors/WaterLeakSensor"
            header="Water leak sensor"
            content="Water leak sensor detects a water between two metal probes. Sensor sends status 
            periodicaly as well as everytime leak occurs. It also provides water leak times and 
            calculates leak duration. To prolong the battery life some reporting functions can be disabled. 
            This sensor benefits from user replaceble AAA batteries."
          />

          <Product
            image="/sensors/Distance.png"
            url="/sensors/DistanceSensor"
            header="Distance sensor"
            content="Sensor employs laser technology for distance detection. Measurement range starts 
            from 10cm up to a 6m - with accuracy of ±5cm, and extends up to 12m - with accuracy 
            of ±1% above 6m. By default sensors send uplinks periodically, but the measurement can be
            made on request by means of interrupt input (i.e.) initiated by button press. The sensor has 
            also an interface for a temperature sensor if required."
          />
          <Product
            image="/sensors/SoilPH.png"
            url="/sensors/SoilPhSensor"
            header="Soil Ph Sensor"
            content="Sensor is designed for use in agriculture to monitor soil Ph (with temperature compensation) 
            and also temperature. Sensor accuracy is at ±2% at temperature between 0 - 50°C. Sensor has a
             3.5m long flying lead and an IP68 rating, so can be burried underground."
          />
          <Product
            image="/sensors/customised.png"
            url="/sensors/CustomizedSensor"
            header="Customized sensor"
            content="It provides an interface to RS485 or UART types of sensors. It can also provide 3.3 or 5V power to conected sensors."
          />
        </ProductList>
      </Panel>
    </PageLayout>
  );
}
