import { Button } from "components/ui/Button";
import Image from "next/image";
import heroCar from "../../public/hero-car.png";

export default function Home() {
  return (
    <div className={"w-360 mx-auto min-h-145 flex items-center relative"}>
      <div className={"flex flex-col gap-6 w-161.25"}>
        <div className={"flex flex-col gap-2"}>
          <h1
            className={
              "font-(family-name:--font-saira-stencil-one) text-[70px]"
            }
          >
            GYMKHANA
          </h1>
          <span>
            Автоспортивные соревнования, где решают точность, реакция и контроль
          </span>
        </div>
        <Button
          endIcon={"chevronRight"}
          className={
            "hover:[&_svg]:ml-1.5 hover:bg-accent [&_svg]:transition-[margin] relative before:h-16 before:w-2 before:bg-white/70 before:rotate-30 before:absolute before:z-2 before:-left-4 hover:before:translate-x-56 before:transition-transform hover:scale-[1.03] overflow-hidden"
          }
        >
          Регистрация
        </Button>
      </div>
      <Image
        src={heroCar.src}
        alt={"Mazda rx 8"}
        height={heroCar.height}
        width={heroCar.width}
        className={
          "absolute -right-87.5 top-1/2 -translate-y-1/2 select-none -z-1"
        }
      />
    </div>
  );
}
