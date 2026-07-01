# Flyer-Import-Vorbereitung

Dieser Ordner ist für eingehende Flyer gedacht, zum Beispiel:

- `*.pdf`
- `*.jpg`
- `*.png`

## Ziel

Ein Flyer soll später **nicht direkt** als Website-Inhalt veröffentlicht werden, sondern zuerst in strukturierte Event-Daten übersetzt werden.

## Geplanter Workflow mit KI/Codex

1. Flyer-Datei in `flyer-input/` ablegen.
2. KI oder Codex liest Text und Layout per OCR aus.
3. Relevante Felder werden extrahiert:
   - `title`
   - `description`
   - `start`
   - `end`
   - `location`
   - `category`
   - `audience`
   - `registration`
   - `livestream`
4. Ein Redakteur prüft die Daten.
5. Aus den geprüften Daten entsteht eine neue Datei in `src/content/events/`.

## Gewünschtes Ausgabeformat

Beispiel:

```md
---
title: Konzert am Samstag
description: Ein musikalischer Abend in der Christuskirche.
start: 2026-09-12T19:30:00+02:00
end: 2026-09-12T21:00:00+02:00
location: Kirche im Quadrat, Nansenstraße 10, 79539 Lörrach
category: Musik
featured: true
livestream: false
audience: Offen für alle
registration: Keine Anmeldung nötig
---

Optionaler Langtext mit weiteren Details.
```

## Redaktionsregel

Der Flyer bleibt Beleg oder Download, aber die Website zeigt immer die strukturierten Event-Daten als Primärquelle.
