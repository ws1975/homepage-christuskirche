import { getCollection } from "astro:content";

const collator = new Intl.Collator("de");

export function formatEventDate(date: Date) {
  return new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatEventTime(date: Date) {
  return new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function formatEventRange(start: Date, end?: Date) {
  const dateLabel = formatEventDate(start);
  const startTime = formatEventTime(start);

  if (!end) {
    return `${dateLabel}, ${startTime} Uhr`;
  }

  const sameDay = start.toDateString() === end.toDateString();
  const endTime = formatEventTime(end);

  if (sameDay) {
    return `${dateLabel}, ${startTime}–${endTime} Uhr`;
  }

  const endLabel = formatEventDate(end);
  return `${dateLabel}, ${startTime} Uhr bis ${endLabel}, ${endTime} Uhr`;
}

export async function getUpcomingEvents() {
  const now = new Date();
  const events = await getCollection("events", ({ data }) => !data.draft);

  return events
    .filter((event) => {
      const end = event.data.end ?? event.data.start;
      return end >= now;
    })
    .sort((a, b) => a.data.start.valueOf() - b.data.start.valueOf());
}

export async function getFeaturedEvents(limit = 3) {
  const events = await getUpcomingEvents();
  const featured = events.filter((event) => event.data.featured);
  return featured.slice(0, limit);
}

export async function getUpcomingServices(limit = 3) {
  const events = await getUpcomingEvents();
  return events
    .filter((event) => event.data.category === "Gottesdienst")
    .slice(0, limit);
}

export async function getHomepageEvents(limit = 4) {
  const events = await getUpcomingEvents();
  return events.slice(0, limit);
}

export async function getEventCategories() {
  const events = await getUpcomingEvents();
  return [...new Set(events.map((event) => event.data.category))].sort((a, b) =>
    collator.compare(a, b),
  );
}
