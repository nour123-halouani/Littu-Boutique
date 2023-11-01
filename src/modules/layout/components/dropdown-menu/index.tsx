import { Popover, Transition } from "@headlessui/react"
import AngleDown from "@modules/common/icons/angle-down"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

interface menuItems {
  cat: string
  subsubCat: string[]
}

const DropdownMenu = ({
  menuItem,
  subItem,
}: {
  menuItem: string
  subItem: menuItems[]
}) => {
  const [open, setOpen] = useState(false)
  const { push } = useRouter()

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(true)}
      className="h-full"
    >
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          <>
            <Link href="/" className="relative flex h-full" passHref>
              <Popover.Button
                className={clsx(
                  "relative h-full flex items-center transition-all ease-out duration-200 uppercase tracking-[1.4px]"
                )}
                onClick={() => push("/")}
              >
                {menuItem} <AngleDown className="mb-1 ml-1" />
              </Popover.Button>
            </Link>

            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel
                static
                className="absolute top-full inset-x-0 z-30 border-y border-gray-200"
              >
                <div className="relative bg-bg-light py-10">
                  <div className="grid grid-cols-4 gap-4 items-start content-container font-medium text-[15px] tracking-[1.8px] uppercase">
                    {subItem.map((item: menuItems, index: number) => (
                      <div key={index}>
                        <Link href="/" className="hover:underline ">
                          {item.cat}
                        </Link>
                        <div className="flex flex-col gap-1 mt-3.5 capitalize text-[14px] font-light tracking-[0.8px]">
                          {item.subsubCat.map(
                            (subSubCat: string, id: number) => (
                              <Link
                                href="/"
                                key={id}
                                className="hover:text-theme "
                              >
                                {subSubCat}
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        </Popover>
      </div>
    </div>
  )
}

export default DropdownMenu
