---
title: "ULT Freezer Monitoring"
slug: ult-freezer-monitoring
date: 2024-07-17T12:00:00+01:00
featureImage: images/blog/freezer640x480.jpg
postImage: images/blog/freezer640x480.jpg
translationKey: "ult-freezer-monitoring"
tags: ["LoRaWAN"]
categories: ["ult"]
---


### Ultra low temperature storage 

Ultra low temperature (ULT) freezers are used in medical and scientific industries to store assets at temperatures typically ranging from -40°C to -86°C.

ULT freezers are used for storing scientific reagents, cell extracts, DNA, RNA, proteins and other biological samples. 
These types of assets are often of high value, either commercially or through the years of work and effort invested into the development and research. 

The ultra low temperature environment created within the freezers is needed to minimise the chances of sample damage and the monitoring of this
environment to ensure the ongoing protection becomes a real neccessity. 


### Monitoring failures

Modern ULT freezers are equipped with alarming routines designed to notify the stakeholders about conditions that may be putting the contents of the
freezer at risk. These safety mechanisms are designed with care to ensure correct functioning, however in the event of power failure or in situations
that involve a human factor, these mechanisms fail to guarantee adequate protection.

#### Power interruptions

Power interruptions are common, and are often deliberately triggered on regular basis as a part of disaster recovery excercises. 
The electricity networks that power rooms with low temperature freezers are often designed with backup electricity supplies that 
ensure redundancy of the main power source. A well designed and routinely maintained uninterrupted power supply (UPS) system is a 
great way of ensuring continued electricity supply to ULT freezer rooms. UPS systems however require alternative power source, this 
can be fuel that power generators burn to produce electricity or a completely separate power line from a different power station. 

The threat of a lack of power supply that puts ULT freezers at risk can be mitigated with a proper UPS system in place. Interestingly
however, rising temperature in freezers that have lost power supply is the most common trigger that causes the Seraphin platform to 
issue alarm notifications. The automatic switchovers to an alternative power source fail, the fuel in backup power generator runs out 
and freezers fail to switch on again after a sudden stop and reconnection of power. 

The Seraphin platform runs on batteries guaranteed tolast 10 years and the system can be configured to use local cellular networks 
instead of on-site LAN or WiFi. Additionally, even if the sensor batteries fail, or network coverage temporarily drops, the Seraphin 
platform is equipped with monitoring routines that run in cloud and on schedule - if the platform does not receive a heartbeat from the 
sensor monitoring the ULT freezer for longer than usual, the system automatically issues alerts to notify the stakeholders.

#### Human factor

Human factor remains the most popular source of ULT freezer failures that makes the news headlines. 
The two most common mistakes made by humans are either leaving the freezer open, or deliberately unplugging it from power source. 

Leaving the freezer door slightly ajar, or not closing it completely is very common. Students working on samples, staff requiring frequent access
to the contents of the freezer, aged and worn off equipment that requires effort to close it off to gain a good seal. The Seraphin Platform 
sent out alerts in many such scenarios. The opened door to the fridge would allow the freezer to slowly start warming up, what would eventually
be detected by sensors and cause the platform to trigger a notification, and alarm the stakeholders about the raising temperature in 
the fridge.

ULT freezers can be deliberately unplugged what is unavoidable when the freezer moves location or there is work done on the
electrical installation the freezer uses. While some reasons for unlugging ULT freezers may be well justified, there had been
a major case [reported in the news](https://www.bbc.com/news/world-us-canada-66028401 "Major research lost after cleaner turned off fridge, lawsuit says") when a cleaner at the Rensselaer Polytechnic Institute in Troy, New York deliberately unplugged a freezer because of the annoying sound it 
was making after an internal alarming routine was activated. This case is especially interesting because it highlights the importance 
of not only proper monitoring in place but also, perhaps most importantly the importance of incident response and incident handling.

#### Miscellaneous - liquid nitrogen (LN2) tanks

There are other situations that may compromise the low temperature environment within freezers. In case of liquid nitrogen (LN2) tanks 
for example the lack of liquid nitrogen supply is a very common cause that leads to rising temperatures. In fact interruptions in LN2 
supply had been the most common reason for the Seraphin platform to issue notification alerts. There had been reports in the 
news that describe cases where a failure in LN2 tank monitoring became a reason for a massive loss of scientific material e.g.
[at Karolinska Institutet in Stockholm](https://www.theguardian.com/world/2024/feb/05/decades-of-research-destroyed-after-freezer-fails-at-swedish-university "Decades of research destroyed after freezer fails at Swedish university"). In comparison to Rensselaer Polytechnic Institute case
this is a more clear cut example of when the incident response could not be activated as the there had been no detection and 
notification of the fault.


### Monitoring ULT freezers effectively

A good ULT freezer monitoring solution shuold not run on the same infrastructre that the freezers use. The high-availability and
no single point of failure of the monitoring platform is a definitive requirement. This is where the cloud based systems excel in 
comparison to standard self-hosted or on-site only systems. The Seraphin platform, while still runnning in the cloud, can be configured at the client
sites as a self contained solution that does not require access to the client's broadband, ethernet, WiFi or power networks.
The platform monitors the temperatures in the ULT freezers at regular time intervals and if, for any reason, the temperature 
cannot be read the platform will report it and notify the stakeholder accordingly. The batteries, power networks, cellular networks
and equipment may fail hence the ability to understand the desired normal state of the system and to act when there is a deviation from
what is considered the safe norm is at the heart of a well designed monitoring solution.
