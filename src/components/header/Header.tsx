import { BurgerMenu } from "components/header/BurgerMenu";
import { Contacts } from "components/header/Contacts";
import { MenuItems } from "components/header/MenuItems";
import Image from "next/image";
import logo from "../../../public/logo.png";

export const Header = () => {
  return (
    <header className={"sm:mt-4 mt-2 mb-2 relative h-24"}>
      <div className="z-20 fixed 2xl:left-1/2 2xl:-translate-x-1/2 bg-black/50 rounded-2xl backdrop-blur-lg 2xl:w-360 inset-x-2 sm:inset-x-8 2xl:inset-x-auto h-24 mx-auto grid lg:grid-cols-[150px_auto_1fr] sm:grid-cols-[200px_1fr] grid-cols-[130px_auto] items-center xl:px-8 px-4">
        <Image
          src={logo.src}
          alt="logo"
          width={logo.width}
          height={logo.height}
          className={"xl:-translate-x-18 sm:-translate-x-10 sm:scale-[1.2]"}
        />
        <nav className={"lg:block hidden lg:-translate-x-10 xl:translate-x-0"}>
          <MenuItems />
        </nav>
        <div className={"lg:flex hidden justify-self-end flex-col gap-3 py-4"}>
          <Contacts />
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};
