import repeat from "@lib/util/repeat"

const SkeletonProductTabs = () => {
  return (
    <div className="small:flex hidden flex-col animate-pulse w-full medium:content-container content-container-mobile small:content-container-tablet">
      <div className="flex items-center gap-x-6 border-b border-gray-100 pb-2">
        {repeat(4).map((index) => (
          <div
            key={index}
            className="h-6 pb-2 w-12 bg-gray-100 flex-1 basis-0"
          ></div>
        ))}
      </div>
      <div className="py-8">
        <div className="grid grid-cols-2 gap-x-8">
          {repeat(4).map((index) => (
            <div className="flex flex-col gap-y-4" key={index}>
              {repeat(4).map((index) => (
                <div className="flex flex-col gap-y-2" key={index}>
                  <div className="bg-gray-100 h-4 w-32"></div>
                  <div className="bg-gray-100 h-2 w-16"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkeletonProductTabs
