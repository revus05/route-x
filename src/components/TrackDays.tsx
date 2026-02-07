import { RegisterButton } from "components/RegisterButton";
import Image from "next/image";
import poster from "../../public/poster.jpg";
import trainsBackground from "../../public/trains-background.png";
import trainsBackgroundGraffiti from "../../public/trains-background-graffiti.svg";
import trainsGraffiti from "../../public/trains-graffiti.svg";

type TrackDaysInfo = {
  leftPoster: string;
  text: string;
  rightPoster: string;
};

export const TrackDays = async () => {
  async function fetchTrackDaysUrl(): Promise<TrackDaysInfo[]> {
    const res = await fetch(`${process.env.GOOGLE_SHEET_URL}Трек+дни`, {
      next: { revalidate: 30 }, // 30 sec
    });

    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }

    return res.json();
  }

  const trackDaysInfo = await fetchTrackDaysUrl();

  return (
    <section>
      <div
        className={
          "xl:w-fit w-full xl:px-0 px-2 mx-auto flex xl:gap-12 gap-6 lg:flex-row flex-col relative"
        }
      >
        <Image
          src={trainsBackground}
          alt="background"
          className="absolute top-88 left-10 -z-10 select-none"
        />
        <Image
          src={trainsGraffiti}
          alt="background"
          className="absolute bottom-12 -right-60 -z-10 select-none"
        />
        <Image
          src={trainsBackgroundGraffiti}
          alt="background"
          className="absolute bottom-12 -left-48 -z-10 select-none"
        />
        <div className={"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"}>
          <div
            className={
              "border-b-3 border-accent w-fit px-4 sm:hidden block py-3"
            }
          >
            <h2
              className={
                "sm:text-[48px] text-[36px] font-semibold leading-7.5 whitespace-nowrap"
              }
            >
              Трек-дни
            </h2>
          </div>
          <Image
            src={trackDaysInfo[0].leftPoster}
            alt="poster"
            width={poster.width}
            height={poster.height}
            className={
              "rounded-2xl w-[clamp(250px,100%,400px)] mx-auto justify-self-end"
            }
          />
          <div className={"flex flex-col gap-6 xl:w-90 w-full"}>
            <div
              className={
                "border-b-3 border-accent w-fit px-4 py-3 sm:block hidden"
              }
            >
              <h2
                className={
                  "sm:text-[48px] text-[36px] font-semibold leading-7.5 whitespace-nowrap"
                }
              >
                Трек-дни
              </h2>
            </div>
            <div className={"flex flex-col gap-4"}>
              <span className={"whitespace-pre-line"}>
                {trackDaysInfo[0].text}
              </span>
              <RegisterButton />
            </div>
          </div>
          <Image
            src={trackDaysInfo[0].rightPoster}
            alt="poster"
            width={poster.width}
            height={poster.height}
            className={
              "rounded-2xl w-[clamp(250px,100%,400px)] hidden lg:block mx-auto justify-self-end"
            }
          />
        </div>
      </div>
    </section>
  );
};
