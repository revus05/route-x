"use client";

import { Icons } from "components/Icons";
import { cn } from "lib/cn";
import { useRouter } from "next/navigation";
import React, { type ComponentProps, createElement, type FC } from "react";

type ButtonProps = ComponentProps<"button"> & {
  endIcon?: string;
  href?: string;
};

export const Button: FC<ButtonProps> = ({
  className,
  children,
  endIcon,
  onClick,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      void router.push(href);
    }
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button
      className={cn(
        "flex items-center gap-2.5 rounded-2xl bg-accent px-8 py-3 cursor-pointer text-black font-bold w-fit hover:bg-accent/70 active:scale-[0.98] active:outline-4 outline-accent/30",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {endIcon &&
        createElement(Icons[endIcon], { className: "fill-black ml-0" })}
    </button>
  );
};
