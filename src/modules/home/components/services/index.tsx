"use client"
import Bag from "@modules/common/icons/bag"
import Calendar from "@modules/common/icons/calendar"
import Gift from "@modules/common/icons/gift"
import Return from "@modules/common/icons/return"

const Services = () => {
  return (
    <div
      className="grid medium:gap-24 small:gap-16 small:grid-cols-4 xsmall:grid-cols-2 
    grid-cols-1 mb-32 small:my-32 my-16 small:content-container-tablet medium:content-container 
    justify-center items-baseline gap-8 px-16"
    >
      <div className="flex flex-col gap-2 justify-center items-center w-[100%]">
        <Calendar />
        <div className="text-center tracking-[0.4px]">DELIVERY IN 3 DAYS</div>
        <div className="text-center	font-light text-[15px]">
          At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-[100%]">
        <Bag />
        <div className="text-center tracking-[0.4px]">PICK-UP POINT</div>
        <div className="text-center	font-light text-[15px]">
          At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-[100%]">
        <Gift />
        <div className="text-center tracking-[0.4px]">GIFT PACKAGING</div>
        <div className="text-center	font-light text-[15px]">
          At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-[100%]">
        <Return />
        <div className="text-center tracking-[0.4px]">RETURNS & EXCHANGES</div>
        <div className="text-center	font-light text-[15px]">
          At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
        </div>
      </div>
    </div>
  )
}

export default Services
