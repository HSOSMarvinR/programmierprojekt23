# Programmierprojekt23 Dokumentation

## Einleitung

### Projektbeschreibung

Hier ist das Repository zu Entwicklung des Frontends der Projektarbeit im Modul "Programmierprojekt".
Die Web-Anwendung soll es dem Nutzer ermöglichen, verschiedene Dateiformate hochzuladen, sodass die Anwendung aus den gelieferten Daten eine K-Means Analyse mit Diagrammdarstellung durchführt.
Der Nutzer soll darüber hinaus die Möglichkeit haben, das Diagramm herunterzuladen. 

### Organisatorische Entscheidungen

- Frage: K-Means oder Entscheidungsbäume?
   - K-Means
- Frage: Welche Dateiformate als Input?
   - Zunächst nur CSV und XLSX. Je nach Aufwand könnten später weitere hinzugefügt werden.

## Funktionen

- Upload einer CSV-Datei separiert Punkt oder Komma
- Berechnung der K-Means Cluster lokal oder remote
- Download der Grafik mit den K-Means Clustern als JPEG-Datei
- Normalisierung der Daten mit der Min-Max-, oder der Z-Normalisierung
- Vorgabe von einem K oder automatische Bestimmung des beste Ks durch die Elbow-Methode
- Wahl zwischen den Distanzmatrzien der Manhattan Distanz oder der euklidischen Distanz
 
## Starten der Anwendung

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
