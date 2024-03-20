"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DoubleArrowIcon, MenuIcon } from "../commonIcon";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Game", href: "https://espento.com/game" },
  { name: "Exchange", href: "https://espento.com/game", info: "Soon" },
];

const DropdownNav = [
  {
    id: 1,
    title: "Trade",
    subtitle: [
      {
        id: 1,
        name: "Swap",
        href: "https://espento.com/swap",
        targetBlank: false,
      },

      {
        id: 2,
        name: "Liquidity",
        href: "https://espento.com/liquidity",
        targetBlank: false,
      },
      {
        id: 3,
        name: "Bridge",
        href: "https://bridge.espento.network/",
        targetBlank: false,
      },
    ],
  },
  {
    id: 2,
    title: "Earn",
    subtitle: [
      {
        id: 1,
        name: "Farm",
        href: "https://espento.com/farm/v4",
        targetBlank: false,
      },

      {
        id: 2,
        name: "Stake",
        href: "https://espento.com/stake/v4",
        targetBlank: false,
      },
      {
        id: 3,
        name: "Lending",
        href: "https://espento.com/borrow",
        targetBlank: false,
      },
    ],
  },
  {
    id: 3,
    title: "Info",
    subtitle: [
      {
        id: 1,
        name: "Analytics",
        href: "https://espento.com/info",
        targetBlank: false,
      },

      {
        id: 2,
        name: "DAO",
        href: "https://espento.com/dao",
        targetBlank: false,
      },
      {
        id: 3,
        name: "Blogs",
        href: "https://espento.com/blog",
        targetBlank: false,
      },
    ],
  },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-4 xl:space-y-10 lg:space-y-10 md:space-y-10 sm:space-y-10 space-y-5 py-4 bg-transparent z-50 relative">
      <div className="flex items-center justify-between">
        <Link href="#">
          <Image src="images/logo.svg" width={120} height={30} alt="Espento" />
        </Link>

        {/* ////////////////// Desktop ////////////////// */}
        <div className="space-x-8 border border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur rounded-full py-2 px-6 leading-4 xl:block lg:block md:block sm:block hidden xl:bottom-0 lg:bottom-0 md:bottom-0 sm:bottom-0 bottom-3 z-50">
          {/* DropDown */}
          {DropdownNav.map((DropdownNavs) => (
            <div className="dropdown relative inline-block" key={DropdownNavs.title}>
              <button className="text-gray-200 font-light tracking-wide text-sm flex items-center">
                {DropdownNavs.title}
                <ChevronDownIcon className="w-4 h-4 ml-0.5 text-white" />
              </button>

              <div className="hidden absolute bg-transparent dropdown-content w-36 z-30">
                <div className="border-b-[1px] border-r-[1px] border-gray-700 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur rounded-lg mt-4 space-y-1">
                  <ul className="">
                    {DropdownNavs.subtitle.map((subtitles) => (
                      <li className="dropdown_item-1" key={subtitles.href}>
                        <Link
                          href={subtitles.href}
                          target={subtitles.targetBlank ? "_blank" : "_parent"}
                          className="text-white font-light tracking-wide text-sm py-2 px-3 flex rounded-lg duration-150 sliding-text hover:before:w-1 hover:before:h-1 hover:before:mt-2 hover:before:mr-1 hover:before:rounded-full hover:before:bg-white"
                        >
                          {subtitles.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Single Link */}
          {navigation.map((item) => (
            <div className="items-center inline-flex space-x-1" key={item.name}>
              <Link
                href={item.href}
                className="tracking-wide text-secondary-lighter hover:text-secondary-default font-light text-sm"
              >
                {item.name}
              </Link>
              {item.info && (
                <div className="bg-secondary-lighter leading-normal text-black text-[8px] rounded-full px-1">
                  {item.info}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* ////////////////// END Desktop ////////////////// */}

        <Link
          href="https://espento.com/swap"
          className="bg-primary-default text-sm xl:font-normal lg:font-normal md:font-normal sm:font-normal font-medium tracking-wide px-3 py-2 rounded-lg text-secondary-default flex items-center space-x-0.5"
        >
          <p>Launch dApp</p>
          <DoubleArrowIcon className="w-4 h-4 text-white" />
        </Link>

        {/* ////////////////// Start Mobile ////////////////// */}
        <div className="lg:hidden xl:hidden md:hidden sm:hidden block">
          {" "}
          <button type="button" className="relative flex items-center" onClick={() => setOpen(true)}>
            <MenuIcon className="w-6 h-6 text-white" />
          </button>
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
              <div className="fixed inset-0" />

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-gradient-to-br from-black to-white/5 backdrop-blur py-6 shadow-xl">
                          <div className="px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-lg font-normal leading-6 text-white">
                                Menu
                              </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className="relative border rounded-lg p-1 border- text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:ring-offset-0"
                                  onClick={() => setOpen(false)}
                                >
                                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6 ">
                            {DropdownNav.map((DropdownNavs) => (
                              <Disclosure key={DropdownNavs.title}>
                                {({ open }) => (
                                  /* Use the `open` state to conditionally change the direction of an icon. */
                                  <div className="border-b border-gray-600 w-full last:border-0">
                                    <Disclosure.Button className="text-white flex items-center text-base space-x-2 py-4 ">
                                      <h2>{DropdownNavs.title}</h2>
                                      <ChevronDownIcon
                                        className={open ? "rotate-180 transform w-4 h-4" : "w-4 h-4"}
                                      />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-white">
                                      {" "}
                                      <ul className="">
                                        {DropdownNavs.subtitle.map((subtitles) => (
                                          <li className="dropdown_item-1" key={subtitles.href}>
                                            <Link
                                              href={subtitles.href}
                                              target={subtitles.targetBlank ? "_blank" : "_parent"}
                                              className="text-white font-light tracking-wide text-sm pb-4 flex rounded-lg"
                                            >
                                              {subtitles.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </Disclosure.Panel>
                                  </div>
                                )}
                              </Disclosure>
                            ))}

                            {/* Single Link */}
                            {navigation.map((item) => (
                              <div
                                className="items-center inline-flex space-x-1 py-4 border-b border-gray-600 w-full last:border-0"
                                key={item.name}
                              >
                                <Link href={item.href} className="tracking-wide text-base text-white">
                                  {item.name}
                                </Link>
                                {item.info && (
                                  <div className="bg-secondary-lighter leading-normal text-black text-[8px] rounded-full px-1">
                                    {item.info}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
        {/* ////////////////// Mobile ////////////////// */}
      </div>
    </div>
  );
};
