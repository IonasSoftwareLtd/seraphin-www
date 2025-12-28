---
title: "ULT-Gefrierschranküberwachung"
slug: ult-gefrierschrankuberwachung
date: 2025-11-17T12:00:00+01:00
featureImage: images/blog/freezer640x480.jpg
postImage: images/blog/freezer640x480.jpg
translationKey: "ult-gefrierschrankuberwachung"
tags: ["LoRaWAN"]
categories: ["ult"]
---


### Ultra-Tiefkühlspeicherung 

Ultratiefkühlschränke (ULT) werden in der Medizin und Wissenschaft zur Lagerung von Gütern bei Temperaturen zwischen -40 °C und -86 °C eingesetzt.

ULT-Gefrierschränke werden zur Lagerung von wissenschaftlichen Reagenzien, Zellextrakten, DNA, RNA, Proteinen und anderen biologischen Proben verwendet. 
Diese Art von Materialien sind oft von hohem Wert, entweder kommerziell oder aufgrund der jahrelangen Arbeit und Mühe, die in ihre Entwicklung und Erforschung investiert wurde. 

Die in den Gefrierschränken geschaffene Ultra-Tiefkühlumgebung ist notwendig, um das Risiko einer Beschädigung der Proben zu minimieren, und die Überwachung dieser
Umgebung, um den kontinuierlichen Schutz zu gewährleisten, wird zu einer echten Notwendigkeit.


### Überwachungsfehler

Moderne ULT-Gefrierschränke sind mit Alarmroutinen ausgestattet, die die Beteiligten über Zustände informieren sollen, die den Inhalt des
Gefrierschranks gefährden könnten. Diese Sicherheitsmechanismen sind sorgfältig konzipiert, um eine korrekte Funktion zu gewährleisten. Bei einem Stromausfall oder in Situationen,
in denen menschliches Versagen eine Rolle spielt, können diese Mechanismen jedoch keinen ausreichenden Schutz garantieren.

#### Stromunterbrechungen

Stromausfälle sind häufig und werden oft im Rahmen von Notfallübungen regelmäßig absichtlich ausgelöst. 
Die Stromnetze, die Räume mit Tiefkühlschränken versorgen, sind oft mit Notstromversorgungen ausgestattet, die 
die Redundanz der Hauptstromquelle gewährleisten. Ein gut konzipiertes und regelmäßig gewartetes unterbrechungsfreies Stromversorgungssystem (USV) ist eine 
hervorragende Möglichkeit, die kontinuierliche Stromversorgung von Tiefkühlräumen sicherzustellen. USV-Systeme benötigen jedoch eine alternative Stromquelle, beispielsweise 
Brennstoff, den Generatoren zur Stromerzeugung verbrennen, oder eine völlig separate Stromleitung von einem anderen Kraftwerk. 

Die Gefahr eines Stromausfalls, der ULT-Gefrierschränke gefährdet, kann durch ein geeignetes USV-System gemindert werden. Interessanterweise
ist jedoch der Anstieg der Temperatur in Gefrierschränken, die ihre Stromversorgung verloren haben, der häufigste Auslöser für die Ausgabe von Alarmmeldungen durch die Seraphin-Plattform .
 Die automatische Umschaltung auf eine alternative Stromquelle schlägt fehl, der Kraftstoff im Notstromaggregat geht zur Neige 
und die Gefrierschränke lassen sich nach einem plötzlichen Ausfall und der Wiederherstellung der Stromversorgung nicht wieder einschalten. 

Die Seraphin-Plattform wird mit Batterien betrieben, die eine Lebensdauer von 10 Jahren garantieren, und das System kann so konfiguriert werden, dass es lokale Mobilfunknetze 
anstelle von LAN oder WLAN vor Ort nutzt. Selbst wenn die Batterien der Sensoren ausfallen oder die Netzabdeckung vorübergehend unterbrochen wird, ist die Seraphin-Plattform 
mit Überwachungsroutinen ausgestattet, die in der Cloud und nach Zeitplan ausgeführt werden. Wenn die Plattform länger als gewöhnlich keinen Heartbeat vom 
Sensor erhält, der den ULT-Gefrierschrank überwacht, gibt das System automatisch Warnmeldungen aus, um die Beteiligten zu benachrichtigen.

#### Menschlicher Faktor

Der Faktor Mensch bleibt die häufigste Ursache für Ausfälle von ULT-Gefrierschränken, die Schlagzeilen machen. 
Die beiden häufigsten Fehler, die Menschen begehen, sind entweder das Offenlassen des Gefrierschranks oder das absichtliche Herausziehen des Netzsteckers. 

Es kommt sehr häufig vor, dass die Tür des Gefrierschranks leicht offen steht oder nicht vollständig geschlossen wird. Studenten, die an Proben arbeiten, Mitarbeiter, die häufig auf
den Inhalt des Gefrierschranks zugreifen müssen, alte und abgenutzte Geräte, die nur mit Mühe geschlossen werden können, um eine gute Abdichtung zu erreichen. Die Seraphin-Plattform 
hat in vielen solchen Szenarien Warnmeldungen verschickt. Durch die geöffnete Kühlschranktür würde sich der Gefrierschrank langsam erwärmen, was schließlich
von Sensoren erkannt würde und die Plattform dazu veranlassen würde, eine Benachrichtigung auszulösen und die Beteiligten auf die steigende Temperatur im 
Kühlschrank

ULT-Gefrierschränke können absichtlich vom Stromnetz getrennt werden, was unvermeidbar ist, wenn der Gefrierschrank an einen anderen Standort gebracht wird oder Arbeiten an der
elektrischen Installation durchgeführt werden, die der Gefrierschrank nutzt. Auch wenn es durchaus berechtigte Gründe für das Trennen von ULT-Gefrierschränken vom Stromnetz geben mag, gab es
einen schwerwiegenden Fall [über den in den Nachrichten berichtet wurde](https://www.bbc.com/news/world-us-canada-66028401 „Wichtige Forschungsergebnisse nach Ausschalten des Kühlschranks durch Reinigungskraft verloren, laut Klage”) einen schwerwiegenden Fall, als eine Reinigungskraft am Rensselaer Polytechnic Institute in Troy, New York, einen Gefrierschrank absichtlich vom Stromnetz trennte, weil er 
nach der Aktivierung einer internen Alarmroutine ein störendes Geräusch von sich gab. Dieser Fall ist besonders interessant, da er nicht nur die Bedeutung 
einer ordnungsgemäßen Überwachung, sondern auch – und das ist vielleicht noch wichtiger – die Bedeutung der Reaktion auf Vorfälle und des Umgangs mit Vorfällen hervorhebt.

#### Sonstiges – Flüssigstickstofftanks (LN2)

Es gibt weitere Situationen, die die niedrige Temperatur in Gefrierschränken beeinträchtigen können. Bei Flüssigstickstofftanks (LN2) 
ist beispielsweise die mangelnde Versorgung mit Flüssigstickstoff eine sehr häufige Ursache für steigende Temperaturen. Tatsächlich waren Unterbrechungen in der LN2-Versorgung 
der häufigste Grund für die Ausgabe von Benachrichtigungswarnungen durch die Seraphin-Plattform. In den Nachrichten gab es Berichte 
über Fälle, in denen ein Versagen der LN2-Tanküberwachung zu einem massiven Verlust von wissenschaftlichem Material führte, z. B.
[am Karolinska Institutet in Stockholm](https://www.theguardian.com/world/2024/feb/05/decades-of-research-destroyed-after-freezer-fails-at-swedish-university „Jahrzehntelange Forschungsarbeit nach Ausfall eines Gefrierschranks an einer schwedischen Universität zerstört“). Im Vergleich zum Fall des Rensselaer Polytechnic Institute
ist dies ein eindeutigeres Beispiel dafür, dass die Notfallmaßnahmen nicht aktiviert werden konnten, da der Fehler nicht erkannt und 
gemeldet wurde.


### Effektive Überwachung von ULT-Gefrierschränken

Eine gute Überwachungslösung für ULT-Gefrierschränke sollte nicht auf derselben Infrastruktur laufen wie die Gefrierschränke selbst. Die hohe Verfügbarkeit und
das Fehlen eines Single Point of Failure der Überwachungsplattform sind zwingende Voraussetzungen. Hier zeichnen sich cloudbasierte Systeme im 
Vergleich zu herkömmlichen selbst gehosteten oder ausschließlich vor Ort installierten Systemen aus. Die Seraphin-Plattform läuft zwar weiterhin in der Cloud, kann jedoch beim Kunden
als eigenständige Lösung konfiguriert werden, die keinen Zugriff auf die Breitband-, Ethernet-, WLAN- oder Stromnetze des Kunden erfordert.
Die Plattform überwacht die Temperaturen in den ULT-Gefrierschränken in regelmäßigen Zeitabständen. Wenn aus irgendeinem Grund die Temperatur 
nicht ausgelesen werden kann, meldet die Plattform dies und benachrichtigt die Beteiligten entsprechend. Batterien, Stromnetze, Mobilfunknetze
und Geräte können ausfallen. Daher ist die Fähigkeit, den gewünschten Normalzustand des Systems zu verstehen und bei Abweichungen von
der als sicher geltenden Norm zu reagieren, das Herzstück einer gut konzipierten Überwachungslösung.