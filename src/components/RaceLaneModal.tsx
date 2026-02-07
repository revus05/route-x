"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Button } from "components/ui/Button";
import { Icons } from "components/ui/Icons";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import appleStore from "../../public/apple-store.svg";
import storeGooglePlay from "../../public/store-google-play.svg";
import trackDays1 from "../../public/track-days-1.png";
import trackDays2 from "../../public/track-days-2.png";

type RaceLaneModalProps = {
  isOpen: boolean;
  onOpenChangeAction: (isOpen: boolean) => void;
};

export const RaceLaneModal: FC<RaceLaneModalProps> = ({
  isOpen,
  onOpenChangeAction,
}) => {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChangeAction}
      hideCloseButton={true}
      placement="center"
      classNames={{
        backdrop: "bg-black/50 backdrop-blur-md",
        wrapper: "z-50",
      }}
      shouldBlockScroll
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent
        className={
          "md:w-165 w-full bg-black/70 backdrop-blur-lg rounded-3xl sm:p-8 p-4 flex flex-col md:gap-8 gap-6 sm:pt-8 pt-10 overflow-y-scroll max-h-[90vh]"
        }
      >
        {(onClose) => (
          <>
            <Button
              variant={"icon"}
              endIcon={"cross"}
              onClick={onClose}
              className={"absolute top-2 right-2 size-8 bg-transparent"}
            />

            <div className={"gap-6 grid grid-cols-2"}>
              <Image
                src={trackDays1.src}
                height={trackDays1.height}
                width={trackDays1.width}
                alt="track days poster"
                className="drop-shadow-[0px_10px_32px_rgba(0,0,0,0.5)] w-full"
              />
              <Image
                src={trackDays2.src}
                height={trackDays2.height}
                width={trackDays2.width}
                alt="track days poster"
                className="drop-shadow-[0px_10px_32px_rgba(0,0,0,0.5)] w-full"
              />
            </div>
            <div className={"flex flex-col gap-4"}>
              <ModalHeader className="flex flex-col gap-1 sm:text-4xl text-2xl px-0 py-0">
                RaceLane
              </ModalHeader>
              <span>
                Регистрация, трек-дни, заявка на этапы и все результаты будут
                доступны в одном месте
              </span>
            </div>
            <ModalBody className={"px-0"}>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-3">
                  <Icons.listMark />
                  <span>Зарегистрироваться в приложении RaceLane.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.listMark />
                  <span>
                    Заполнить профиль пилота (фото, информация о себе).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.listMark />
                  <span>
                    Добавить автомобиль (заполнить характеристики, загрузить
                    фото).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.listMark />
                  <span>
                    Загрузить документы (гоночную лицензию, медсправку и т.д.).
                  </span>
                </li>
              </ul>
            </ModalBody>
            <ModalFooter className="md:flex grid grid-cols-2 gap-4">
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=io.racelane"
              >
                <Image
                  src={storeGooglePlay}
                  alt="google play"
                  className="md:w-fit w-full"
                />
              </Link>
              <Link
                target="_blank"
                href="https://apps.apple.com/pl/app/racelane/id6476858721"
              >
                <Image
                  src={appleStore}
                  alt="apple store"
                  className="md:w-fit w-full"
                />
              </Link>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
