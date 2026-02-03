import { cn } from "lib/cn";

type SeasonEvent = {
  id: string;
  date: string;
  format: string;
  configuration: string;
  location: string;
};

export const SeasonEvents = async () => {
  async function fetchSeasonEvents(): Promise<SeasonEvent[]> {
    const res = await fetch(
      `${process.env.GOOGLE_SHEET_URL}Календарь+мероприятий`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch season events");
    }

    return res.json();
  }

  const seasonEvents = await fetchSeasonEvents();

  return (
    <section className={"px-2 2xl:px-0"}>
      <div
        className={
          "2xl:w-360 w-full mx-auto bg-black/50 backdrop-blur-lg md:px-8 md:py-6 px-4 py-3 flex-col flex gap-8 rounded-2xl relative overflow-hidden"
        }
      >
        <h2 className={"font-semibold text-2xl text-center"}>
          Сезонный календарь мероприятий
        </h2>
        <table className={"w-full min-w-0 table-fixed"}>
          <tbody>
            {seasonEvents.map((seasonEvent, index) => (
              <tr
                key={seasonEvent.id}
                className={cn(
                  "border-b border-white/30",
                  index % 2 !== 0 && `text-accent`,
                )}
              >
                <td
                  className={
                    "lg:text-xl text-base pr-1 font-semibold py-1.5 uppercase truncate md:pr-2"
                  }
                >
                  {seasonEvent.date || "—"}
                </td>
                <td
                  className={
                    "lg:text-xl text-base px-1 font-semibold py-1.5 uppercase truncate md:px-2"
                  }
                >
                  {seasonEvent.format || "—"}
                </td>
                <td
                  className={
                    "lg:text-xl text-base px-1 font-semibold py-1.5 uppercase truncate md:px-2"
                  }
                >
                  {seasonEvent.configuration || "—"}
                </td>
                <td
                  className={
                    "lg:text-xl text-base pl-1 font-semibold py-1.5 uppercase truncate md:pl-2"
                  }
                >
                  {seasonEvent.location || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className={
            "w-89.5 h-57.5 -rotate-130 bg-accent blur-[100px] absolute opacity-20 -left-16 -bottom-16"
          }
        />
        <div
          className={
            "w-92.25 h-59.25 bg-accent blur-[100px] absolute opacity-20 left-64 top-full rotate-180 -translate-y-1/2"
          }
        />
        <div
          className={
            "w-89.5 h-57.5 bg-accent blur-[100px] absolute opacity-20 right-0 -top-16 rotate-30"
          }
        />
        <div
          className={
            "w-108.5 h-46.5 bg-[#FF8D28] blur-[100px] absolute opacity-20 right-0 top-32 rotate-160"
          }
        />
      </div>
    </section>
  );
};
