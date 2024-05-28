import React from "react";
import { EmailIcon, MessageIcon, PressIcon } from "../commonIcon";
import Link from "next/link";

const support = [
  {
    id: 1,
    icon: <EmailIcon className="w-10 h-10" />,
    heading: "For All Other Inquiries",
    paragraph: "Get in touch with us at",
    linkUrl: "support@espento.com",
    redirect: "mailto:support@espento.com",
  },
  {
    id: 2,
    icon: <PressIcon className="w-10 h-10" />,
    heading: "Media & Press",
    paragraph: "For any media and press requests:",
    linkUrl: "marketing@espento.com",
    redirect: "mailto:marketing@espento.com",
  },
  {
    id: 3,
    icon: <MessageIcon className="w-10 h-10" />,
    heading: "For Any Suggestions & Ideas",
    paragraph: "Send a message",
    linkUrl: "Telegram",
    redirect: "https://t.me/espentoOfficial/4589",
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl items-center justify-between space-y-20 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-6xl text-white leading-snug">Get In Touch With The Espento Team</h2>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {support.map((supports) => (
          <div className="bg-[#2e313e] border border-[#434551] rounded-xl p-4 space-y-3" key={supports.id}>
            <div className="text-primary-default">{supports.icon} </div>
            <div className="space-y-1.5">
              <h2 className="text-white font-normal text-xl">{supports.heading}</h2>
              <p className="text-white text-base font-light">{supports.paragraph}</p>
              <Link href={supports.redirect} className="text-primary-default text-sm hover:opacity-60">
                {supports.linkUrl}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
