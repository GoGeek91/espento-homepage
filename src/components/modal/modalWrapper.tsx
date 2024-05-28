import React, { useRef } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./drawer";

import { CloseIcon } from "@/app/commonIcon";
import { cn } from "@/libs/utils";

interface IModalWrapper {
  title: string;
  content: React.ReactNode;
  ModalTrigger: React.ReactNode;
  modalTriggerclass?: string;
  modalcontentclass?: string;
  drawercontentclass?: string;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const ModalWrapper = ({
  title,
  content,
  ModalTrigger,
  modalTriggerclass,
  modalcontentclass,
  drawercontentclass,
  open = false,
  setOpen,
}: IModalWrapper) => {
  const isDesktop = useMediaQuery("(min-width: 520px)");
  const drawerRef = useRef<HTMLDivElement>(null); // Add this line

  useEffect(() => {
    function onVisualViewportChange() {
      if (!drawerRef.current) return;

      const visualViewportHeight = window.visualViewport?.height || window.innerHeight;
      const keyboardHeight = window.innerHeight - visualViewportHeight;
      const diffFromInitial = window.innerHeight - visualViewportHeight;
      const drawerHeight = drawerRef.current.getBoundingClientRect().height || 0;

      drawerRef.current.style.height = `${visualViewportHeight - 0}px`;
      drawerRef.current.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
    }

    window.visualViewport?.addEventListener("resize", onVisualViewportChange);

    return () => {
      window.visualViewport?.removeEventListener("resize", onVisualViewportChange);
    };
  }, []);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className={cn("w-full", modalTriggerclass)} asChild>
          {ModalTrigger}
        </DialogTrigger>
        <DialogContent className="w-[350px] bg-[#2e313e] border border-[#434551]">
          <DialogHeader className="border-b border-[#434551]">
            <DialogTitle className="">{title}</DialogTitle>
            <DialogPrimitive.Close className="transition duration-300 ease-in-out bg-secondary-default bg-opacity-5 rounded-md hover:bg-secondary-default hover:bg-opacity-10 text-secondary-default text-opacity-35 p-1">
              <CloseIcon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogHeader>
          <div className={cn("px-5 py-5", modalcontentclass)}>{content}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet>
      <SheetTrigger className={cn("w-full", modalTriggerclass)} asChild>
        {ModalTrigger}
      </SheetTrigger>
      <SheetContent side={"bottom"} className="rounded-t-2xl">
        <SheetHeader className="flex items-center justify-between border-b border-secondary-main p-4">
          <SheetTitle>{title}</SheetTitle>
          <SheetPrimitive.Close className="transition duration-300 ease-in-out rounded-md hover:bg-secondary-default hover:bg-opacity-10 p-1">
            <CloseIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        </SheetHeader>
        <div className={cn("px-5 py-5", modalcontentclass)}>{content}</div>
      </SheetContent>
    </Sheet>
  );
};

ModalWrapper.displayName = "ModalWrapper";
export { ModalWrapper };
