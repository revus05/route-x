import { Icons } from "components/Icons";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export const Header = () => {
  return (
    <header className={"mt-4 mb-2 relative h-24"}>
      <div className="fixed left-1/2 -translate-x-1/2 bg-black/50 rounded-2xl backdrop-blur-lg w-360 mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-8">
        <Image
          src={logo.src}
          alt="logo"
          width={logo.width}
          height={logo.height}
          className={"-translate-x-18 scale-[1.2]"}
        />
        <nav>
          <ul className={"flex "}>
            <li>
              <Link href="#" className={"flex px-6 py-3 text-xl font-semibold"}>
                Мероприятия
              </Link>
            </li>
            <li>
              <Link href="#" className={"flex px-6 py-3 text-xl font-semibold"}>
                Пилоты
              </Link>
            </li>
            <li>
              <Link href="#" className={"flex px-6 py-3 text-xl font-semibold"}>
                Медиа
              </Link>
            </li>
            <li>
              <Link href="#" className={"flex px-6 py-3 text-xl font-semibold"}>
                Партнеры
              </Link>
            </li>
            <li>
              <Link href="#" className={"flex px-6 py-3 text-xl font-semibold"}>
                Результаты
              </Link>
            </li>
            <li>
              <Link href="#" className={"flex px-6 py-3 text-xl font-semibold"}>
                Документы
              </Link>
            </li>
          </ul>
        </nav>
        <div className={"justify-self-end flex flex-col gap-3 py-4"}>
          <div className={"flex items-center gap-2"}>
            <Icons.a1 />
            <span>+375 29 925-39-38</span>
          </div>
          <div className={"flex gap-4"}>
            <Link href="https://www.instagram.com/route_papa" target="_blank">
              <Icons.instagram className={"size-7"} />
            </Link>
            <Link href="https://www.whatsapp.com/" target="_blank">
              <Icons.whatsapp className={"size-7"} />
            </Link>
            <Link href="https://t.me/route_papa" target="_blank">
              <Icons.telegram className={"size-7"} />
            </Link>
            <Link href="https://msng.link/o?375259253938=vi" target="_blank">
              <Icons.viber className={"size-7"} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
