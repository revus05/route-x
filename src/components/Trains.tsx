import { Button } from "components/ui/Button";
import Image from "next/image";
import trainsRacetrack from "../../public/trains-racetrack.svg";
import { Icons } from "./ui/Icons";

export const Trains = () => {
  return (
    <section>
      <div
        className={
          "lg:w-fit w-full lg:px-0 px-2 mx-auto flex xl:gap-12 gap-6 lg:flex-row flex-col relative"
        }
      >
        <div className={"flex flex-col gap-6 relative"}>
          <Image
            src={trainsRacetrack}
            alt="background"
            className="absolute -top-20 -right-40 -z-10 select-none"
          />
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
            className="rounded-2xl lg:w-214 w-full mx-auto"
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
          <Button
            endIcon={"chevronRight"}
            className={
              "hover:[&_svg]:ml-1.5 hover:bg-accent [&_svg]:transition-[margin] relative before:h-16 before:w-2 " +
              "before:bg-gray-400/70 before:rotate-30 before:absolute before:z-2 before:-left-4 " +
              "md:hover:before:translate-x-60 hover:before:translate-x-full  before:transition-transform hover:scale-[1.03] overflow-hidden w-full md:w-fit"
            }
          >
            Регистрация
          </Button>
        </div>
      </div>
    </section>
  );
};
