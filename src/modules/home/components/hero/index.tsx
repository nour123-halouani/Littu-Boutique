"use client"
import Image from "next/image"
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import sliderOne from "../../../../../public/images/hero_slider_one.png"
import sliderTwo from "../../../../../public/images/hero_slider_two.png"
import sliderThree from "../../../../../public/images/hero_slider_three.png"
import LeftButton from "@modules/common/icons/left-button"
import RightButton from "@modules/common/icons/right-button"
import ButtonWhite from "@modules/common/components/button-white"
import sliderOneM from "../../../../../public/images/men_categ.png"
import sliderTwoM from "../../../../../public/images/women_categ.png"
import sliderThreeM from "../../../../../public/images/sliderMobile.png"
import Link from "next/link"

const Hero = () => {
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
  })
  const [currentSlideMobile, setCurrentSlideMobile] = useState(0)
  const [loadedMobile, setLoadedMobile] = useState(false)
  const [sliderRefMobile, instanceRefMobile] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlideMobile(slider.track.details.rel)
    },
    created() {
      setLoadedMobile(true)
    },
  })

  const slides = [
    {
      image: sliderThree,
      text: "Text for Image 1",
    },
    {
      image: sliderTwo,
      text: "Text for Image 2",
    },
    {
      image: sliderOne,
      text: "Text for Image 3",
    },
  ]

  const slidesMobile = [
    {
      image: sliderThreeM,
    },
    {
      image: sliderTwoM,
    },
    {
      image: sliderOneM,
    },
  ]

  return (
    <>
      <div className="relative small:flex hidden">
        <div ref={sliderRef} className="keen-slider">
          {slides.map((slide, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="relative">
                <Image
                  src={slide.image}
                  loading="lazy"
                  alt={`slider${index + 1}`}
                  className="max-h-[700px] w-[100vw] h-[100vh] object-fill"
                />
                <div className="absolute inset-0 grid grid-cols-2">
                  <div></div>
                  <div className="flex items-start justify-center flex-col">
                    <div className="text-white text-[60px] font-normal uppercase tracking-[3.28px] leading-none">
                      Autumn
                      <br />
                      collection '23
                    </div>
                    <div className="text-white text-[20px] font-extralight tracking-[0.25px] max-w-[65%] mt-1">
                      Tortor eget placerat arcu integer. Lectus fames egestas
                      tincidunt aliquet vivamus nibh lorem nulla.
                    </div>
                    <ButtonWhite className="mt-6">Shop now</ButtonWhite>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            {currentSlide !== 0 ? (
              <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer">
                <LeftButton
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                />
              </div>
            ) : (
              <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                <LeftButton opacity={0.6} />
              </div>
            )}

            {currentSlide !==
            instanceRef.current.track.details.slides.length - 1 ? (
              <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer">
                <RightButton
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                />
              </div>
            ) : (
              <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                <RightButton opacity={0.6} />
              </div>
            )}
          </>
        )}
      </div>
      <div className="relative small:hidden flex bg-bg pt-[60px] mb-12">
        <div className="content-container-mobile uxsmall:content-container-tablet">
          <div ref={sliderRefMobile} className="keen-slider">
            {slidesMobile.map((slide, index) => (
              <div key={index} className="keen-slider__slide">
                <Image
                  src={slide.image}
                  loading="lazy"
                  alt={`slider${index + 1}`}
                  className="max-h-[700px] w-[100%] h-[60vh] object-fill"
                />
                <div className="flex flex-col p-4 gap-1 ">
                  <div className="text-[20px] uppercase tracking-wide">
                    Jesenná kolekcia ’23
                  </div>
                  <div className="self-stretch font-light leading-snug tracking-[0.13px]">
                    Scelerisque duis aliquam qui lorem ipsum dolor amet,
                    consectetur adipiscing elit.
                  </div>
                  <div>
                    <Link
                      href="/"
                      className="border-b-[1.5px] border-black font-normal transition-all duration-300 text-[11px] hover:pl-2 hover:pr-2 uppercase tracking-[1.4px]"
                    >
                      Shop now
                    </Link>
                  </div>
                </div>
                {loadedMobile && instanceRefMobile.current && (
                  <div className="flex justify-center w-[100%] pb-4">
                    {Array.from({
                      length:
                        instanceRefMobile.current.track.details.slides.length,
                    }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          instanceRefMobile.current?.moveToIdx(idx)
                          setCurrentSlideMobile(idx)
                        }}
                        className={`w-[9px] h-[9px] rounded-full mx-1 cursor-pointer focus:outline-none ${
                          currentSlideMobile === idx
                            ? "bg-theme"
                            : "bg-[#D9D9D9]"
                        }`}
                      ></button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
