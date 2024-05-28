"use client";

import { ModalWrapper } from "@/components/modal/modalWrapper";
import Link from "next/link";
import { useState } from "react";

export const CareersModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalWrapper
        open={open}
        setOpen={setOpen}
        title="Rewards Claim"
        ModalTrigger={
          <button className="py-1.5 px-1 rounded-lg text-sm text-secondary-default bg-primary-default">
            Apply
          </button>
        }
        content={
          <>
            <div className="space-y-3">
              <p className="text-sm text-secondary-default font-light">
                We Want Candidates Who Are 100% Dedicated And Responsible Towards Their Work. Salary And
                Responsibilities Details Will Be Finalized Through Face To Face Online Meeting.
              </p>
              <div className="">
                <h2 className="font-normal text-sm text-white text-opacity-60">
                  You Can Send Your Profile On The Given Email.
                </h2>
                <Link href="mailto:work@espento.com" className="text-primary-default hover:text-primary-main">
                  work@espento.com
                </Link>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};
