"use client";

import { RaceLaneModal } from "components/RaceLaneModal";
import { Button } from "components/ui/Button";
import { useState } from "react";

export const RegisterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        endIcon={"chevronRight"}
        className={
          "hover:[&_svg]:ml-1.5 hover:bg-accent [&_svg]:transition-[margin] relative before:h-16 before:w-2 " +
          "before:bg-gray-400/70 before:rotate-30 before:absolute before:z-2 before:-left-4 " +
          "hover:before:translate-x-60 before:transition-transform hover:scale-[1.03] overflow-hidden"
        }
      >
        Регистрация
      </Button>
      <RaceLaneModal isOpen={isOpen} onOpenChangeAction={setIsOpen} />
    </>
  );
};
