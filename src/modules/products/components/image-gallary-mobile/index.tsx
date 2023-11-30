import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import { Image as MedusaImage } from "@medusajs/medusa"
import "keen-slider/keen-slider.min.css"

type ImageGalleryProps = {
  images?: MedusaImage[]
}

export default function ImageGalleryMobile({ images }: ImageGalleryProps) {
  const [currentSlideProductMobile, setCurrentSlideProductMobile] = useState(0)
  const [loadedMobile, setLoadedMobile] = useState(false)
  const [sliderRefProductMobile, instanceRefProductMobile] =
    useKeenSlider<HTMLDivElement>({
      slides: {
        perView: 1,
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlideProductMobile(slider.track.details.rel)
      },
      created() {
        setLoadedMobile(true)
      },
    })

  return (
    <div className="small:hidden xsmall:px-[18%] uxsmall:px-[25%] content-container-mobile flex flex-col max-w-[100vw]">
      <div ref={sliderRefProductMobile} className="keen-slider">
        {images?.map((img, index) => (
          <div key={index} className="keen-slider__slide">
            <img src={img.url} alt="Thumbnail" className="h-[60vh] max-h-[650px] w-full " />
          </div>
        ))}
      </div>
      <div className="mt-4">
        {loadedMobile && instanceRefProductMobile?.current && (
          <div className="flex justify-center">
            {Array.from({
              length:
                instanceRefProductMobile.current.track.details?.slides?.length,
            }).map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRefProductMobile.current?.moveToIdx(idx)
                    setCurrentSlideProductMobile(idx)
                  }}
                  className={`w-[9px] h-[9px] rounded-full mx-1 cursor-pointer focus:outline-none ${
                    currentSlideProductMobile === idx
                      ? "bg-theme"
                      : "bg-[#D9D9D9]"
                  }`}
                ></button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
