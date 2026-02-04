import { EventsList } from "components/events/EventsList";
import type { Event } from "types/event";

export const Events = async () => {
  async function fetchSeasonEvents(): Promise<Event[]> {
    const res = await fetch(`${process.env.GOOGLE_SHEET_URL}Мероприятия`);

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }

    return res.json();
  }

  const events = await fetchSeasonEvents();

  return (
    <section>
      <EventsList events={events} />
    </section>
  );
};
