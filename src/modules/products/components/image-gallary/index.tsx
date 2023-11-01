import { Image as MedusaImage } from "@medusajs/medusa"
import Image from "next/image"
import { MutableRefObject } from "react"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="max-w-[100%] flex flex-row-reverse">
      <div ref={sliderRef} className="keen-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className="keen-slider__slide text-3xl mt-10 h-100 cursor-pointer"
          >
            <Image
              src={img.url}
              className=""
              alt="Thumbnail"
              height={200}
              width={400}
            />
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider flex">
        {images.map((img, index) => (
          <div
            key={index}
            className="keen-slider__slide cursor-pointer"
          >
            <Image
              src={img.url}
              className=""
              alt="Thumbnail"
              height={200}
              width={200}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
