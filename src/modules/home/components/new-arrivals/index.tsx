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

const NewArrivals = () => {
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
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 13 },
      },
    },
  })

  const { data } = useFeaturedProductsQuery()

  return (
    <div className="relative small:flex-col small:flex hidden my-32 small:content-container-tablet medium:content-container gap-6">
      <div className="flex justify-between items-center">
        <div className="uppercase text-[28px] tracking-wider">new arrival</div>
        <div>
          <Link
            href="/"
            className="border-b-[1.2px] font-meduim transition-all duration-300 text-[12px] hover:pl-2 hover:pr-2 uppercase tracking-[1.4px]"
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
        <div className="flex flex-row animate-pulse gap-3">
          <div className="aspect-[29/40] w-full bg-gray-100" />
          <div className="aspect-[29/40] w-full bg-gray-100" />
          <div className="aspect-[29/40] w-full bg-gray-100" />
          <div className="aspect-[29/40] w-full bg-gray-100" />
        </div>
      )}

      {loaded && instanceRef?.current && (
        <>
          {currentSlide !== 0 ? (
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer">
              <LeftButton
                className="medium:ml-32 small:ml-16"
                color="black"
                size="22"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef?.current?.prev()
                }
              />
            </div>
          ) : (
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
              <LeftButton
                className="medium:ml-28 small:ml-16"
                color="black"
                size="22"
                opacity={0.6}
              />
            </div>
          )}
          {currentSlide !==
          instanceRef.current.track?.details?.slides?.length - 4 ? (
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer">
              <RightButton
                color="black"
                size="22"
                className="medium:mr-28 small:mr-16"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </div>
          ) : (
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
              <RightButton
                className="medium:mr-28 small:mr-16"
                color="black"
                size="22"
                opacity={0.6}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default NewArrivals
