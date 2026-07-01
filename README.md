# Christuskirche Lörrach: Astro-Workshop-Demo

Eine vorzeigbare Workshop-Demo für eine statische Homepage der Christuskirche Lörrach.

## Ziel

- einfache, moderne Struktur
- Inhalte aus Markdown
- Veranstaltungen aus strukturierten Dateien
- kein CMS-Zwang
- kein Login
- keine Datenbank
- statisch deploybar

## Was die Demo im Workshop zeigen soll

1. Die Homepage ist einfacher als die bisherige Website.
2. Termine kommen automatisch aus strukturierten Event-Dateien.
3. Flyer können später per KI in solche Event-Dateien umgewandelt werden.
4. Die Seite braucht kein klassisches CMS, keine Datenbank und keinen Login.

## Projektstruktur

```text
.
├── astro.config.mjs
├── flyer-input/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── events/
│   │   └── pages/
│   ├── data/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── content.config.ts
├── package.json
└── tsconfig.json
```

## Installation

Voraussetzung:

- Node.js 20 oder neuer
- npm

Dann im Projektordner:

```bash
npm install
```

## Lokal starten

```bash
npm run dev
```

Danach die angezeigte lokale URL im Browser öffnen.

## Seiten

Die Hauptnavigation ist bewusst auf fünf Punkte reduziert:

- Start
- Gottesdienste
- Gemeindeleben
- Lebensstationen
- Kontakt

Zusätzlich gibt es:

- `/termine/` für die Veranstaltungsübersicht
- `/livestream/` als separate Unterseite
- `/konzept/` für die Workshop-Erklärung

## Inhalte pflegen

### Markdown-Seiten

Die Beispielseiten liegen in:

```text
src/content/pages/
```

Beispiel:

- `gottesdienste.md`
- `gemeindeleben.md`
- `lebensstationen.md`
- `kontakt.md`
- `livestream.md`

Diese Dateien liefern Titel, Beschreibung, Intro und den eigentlichen Seiteninhalt.

### Neue Veranstaltung anlegen

Neue Events kommen in:

```text
src/content/events/
```

Beispieldatei:

```md
---
title: Gemeindeabend
description: Offener Abend mit Austausch und Begegnung.
start: 2026-09-10T19:00:00+02:00
end: 2026-09-10T21:00:00+02:00
location: Kirche im Quadrat, Nansenstraße 10, 79539 Lörrach
category: Gemeindeleben
featured: true
livestream: false
audience: Offen für alle
registration: Keine Anmeldung nötig
---

Optionaler Zusatztext.
```

Wichtige Felder:

- `title`
- `description`
- `start`
- `end`
- `location`
- `category`
- `featured`
- `livestream`

Die Startseite zeigt automatisch die nächsten hervorgehobenen Veranstaltungen.
Die Seite `/termine/` zeigt alle kommenden Events.

### Sichtbare Demo-Veranstaltung

Für den Workshop ist bewusst ein Beispieltermin angelegt:

- `src/content/events/2026-07-03-workshop-demo-gemeindeabend.md`

Dieser Eintrag ist als Demo markiert und erscheint automatisch in der Startseite
und auf `/termine/`.

## Flyer-Import vorbereiten

Eingehende Flyer kommen zunächst in:

```text
flyer-input/
```

Die Idee:

1. Flyer dort ablegen.
2. KI/Codex liest den Flyer aus.
3. Die Inhalte werden in strukturierte Event-Daten übersetzt.
4. Danach wird eine neue Datei in `src/content/events/` angelegt.

Kurzform für den Workshop:

`Flyer -> KI/OCR -> Event-Datei -> Homepage`

Details stehen in [flyer-input/README.md](./flyer-input/README.md).

## Späteres Deployment

Geeignete Ziele für statisches Deployment sind zum Beispiel:

- Netlify
- Vercel
- GitHub Pages
- kirchliches Hosting mit statischem Upload

Typischer Ablauf:

```bash
npm run build
```

Das Ergebnis liegt danach im Build-Ordner von Astro und kann statisch veröffentlicht werden.

## Workshop-Demo durchführen

Sinnvolle Klickreihenfolge für eine Präsentation:

1. Startseite öffnen und den einfachen Einstieg zeigen.
2. Den Block „Nächste Veranstaltungen“ als automatisch gepflegte Vorschau erklären.
3. Die Demo-Veranstaltung auf der Startseite zeigen.
4. Danach `/termine/` öffnen und zeigen, dass dieselbe Event-Datei dort ebenfalls erscheint.
5. Anschließend `/konzept/` öffnen und den Ablauf `Flyer -> KI -> Event-Datei -> Homepage` erklären.

## Inhaltliche Richtung des Prototyps

Die Texte sind vorläufige Platzhalter bzw. kurze, redaktionell überarbeitete Zusammenfassungen auf Basis der bisherigen Website der Christuskirche.
