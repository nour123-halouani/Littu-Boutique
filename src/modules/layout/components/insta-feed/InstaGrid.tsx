"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Instaltem } from "."
import SkeletonInstaFeed from "@modules/skeletons/components/skeleton-insta-feed"
import InstaFeedIcon from "@modules/common/icons/insta-feed"

interface InstaGridProps {
  items: Instaltem[]
}

const InstaGrid = ({ items }: InstaGridProps) => {
  if (items?.length === 0) {
    return <SkeletonInstaFeed />
  }

  const [ref] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      "(max-width: 520px)": {
        slides: { perView: 1.5, spacing: 10 },
      },
      "(min-width: 520px)": {
        slides: { perView: 2.5, spacing: 10 },
      },
      "(min-width: 790px)": {
        slides: { perView: 3.2, spacing: 10 },
      },
    },
    slides: { perView: 1.5 },
  })
  return (
    <>
      <div className="small:grid grid-cols-6 gap-3 hidden">
        {items?.map((item, index: number) => (
          <div key={index} className="relative">
            <img src={item.mediaUrl} alt={item.permalink} />
            <div className="absolute w-full h-full top-0 left-0 bg-typography-dark bg-opacity-50 opacity-0 transition-all duration-500 hover:opacity-100">
              <div className="flex items-center justify-center h-full">
                <a href={item.permalink} target="_blank">
                  <InstaFeedIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="small:hidden">
        <div ref={ref} className="keen-slider">
          {items?.map((item, index: number) => (
            <div key={index} className="keen-slider__slide">
              <img src={item.mediaUrl} alt={item.permalink} />
              <div className="absolute w-full h-full top-0 left-0 bg-typography-dark bg-opacity-50 opacity-0 transition-all duration-500 hover:opacity-100">
                <div className="flex items-center justify-center h-full">
                  <a href={item.permalink} target="_blank">
                    <InstaFeedIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default InstaGrid
