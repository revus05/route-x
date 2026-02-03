import { Button } from "components/ui/Button";
import Image from "next/image";
import heroCar from "../../public/hero-car.png";
import heroGraffiti from "../../public/hero-graffiti.png";

export const HeroSection = () => {
  return (
    <div
      className={
        "2xl:w-360 w-full 2xl:px-0 px-2 mx-auto xl:min-h-145 lg:min-h-120 md:min-h-110 sm:min-h-100 min-h-80 flex items-center relative"
      }
    >
      <div className={"flex flex-col gap-6 w-161.25"}>
        <div className={"flex flex-col gap-2"}>
          <h1
            className={
              "font-(family-name:--font-saira-stencil-one) text-[70px]"
            }
          >
            GYMKHANA
          </h1>
          <span className={"text-shadow-black text-shadow-md"}>
            Автоспортивные соревнования, где решают точность, реакция и контроль
          </span>
        </div>
        <Button
          endIcon={"chevronRight"}
          className={
            "hover:[&_svg]:ml-1.5 hover:bg-accent [&_svg]:transition-[margin] relative before:h-16 before:w-2 " +
            "before:bg-gray-400/70 before:rotate-30 before:absolute before:z-2 before:-left-4 " +
            "hover:before:translate-x-60 before:transition-transform hover:scale-[1.03] overflow-hidden"
          }
        >
          Регистрация
        </Button>
      </div>
      <Image
        aria-hidden
        src={heroGraffiti.src}
        alt={"graffiti"}
        height={heroGraffiti.height}
        width={heroGraffiti.width}
        className={
          "absolute 2xl:-left-64 md:-left-42 -left-24 top-[70%] -translate-y-1/2 select-none -z-1"
        }
      />
      <Image
        src={heroCar.src}
        alt={"Mazda rx 8"}
        height={heroCar.height}
        width={heroCar.width}
        className={
          "absolute lg:-right-87.5 sm:-right-70 -right-48 top-1/2 -translate-y-1/2 select-none -z-1"
        }
      />
    </div>
  );
};
