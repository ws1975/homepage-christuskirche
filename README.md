# Christuskirche Lörrach: Statische Website mit Astro

Ein erster ernsthafter Website-Entwurf für die Christuskirche Lörrach.

## Ziel

- einfache, verständliche Homepage
- Inhalte aus Markdown
- Termine aus strukturierten Event-Dateien
- statisches Deployment
- keine Datenbank
- kein Login
- kein externes CMS

## Projektstruktur

```text
.
├── astro.config.mjs
├── flyer-input/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── events/
│   │   └── pages/
│   ├── data/
│   ├── layouts/
│   ├── lib/
│   └── pages/
├── package.json
└── tsconfig.json
```

## Installation

Voraussetzung:

- Node.js 20 oder neuer
- `pnpm` oder `npm`

Im Projektordner:

```bash
pnpm install
```

Alternativ:

```bash
npm install
```

## Lokal starten

```bash
pnpm run dev
```

## Seitenstruktur

Die Hauptnavigation bleibt bewusst einfach:

- Start
- Gottesdienste
- Gemeindeleben
- Lebensstationen
- Termine
- Kontakt

Weitere Inhalte sind als schlanke Unterseiten vorbereitet, zum Beispiel:

- Kinder & Familien
- Jugend
- Hauskreise
- Musik
- Senioren
- Livestream
- Spenden & Förderung
- Über uns

Die interne Seite `/konzept/` bleibt erhalten, erscheint aber nicht in der Hauptnavigation.

## Inhalte pflegen

### Seiteninhalte

Statische Inhalte liegen als Markdown-Dateien in:

```text
src/content/pages/
```

Beispiele:

- `gottesdienste.md`
- `gemeindeleben.md`
- `kinder-familien.md`
- `musik.md`
- `ueber-uns.md`

### Veranstaltungen

Veranstaltungen liegen in:

```text
src/content/events/
```

Beispiel:

```md
---
title: Gottesdienst am Sonntag
description: Predigt, Musik und Begegnung für alle Generationen.
start: 2026-09-13T10:10:00+02:00
end: 2026-09-13T11:30:00+02:00
location: Kirche im Quadrat, Nansenstraße 10, 79539 Lörrach
category: Gottesdienst
featured: true
livestream: true
audience: Für alle Generationen
---

Nach dem Gottesdienst ist Zeit für Begegnung.
```

Zulässige Kategorien:

- `Gottesdienst`
- `Kinder/Familien`
- `Jugend`
- `Musik`
- `Gemeindeleben`
- `Extern`

Die Startseite zeigt automatisch die nächsten Termine. Gottesdienste werden dabei zusätzlich hervorgehoben.

## Deployment-Ablauf

Der vorgesehene Ablauf ist:

1. lokal Inhalte oder Layout anpassen
2. Build ausführen:

```bash
pnpm run build
```

3. Build-Ergebnis auf den Server kopieren:

```bash
scp -r dist/* .../public/
```

4. Seite im Browser prüfen
5. danach Änderungen committen und pushen

## Prüfung

Wenn vorhanden:

```bash
pnpm exec astro check
```

Zusätzlich:

```bash
pnpm run build
```

## Inhaltliche Linie

Die aktuellen Texte sind erste redaktionelle Platzhalter. Ziel ist eine ruhige, einladende und klare Website, die für Besucher verständlich bleibt und für die Gemeinde leicht gepflegt werden kann.
