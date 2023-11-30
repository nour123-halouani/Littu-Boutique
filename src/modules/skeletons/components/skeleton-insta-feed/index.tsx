import "keen-slider/keen-slider.min.css"

const SkeletonInstaFeed = ({ refSk }: any) => {
  return (
    <>
      <div className="small:grid grid-cols-6 gap-3 hidden">
        {[1, 2, 3, 4, 5, 6].map((index: number) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-[29/34] w-full bg-gray-100"></div>
          </div>
        ))}
      </div>
      <div className="small:hidden">
        <div ref={refSk} className="keen-slider">
          {[1, 2, 3, 4, 5, 6].map((index: number) => (
            <div key={index} className="animate-pulse keen-slider__slide">
              <div className="aspect-[29/34] w-full bg-gray-100"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SkeletonInstaFeed
