import { Icons } from "components/ui/Icons";
import Link from "next/link";

export const Contacts = () => {
  return (
    <>
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
    </>
  );
};
