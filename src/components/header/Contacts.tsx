import { Icons } from "components/ui/Icons";
import Link from "next/link";

export const Contacts = () => {
  return (
    <>
      <div className={"flex items-center gap-2"}>
        <Icons.a1 />
        <Link
          href="tel:+375259253938"
          className="whitespace-nowrap hover:underline"
        >
          +375 25 925 3938
        </Link>
      </div>
      <div className={"flex gap-4"}>
        <Link href="https://www.instagram.com/route_papa" target="_blank">
          <Icons.instagram className={"size-7"} />
        </Link>
        <Link href="https://t.me/fgbffhgddf" target="_blank">
          <Icons.telegram className={"size-7"} />
        </Link>
      </div>
    </>
  );
};
