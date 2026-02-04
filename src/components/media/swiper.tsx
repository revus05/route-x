"use client";

import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import Image from "next/image";
import type { FC } from "react";
import type { Media } from "types/media";

type MediaSwiperProps = {
  media: Media[];
};

export const MediaSwiper: FC<MediaSwiperProps> = ({ media }) => {
  return (
    <Swiper
      modules={[FreeMode]}
      spaceBetween={16}
      slidesPerView={1}
      grabCursor
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="2xl:w-360 w-full 2xl:px-0 px-2"
    >
      {media.map((mediaItem) => (
        <SwiperSlide key={mediaItem.id}>
          <div className="relative w-full aspect-353/404 rounded-2xl overflow-hidden">
            <Image
              src={mediaItem.image}
              alt="media image"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-media-fade flex items-end">
              <div className="flex flex-col gap-2 p-5 w-full">
                <h3 className="text-xl font-bold line-clamp-2">
                  {mediaItem.title}
                </h3>
                <span className="text-white/70 font-medium text-sm line-clamp-1">
                  {mediaItem.car}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
