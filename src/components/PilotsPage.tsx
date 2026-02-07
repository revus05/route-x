import Image from "next/image";
import cat from "../../public/cat.jpg";

const PilotsPage = () => {
  return (
    <div className={"w-fit mx-auto flex flex-col gap-4 items-center"}>
      <span className={"text-center"}>В разработке</span>
      <Image src={cat.src} width={cat.width} height={cat.height} alt="cat" />
    </div>
  );
};

export default PilotsPage;
