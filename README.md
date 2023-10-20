# Programmierprojekt23 Dokumentation

### Lokale Ausführung des Programms

Um das Programm lokal auszuführen muss das Git repository zuerst heruntergeladen werden. Um die Anwendung auszuführen, müssen zuerst die Dependencys geladen werden. Hierfür wird Node.js benötigt. Im Node.js Terminal muss man dann in den Projektordner navigieren und den Befehl 'npm install' ausführen. Sind alle Dependencies geladen kann mit 'ng serve' die Anwendung gestartet werden. Standardmäßig wird die Anwendung unter localhost:8080 gestartet. 

### Projektbeschreibung

Hier ist das Repository zu Entwicklung des Frontends der Projektarbeit im Modul "Programmierprojekt".
Die Web-Anwendung soll es dem Nutzer ermöglichen, verschiedene Dateiformate hochzuladen, sodass die Anwendung aus den gelieferten Daten eine K-Means Analyse mit Diagrammdarstellung durchführt.
Der Nutzer soll darüber hinaus die Möglichkeit haben, das Diagramm herunterzuladen. 

### Organisatorische Entscheidungen

- Frage: K-Means oder Entscheidungsbäume?
   - K-Means
- Frage: Welche Dateiformate als Input?
   - Nur CSV-Datei. Entweder separiert mit Punkt oder mit Komma

## Funktionen

- Upload einer CSV-Datei separiert Punkt oder Komma
- Berechnung der K-Means Cluster lokal oder remote
- Download der Grafik mit den K-Means Clustern als JPEG-Datei
- Normalisierung der Daten mit der Min-Max-, oder der Z-Normalisierung
- Vorgabe von einem K oder automatische Bestimmung des beste Ks durch die Elbow-Methode
- Wahl zwischen den Distanzmatrzien der Manhattan Distanz oder der euklidischen Distanz

## Technologien

| Technologie   | Nutzen             |
| ------------- | -------------------|
| Node.js       | Webserver          |
| Angular       | Frontend           |
| Typescript    | Frontend           |
| chart.js      | Diagrammerstellung |
| PrimeNG       | UI Kit             |

Siehe PrimeNG Doku und Komponenten hier: https://primeng.org/installation

## Projektstatus

:green_circle:	 Abgeschlossen
