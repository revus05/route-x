import { RegisterButton } from "components/RegisterButton";
import Image from "next/image";
import crown from "../../public/crown.svg";
import heroCar from "../../public/hero-car.png";
import heroGraffiti from "../../public/hero-graffiti.png";

export const HeroSection = () => {
  return (
    <div
      className={
        "2xl:w-360 w-full 2xl:px-0 px-2 mx-auto xl:min-h-145 lg:min-h-120 md:min-h-110 sm:min-h-100 min-h-80 xl:flex xl:items-center xl:py-0 sm:py-20 pb-20 pt-4 relative"
      }
    >
      <div className={"flex flex-col gap-6 md:w-161.25 w-full"}>
        <div className={"flex flex-col gap-2 2xl:px-0 px-5"}>
          <div className={"w-fit h-fit relative"}>
            <Image
              src={crown}
              alt={"crown"}
              className="absolute -rotate-30 xl:size-16 size-12 xl:-top-5 xl:-left-7 opacity-50 -top-3 -left-5 select-none -z-10"
            />
            <h1
              className={
                "font-(family-name:--font-saira-stencil-one) xl:text-[70px] text-[48px]"
              }
            >
              GYMKHANA
            </h1>
          </div>
          <span className={"text-shadow-black text-shadow-md"}>
            Автоспортивные соревнования, где решают точность, реакция и контроль
          </span>
        </div>
        <RegisterButton />
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
          "absolute lg:-right-87.5 sm:-right-70 -right-48 top-1/2 sm:-translate-y-1/2 -translate-y-1/3 select-none -z-1"
        }
      />
    </div>
  );
};
