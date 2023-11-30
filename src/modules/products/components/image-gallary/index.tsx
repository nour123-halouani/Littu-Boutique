import { Image as MedusaImage } from "@medusajs/medusa"
import { MutableRefObject, useState } from "react"
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

type ImageGalleryProps = {
  images: MedusaImage[]
}

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>,
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>
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
          setSelectedImageIndex(idx)
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
        setSelectedImageIndex(next)
      })
    })
  }
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4.5,
        spacing: 10,
      },
      vertical: true,
    },
    [ThumbnailPlugin(instanceRef, setSelectedImageIndex)]
  )

  return (
    <div className="hidden small:grid grid-row-reverse small:h-[85vh] medium:max-h-[600px] small:max-h-[500px] grid-cols-10 gap-2">
      <div ref={sliderRef} className="keen-slider order-2 col-span-8">
        {images.map((img, index) => (
          <div key={index} className="keen-slider__slide cursor-pointer">
            <img src={img.url} alt="Thumbnail" className="w-full h-[100%]" />
          </div>
        ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider order-1 col-span-2 px-1">
        {images.map((img, index) => (
          <div
            key={index}
            className={`keen-slider__slide cursor-pointer ${
              selectedImageIndex === index ? "active" : ""
            }`}
          >
            <img
              src={img.url}
              alt="Thumbnail"
              className={`object-center w-full h-full ${
                selectedImageIndex === index
                  ? "border-[1.5px] border-solid border-theme-dark"
                  : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
