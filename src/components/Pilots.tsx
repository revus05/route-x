import { Button } from "components/ui/Button";
import Image from "next/image";
import graffitiArrow from "../../public/graffiti-arrow.svg";
import graffitiComposition from "../../public/graffiti-composition.png";
import pilots from "../../public/pilots.png";

export const Pilots = () => {
  return (
    <section className={"min-h-125 flex items-center"}>
      <div className={"lg:w-5xl w-full px-2 mx-auto relative"}>
        <div className={"flex flex-col gap-6"}>
          <div className={"flex flex-col gap-4"}>
            <h2 className={"text-[40px] font-bold"}>Команда профи</h2>
            <span
              className={"md:w-150 w-full text-shadow-black text-shadow-md"}
            >
              С пилотом вы получите не просто рекламу, а комплексный подход и
              индивидуальное внимание к потребностям вашего бренда. Повышение
              статуса среди конкурентов, узнаваемость, фото, видео, посты в
              социальных сетях, интервью и прочее. Там будет кнопка чтоб перейти
              на список всех пилотов
            </span>
          </div>
          <Button>Пилоты</Button>
        </div>
        <Image
          src={graffitiComposition.src}
          alt={"pilot"}
          width={graffitiComposition.width}
          height={graffitiComposition.height}
          className={"absolute left-0 bottom-0 -z-10 select-none"}
        />
        <Image
          src={graffitiArrow.src}
          alt={"pilot"}
          width={graffitiArrow.width}
          height={graffitiArrow.height}
          className={
            "absolute xl:right-full lg:-left-32 left-0 -top-1/2 -z-10 select-none"
          }
        />
        <Image
          src={pilots.src}
          alt={"pilots"}
          width={pilots.width}
          height={pilots.height}
          className={
            "absolute xl:-right-32 right-0 top-1/2 -translate-y-1/2 -z-10 select-none"
          }
        />
      </div>
    </section>
  );
};
