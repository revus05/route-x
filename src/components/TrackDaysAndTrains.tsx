import { Button } from "components/ui/Button";
import { Icons } from "components/ui/Icons";
import Image from "next/image";
import poster from "../../public/poster.jpg";

type TrackDaysBannerUrl = {
  url: string;
};

export const TrackDaysAndTrains = async () => {
  async function fetchTrackDaysUrl(): Promise<TrackDaysBannerUrl[]> {
    const res = await fetch(`${process.env.GOOGLE_SHEET_URL}Баннер+трек-дни`, {
      next: { revalidate: 30 }, // 30 sec
    });

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }

    return res.json();
  }

  const trackDaysPosterUrl = await fetchTrackDaysUrl();

  return (
    <section>
      <div
        className={
          "xl:w-fit w-full xl:px-0 px-2 mx-auto flex xl:gap-12 gap-6 lg:flex-row flex-col"
        }
      >
        <div className={"grid sm:grid-cols-2 grid-cols-1 gap-6"}>
          <Image
            src={trackDaysPosterUrl[0].url}
            alt="poster"
            width={poster.width}
            height={poster.height}
            className={
              "rounded-2xl w-[clamp(250px,100%,400px)] mx-auto justify-self-end sm:-order-1 order-2"
            }
          />
          <div className={"flex flex-col gap-6 xl:w-90 w-full"}>
            <div className={"border-b-3 border-accent w-fit px-4 py-3"}>
              <h2
                className={
                  "sm:text-[48px] text-[36px] font-semibold leading-7.5 whitespace-nowrap"
                }
              >
                Трек-дни
              </h2>
            </div>
            <div className={"flex flex-col gap-4"}>
              <span>
                Трек-дни — регулярные заезды автоклуба на закрытых трассах,
                проводимые в течение сезона.
                <br /> Мероприятия направлены на развитие навыков управления
                автомобилем и повышение уровня водительской подготовки в
                контролируемых условиях.
                <br /> Актуальная информация о датах, месте проведения и формате
                заездов размещается в постерах мероприятий.
              </span>
              <Button>Регистрация</Button>
            </div>
          </div>
        </div>
        <div className={"w-px bg-white/70"} />
        <div className={"flex flex-col gap-6"}>
          <div className={"border-b-3 border-accent w-fit px-4 py-3"}>
            <h2
              className={
                "sm:text-[48px] text-[36px] font-semibold leading-7.5 whitespace-nowrap"
              }
            >
              Тренировки
            </h2>
          </div>
          <video
            src="/trains.mov"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-2xl xl:w-120 w-full max-w-150 mx-auto"
          >
            Ваш браузер не поддерживает видео
          </video>
          <ul className="flex flex-col gap-2 xl:w-95 w-full">
            <li className="flex items-start gap-3">
              <Icons.listMark />
              <span>Работа под руководством опытного профессионала</span>
            </li>

            <li className="flex items-start gap-3">
              <Icons.listMark />
              <span>Поэтапная отработка ключевых элементов вождения</span>
            </li>

            <li className="flex items-start gap-3">
              <Icons.listMark />
              <span>Безопасная и организованная тренировочная среда</span>
            </li>
          </ul>

          <Button>Регистрация</Button>
        </div>
      </div>
    </section>
  );
};
