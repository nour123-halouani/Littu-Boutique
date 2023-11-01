"use client"
import Image from "next/image"
import menCateg from "../../../../../public/images/men_categ.png"
import womenCateg from "../../../../../public/images/women_categ.png"
import accessCateg from "../../../../../public/images/access_categ.png"
import ButtonWhite from "@modules/common/components/button-white"
import Link from "next/link"

const Categories = () => {
  const slides = [
    {
      image: menCateg,
      categories: "Men",
    },
    {
      image: womenCateg,
      categories: "Women",
    },
    {
      image: accessCateg,
      categories: "Accessoires",
    },
  ]

  return (
    <div className="relative grid uxsmall:grid-cols-3 xsmall:grid-cols-2 grid-cols-1 w-full small:mx-auto small:px-0 content-container-mobile mt-3 gap-3">
      {slides.map((slide, index) => (
        <div className="relative" key={index}>
          <div className="group relative overflow-hidden">
            <Image
              src={slide.image}
              loading="lazy"
              alt={`slider${index + 1}`}
              className="w-full object-cover 
              h-[55vh] 
              small:h-[85vh] small:max-h-[620px] small:min-h-[600px]
              xsmall:min-h-[450px] xsmall:h-[50vh] 
              uxsmall:h-[60vh] uxsmall:max-h-[450px] uxsmall:min-h-[450px] 
              transform transition-transform duration-5000 ease-in-out scale-100 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-end justify-center uxsmall:justify-start uxsmall:pl-[10%]">
              <ButtonWhite className="uxsmall:hidden flex mb-4 tracking-widest">
                Shop for {slide.categories}
              </ButtonWhite>
              <div className="uxsmall:flex flex-col hidden mb-[12%]">
                <div className="text-white small:text-[39px] uxsmall:text-[25px] uppercase tracking-wider">
                  {slide.categories}
                </div>
                <div>
                  <Link
                    href="/"
                    className="border-b font-light transition-all duration-300 text-[11px] hover:pl-2 hover:pr-2 text-white uppercase tracking-[1.4px]"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories
