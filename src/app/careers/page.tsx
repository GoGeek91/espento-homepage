import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MapIcons } from "../commonIcon";
import { CareersModal } from "./components/careers.modal";

const jobs = [
  {
    id: 1,
    position: "Solidity Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },

  {
    id: 2,
    position: "Graphic Designer",
    department: "Marketing",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 3,
    position: "Senior Designer (UI UX)",
    department: "Product & Design",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 4,
    position: "Senior Product Manager",
    department: "Product & Design",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 5,
    position: "Content Lead",
    department: "Global / Marketing",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 6,
    position: "Front-End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 7,
    position: "Front-End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
];

export default function Careers() {
  return (
    <div className="mx-auto max-w-5xl items-center justify-between space-y-32 py-8 px-4 sm:px-8 md:px-8 lg:py-24 lg:px-8 xl:py-24 xl:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-8 relative">
        <h2 className="text-6xl text-white leading-snug">
          Help us create a tokenized world where all value can flow freely
        </h2>
        <Link href="#" className="bg-secondary-default px-3 py-2 rounded-lg flex w-fit mx-auto">
          See open positions
        </Link>
      </div>

      <div className="space-y-14">
        <h2 className="text-5xl text-white text-center">Our values</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="relative p-8 bg-[#2e313e] border border-[#434551] rounded-3xl space-y-4">
            <Image src="/images/career/1.svg" width={60} height={60} alt="careers" />
            <div className="space-y-3">
              <h2 className="text-2xl font-medium text-white">Do the right thing</h2>
              <p className="text-white text-base text-opacity-80 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae voluptate id fuga
                officiis, laborum tempore amet temporibus quidem maxime minima vel quaerat, laboriosam impedit
                inventore nulla est, velit corrupti.
              </p>
            </div>
          </div>
          <div className="relative p-8 bg-[#2e313e] border border-[#434551] rounded-3xl space-y-4 mt-20">
            <Image src="/images/career/2.svg" width={60} height={60} alt="careers" />
            <div className="space-y-3">
              <h2 className="text-2xl font-medium text-white">Do the right thing</h2>
              <p className="text-white text-base text-opacity-80 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae voluptate id fuga
                officiis, laborum tempore amet temporibus quidem maxime minima vel quaerat, laboriosam impedit
                inventore nulla est, velit corrupti.
              </p>
            </div>
          </div>
          <div className="relative p-8 bg-[#2e313e] border border-[#434551] rounded-3xl space-y-4 mt-40">
            <Image src="/images/career/3.svg" width={60} height={60} alt="careers" />
            <div className="space-y-3">
              <h2 className="text-2xl font-medium text-white">Do the right thing</h2>
              <p className="text-white text-base text-opacity-80 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vitae voluptate id fuga
                officiis, laborum tempore amet temporibus quidem maxime minima vel quaerat, laboriosam impedit
                inventore nulla est, velit corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-14">
        <div className="text-center space-y-4">
          <h2 className="text-5xl text-white text-center">Open positions</h2>
          <p className="text-lg text-white text-center font-light">
            Work from home, or from wherever makes you happy.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="relative p-6 bg-[#2e313e] border border-[#434551] rounded-3xl space-y-7"
            >
              <div className="flex justify-between space-y-1">
                <div className="space-y-1">
                  <h2 className="text-white text-base font-normal"> {job.position}</h2>
                  <p className="text-white text-opacity-70 font-light text-sm">{job.department}</p>
                </div>
                <div className="justify-between space-y-2">
                  <h2 className="text-xs w-fit bg-primary-default bg-opacity-20 text-primary-default font-light py-0.5 px-1.5 rounded-full">
                    {job.type}
                  </h2>
                  <div className="flex items-center">
                    <MapIcons className="w-4 h-4 text-white" />
                    <p className="text-white text-opacity-70 font-light text-xs">{job.location}</p>
                  </div>
                </div>
              </div>
              <CareersModal />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
