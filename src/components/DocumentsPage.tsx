import Link from "next/link";
import { Icons } from "./ui/Icons";

const DocumentsPage = () => {
  return (
    <section
      className={"md:w-170 w-full 2xl:px-0 px-2 mx-auto flex flex-col gap-4"}
    >
      <h1 className="sm:text-[40px] text-[30px] font-bold">Документация</h1>
      <div className={"flex flex-col gap-4"}>
        <h2 className={"sm:text-2xl text-xl font-semibold"}>
          РЕГЛАМЕНТИРУЮЩИЕ ДОКУМЕНТЫ СЕЗОНА 2026
        </h2>
        <div className={"flex flex-col gap-2"}>
          <Link
            download
            href="/documents/Регламент%20Gymkhana%20Route%20X%20Race%202026.pdf"
            className="text-accent hover:underline w-fit flex items-center gap-2"
          >
            <Icons.openExternal className="fill-white" />
            <span>Регламент Gymkhana Route X Race 2026</span>
          </Link>
          <Link
            download
            href="/documents/Технические%20требования%20Gymkhana%20Route%20X%20Race%202026.pdf"
            className="text-accent hover:underline w-fit flex items-center gap-2"
          >
            <Icons.openExternal className="fill-white" />
            <span>Технические требования Gymkhana Route X Race 2026</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DocumentsPage;
