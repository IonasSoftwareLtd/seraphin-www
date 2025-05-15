---
title: "Monitorowanie zamrażarek niskotemperaturowych"
slug: monitorowanie-zamrazarek-niskotemperaturowych
date: 2024-07-17T12:00:00+01:00
featureImage: images/blog/freezer640x480.jpg
postImage: images/blog/freezer640x480.jpg
translationKey: "ult-freezer-monitoring"
tagi: ["LoRaWAN"]
kategorie: ["niskotemperaturowe"]
---

### Przechowywanie w bardzo niskich temperaturach 

Zamrażarki ultraniskotemperaturowe (ULT) są stosowane w przemyśle medycznym i naukowym do przechowywania zasobów w temperaturach zazwyczaj od -40°C do -86°C.

Zamrażarki ULT są używane do przechowywania odczynników naukowych, ekstraktów komórkowych, DNA, RNA, białek i innych próbek biologicznych. 
Tego typu zasoby mają często wysoką wartość, zarówno komercyjną, jak i wynikającą z lat pracy i wysiłku włożonego w rozwój i badania. 

Środowisko o bardzo niskiej temperaturze stworzone w zamrażarkach jest potrzebne, aby zminimalizować ryzyko uszkodzenia próbki.
Monitorowanie tego środowiska celu zapewnienia ciągłej ochrony staje się prawdziwą koniecznością.

### Monitorowanie awarii

Nowoczesne zamrażarki ULT są wyposażone w procedury alarmowe zaprojektowane w celu powiadamiania interesariuszy o warunkach, które mogą zagrażać zawartości zamrażarki. Te mechanizmy bezpieczeństwa zostały zaprojektowane z dbałością o zapewnienie prawidłowego działania, jednak w przypadku awarii zasilania lub w sytuacjach, w których występuje czynnik ludzki, mechanizmy te nie gwarantują odpowiedniej ochrony.

#### Przerwy w zasilaniu

Przerwy w zasilaniu są powszechne i często są celowo wywoływane regularnie w ramach ćwiczeń związanych z usuwaniem skutków awarii. Sieci elektryczne zasilające pomieszczenia z zamrażarkami niskotemperaturowymi są często projektowane z zapasowymi źródłami energii elektrycznej, które zapewniają niezależność od głównego źródła zasilania. Dobrze zaprojektowany i rutynowo konserwowany system zasilania awaryjnego (UPS) to świetny sposób na zapewnienie ciągłości dostaw energii elektrycznej do mroźni ULT. Systemy UPS wymagają jednak alternatywnego źródła zasilania, którym może być paliwo spalane przez generatory w celu wytworzenia energii elektrycznej lub całkowicie oddzielna linia energetyczna z innej elektrowni.

Zagrożenie brakiem zasilania, które naraża zamrażarki ULT na ryzyko, można złagodzić za pomocą odpowiedniego systemu UPS. Co ciekawe jednak, wzrost temperatury w zamrażarkach, które utraciły zasilanie, jest najczęstszym wyzwalaczem, który powoduje, że platforma Seraphin wysyła powiadomienia alarmowe. Automatyczne przełączanie na alternatywne źródło zasilania zawodzi, kończy się paliwo w zapasowym generatorze zasilania, a zamrażarki nie włączają się ponownie po nagłym zatrzymaniu i ponownym przywróceniu zasilania.

Platforma Seraphin działa na bateriach o gwarantowanej żywotności 10 lat, a system można skonfigurować tak, aby korzystał z lokalnych sieci komórkowych zamiast lokalnej sieci LAN lub WiFi. Ponadto, nawet jeśli baterie czujników ulegną awarii lub zasięg sieci tymczasowo spadnie, platforma Seraphin jest wyposażona w procedury monitorowania, które działają w chmurze, w oparciu o harmonogram - jeśli platforma nie otrzyma odczytu z czujnika monitorującego zamrażarkę ULT przez czas dłuższy niż zwykle, system automatycznie wysyła alerty, aby powiadomić wszystkich interesariuszy.

#### Czynnik ludzki

Czynnik ludzki pozostaje najpopularniejszym źródłem awarii zamrażarek ULT, które trafiają na pierwsze strony gazet. Dwa najczęstsze błędy popełniane przez ludzi to pozostawienie otwartej zamrażarki lub celowe odłączenie jej od źródła zasilania.

Pozostawianie drzwi zamrażarki lekko uchylonych lub niedomykanie ich całkowicie jest bardzo powszechne. Studenci pracujący nad próbkami, personel wymagający częstego dostępu do zawartości zamrażarki, stary i zużyty sprzęt, który wymaga wysiłku, aby go zamknąć w celu uzyskania dobrego uszczelnienia. Platforma Seraphin wysyła alerty w wielu takich scenariuszach. Otwarte drzwi lodówki pozwoliłyby zamrażarce powoli zacząć się nagrzewać, co w końcu zostałoby wykryte przez czujniki i spowodowałoby, że platforma uruchomiłaby powiadomienie i zaalarmowała interesariuszy o wzroście temperatury w lodówce.

Zamrażarki ULT mogą być celowo odłączane od zasilania, co jest nieuniknione, gdy zamrażarka zmienia lokalizację lub wykonywane są prace przy instalacji elektrycznej, z której korzysta. Podczas gdy niektóre powody odłączenia zamrażarek ULT mogą być uzasadnione, w wiadomościach pojawił się [poważny przypadek (EN)](https://www.bbc.com/news/world-us-canada-66028401 "Major research lost after cleaner turned off fridge, lawsuit says"), gdy sprzątaczka w Rensselaer Polytechnic Institute w Troy w stanie Nowy Jork celowo odłączyła zamrażarkę z powodu irytującego dźwięku, który ta wydawała po aktywacji wewnętrznej procedury alarmowej. Przypadek ten jest szczególnie interesujący, ponieważ podkreśla znaczenie nie tylko odpowiedniego monitorowania, ale także, być może przede wszystkim, znaczenie reagowania na incydenty i obsługi incydentów.

#### Inne - zbiorniki ciekłego azotu (LN2)

Istnieją również inne sytuacje, które mogą zagrozić środowisku niskotemperaturowemu w zamrażarkach. Na przykład w przypadku zbiorników z ciekłym azotem (LN2) brak dostaw ciekłego azotu jest bardzo częstą przyczyną wzrostu temperatury. W rzeczywistości przerwy w dostawie LN2 były najczęstszym powodem wydawania alertów przez platformę Seraphin. W wiadomościach pojawiły się doniesienia opisujące przypadki, w których awaria monitorowania zbiornika LN2 stała się przyczyną ogromnej utraty materiałów naukowych, np. [w Karolinska Institutet w Sztokholmie (EN)](https://www.theguardian.com/world/2024/feb/05/decades-of-research-destroyed-after-freezer-fails-at-swedish-university "Decades of research destroyed after freezer fails at Swedish university"). W porównaniu z przypadkiem Rensselaer Polytechnic Institute jest to bardziej wyraźny przykład sytuacji, w której reakcja na incydent nie mogła zostać aktywowana, ponieważ nie wykryto i nie powiadomiono o usterce.

### Skuteczne monitorowanie zamrażarek ULT

Dobre rozwiązanie do monitorowania zamrażarek ULT nie powinno działać na tej samej infrastrukturze, z której korzystają zamrażarki. Wysoka dostępność i brak pojedynczego punktu awarii platformy monitorowania jest podstawowym wymogiem. To właśnie tutaj systemy oparte na chmurze wyróżniają się w porównaniu ze standardowymi systemami samoobsługowymi lub działającymi tylko w miejscu instalacji. Platforma Seraphin, choć nadal działa w chmurze, może być skonfigurowana w siedzibie klienta jako samodzielne rozwiązanie, które nie wymaga dostępu do sieci szerokopasmowej, ethernetowej, WiFi ani sieci energetycznej klienta. Platforma monitoruje temperatury w zamrażarkach ULT w regularnych odstępach czasu, a jeśli z jakiegokolwiek powodu nie można odczytać temperatury, platforma zgłosi to i odpowiednio powiadomi zainteresowane strony. Akumulatory, sieci energetyczne, sieci komórkowe i sprzęt mogą ulec awarii, dlatego zdolność do zrozumienia pożądanego normalnego stanu systemu i działania w przypadku odchylenia od tego, co jest uważane za bezpieczną normę, jest w samym sercu dobrze zaprojektowanego rozwiązania monitorującego.