import Link from "next/link";

export const MenuItems = () => {
  return (
    <ul className={"flex xl:flex-row flex-col"}>
      <li>
        <Link
          href="#"
          className={
            "flex 2xl:px-6 px-4 py-3 2xl:text-xl text-lg font-semibold"
          }
        >
          Мероприятия
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={
            "flex 2xl:px-6 px-4 py-3 2xl:text-xl text-lg font-semibold"
          }
        >
          Пилоты
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={
            "flex 2xl:px-6 px-4 py-3 2xl:text-xl text-lg font-semibold"
          }
        >
          Медиа
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={
            "flex 2xl:px-6 px-4 py-3 2xl:text-xl text-lg font-semibold"
          }
        >
          Партнеры
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={
            "flex 2xl:px-6 px-4 py-3 2xl:text-xl text-lg font-semibold"
          }
        >
          Результаты
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={
            "flex 2xl:px-6 px-4 py-3 2xl:text-xl text-lg font-semibold"
          }
        >
          Документы
        </Link>
      </li>
    </ul>
  );
};
