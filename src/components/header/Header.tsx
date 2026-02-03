import { BurgerMenu } from "components/header/BurgerMenu";
import { Contacts } from "components/header/Contacts";
import { MenuItems } from "components/header/MenuItems";
import Image from "next/image";
import logo from "../../../public/logo.png";

export const Header = () => {
  return (
    <header className={"mt-4 mb-2 relative h-24"}>
      <div className="fixed left-1/2 -translate-x-1/2 bg-black/50 rounded-2xl backdrop-blur-lg 2xl:w-360 w-[calc(100%-4rem)] h-24 mx-auto grid xl:grid-cols-[200px_auto_1fr] grid-cols-[200px_1fr] items-center px-8">
        <Image
          src={logo.src}
          alt="logo"
          width={logo.width}
          height={logo.height}
          className={"-translate-x-18 scale-[1.2]"}
        />
        <nav className={"xl:block hidden"}>
          <MenuItems />
        </nav>
        <div className={"xl:flex hidden justify-self-end flex-col gap-3 py-4"}>
          <Contacts />
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};
