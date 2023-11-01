"use client"
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import LeftButton from "@modules/common/icons/left-button"
import RightButton from "@modules/common/icons/right-button"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import ProductPreview from "@modules/products/components/product-preview"
import Link from "next/link"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const NewArrivalsMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: { perView: 1.6, spacing: 13 },
      },
      "(min-width: 450px)": {
        slides: { perView: 2.3, spacing: 13 },
      },
      "(min-width: 650px)": {
        slides: { perView: 2.8, spacing: 13 },
      },
      "(min-width: 800px)": {
        slides: { perView: 3.4, spacing: 13 },
      },
    },
  })
  const [currentSlideSk, setCurrentSlideSk] = useState(0)
  const [loadedSk, setLoadedSk] = useState(false)
  const [sliderRefSk, instanceRefSk] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlideSk(slider.track.details.rel)
    },
    created() {
      setLoadedSk(true)
    },
    breakpoints: {
      "(max-width: 450px)": {
        slides: { perView: 1.6, spacing: 13 },
      },
      "(min-width: 450px)": {
        slides: { perView: 2.3, spacing: 13 },
      },
      "(min-width: 650px)": {
        slides: { perView: 2.8, spacing: 13 },
      },
      "(min-width: 800px)": {
        slides: { perView: 3.4, spacing: 13 },
      },
    },
  })

  const { data } = useFeaturedProductsQuery()

  return (
    <div className="relative flex flex-col small:hidden my-20 pl-4 gap-6">
      <div className="flex flex-col">
        <div className="uppercase text-[26px] tracking-wider">new arrivals</div>
        <div>
          <Link
            href="/"
            className="border-b-[1.2px] border-typography font-meduim transition-all duration-300 text-[12px] hover:pl-2 hover:pr-2 uppercase tracking-[1.4px]"
          >
            Show more
          </Link>
        </div>
      </div>
      {data ? (
        <div ref={sliderRef} className="keen-slider">
          {data.map((product, index: number) => (
            <div key={index} className="keen-slider__slide">
              <div className="relative">
                <ProductPreview {...product} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div ref={sliderRefSk} className="animate-pulse keen-slider">
          <div className="aspect-[29/40] w-full bg-gray-100 keen-slider__slide" />
          <div className="aspect-[29/40] w-full bg-gray-100 keen-slider__slide" />
          <div className="aspect-[29/40] w-full bg-gray-100 keen-slider__slide" />
          <div className="aspect-[29/40] w-full bg-gray-100 keen-slider__slide" />
        </div>
      )}

      {loaded && instanceRef.current && (
        <div className="flex w-[100%] mt-1">
          {Array.from({
            length: instanceRef.current.track.details.slides.length,
          }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx)
                setCurrentSlide(idx)
              }}
              className={`w-[9px] h-[9px] rounded-full mx-1 cursor-pointer focus:outline-none ${
                currentSlide === idx ? "bg-theme" : "bg-[#D9D9D9]"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  )
}

export default NewArrivalsMobile
