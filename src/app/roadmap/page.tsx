"use client";

import { ROADMAP_DATA } from "./config";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import { cn } from "@/libs/utils";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Roadmap() {
  return (
    <div className="space-y-3 py-20 md:space-y-10 lg:space-y-10 xl:space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-6xl text-white leading-snug">Roadmap</h2>
      </div>

      <div className="mx-auto max-w-6xl space-y-10 p-4 text-justify lg:p-8">
        <Swiper
          navigation={false}
          freeMode={true}
          grabCursor={true}
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper roadmap"
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {ROADMAP_DATA.map((R_DATA) => (
            <SwiperSlide key={R_DATA.id}>
              <div className="overflow-hidden rounded-xl bg-[#2e313e] border border-[#434551]">
                <div className="bg-primary-default flex items-center gap-x-4 border-b border-gray-900/5 p-4">
                  <Image
                    src={R_DATA.icon}
                    alt="Espento"
                    className="h-12 w-12 flex-none rounded-lg bg-white p-1"
                  />
                  <p className="text-secondary-lighter">{R_DATA.title}</p>
                </div>
                <div className="divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                  <div className="space-y-3 text-sm leading-6">
                    {R_DATA.features.map((feature) => (
                      <div key={feature.id} className="flex items-center gap-x-1.5">
                        <div className={cn(feature.status.color, "rounded-full p-[3px]")}>
                          <feature.status.icon className="h-3.5 w-3.5" />
                        </div>
                        <p className="text-secondary-lighter">{feature.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
