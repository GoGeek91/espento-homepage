"use client";
import { ModalWrapper } from "@/components/modal/modalWrapper";
import Link from "next/link";
import { useState } from "react";
import { DoubleArrowIcon } from "../commonIcon";

export const YoutubeModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <ModalWrapper
        open={open}
        setOpen={setOpen}
        title="Transaction settings"
        modalTriggerclass="cursor-pointer"
        ModalTrigger={<button className="bg-primary-default p-2 text-white">Youtube</button>}
        content={
          <>
            <div className="space-y-5">
              <iframe
                src="https://www.youtube.com/embed/-zjQoXPWqPU?si=RkI1bZMx0hBOfQPQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </>
        }
      />
    </>
  );
};
