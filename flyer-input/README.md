# Flyer-Workflow

Dieser Ordner ist der Eingang für neue Veranstaltungsflyer.

## Wohin Flyer gelegt werden

Neue Flyer werden hier abgelegt, zum Beispiel als:

- `PDF`
- `JPG`
- `PNG`

Beispiel:

```text
flyer-input/herbstkonzert-2026.pdf
```

## Wie Codex daraus ein Event erstellt

1. Flyer in `flyer-input/` ablegen.
2. Codex liest den Flyer per OCR oder Dateianalyse aus.
3. Codex erstellt daraus eine neue Datei in `src/content/events/`.
4. Die Datei wird in das bestehende Event-Schema übertragen.
5. Danach erscheint der Termin automatisch auf der Startseite und auf `/termine/`.

## Welche Felder geprüft werden müssen

Vor dem Veröffentlichen sollen diese Felder kontrolliert werden:

- `title`
- `description`
- `start`
- `end`
- `location`
- `category`
- `featured`
- `livestream`
- `audience`
- `registration`

Besonders wichtig:

- stimmt das Datum?
- stimmt die Uhrzeit?
- ist der Ort vollständig?
- ist die Kategorie passend?
- soll der Termin auf der Startseite hervorgehoben werden?

## Beispiel für eine Event-Datei

```md
---
title: Herbstkonzert in der Christuskirche
description: Konzertabend mit Chor und Instrumentalmusik.
start: 2026-10-24T19:30:00+02:00
end: 2026-10-24T21:00:00+02:00
location: Kirche im Quadrat, Nansenstraße 10, 79539 Lörrach
category: Musik
featured: true
livestream: false
audience: Offen für alle
registration: Keine Anmeldung nötig
---

Ein festlicher Abend mit Musik und Begegnung.
```

## Danach bauen, committen und deployen

Nach dem Anlegen oder Ändern einer Event-Datei:

1. lokal prüfen
2. Build ausführen:

```bash
pnpm run build
```

3. Build auf den Server kopieren:

```bash
scp -r dist/* .../public/
```

4. Website im Browser prüfen
5. Änderungen committen
6. Änderungen pushen

## Grundsatz

Der Flyer ist das Eingangsdokument. Die Website selbst arbeitet aber mit strukturierten Event-Dateien als Primärquelle.
