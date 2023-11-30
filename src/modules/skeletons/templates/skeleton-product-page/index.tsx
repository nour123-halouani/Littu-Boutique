import repeat from "@lib/util/repeat"
import SkeletonButton from "@modules/skeletons/components/skeleton-button"
import SkeletonProductTabs from "@modules/skeletons/components/skeleton-product-tabs"

const SkeletonProductPage = () => {
  return (
    <div>
      <div className="relative aspect-[29/34] bg-gray-100 w-full h-[90px] mb-[-50px]" />
      <div className="medium:content-container content-container-mobile small:content-container-tablet mt-[120px] grid small:grid-cols-2 small:flex-row small:items-start py-6 relative small:gap-10 medium:gap-16">
        <div className="small:flex hidden flex-row gap-2 h-full">
          <div className="flex flex-col w-[20%] px-1 gap-y-3">
            {repeat(2).map((index) => {
              return (
                <div
                  key={index}
                  className="h-[calc(100%/4)] w-full bg-gray-100"
                ></div>
              )
            })}
          </div>
          <div className="relative aspect-[29/34] bg-gray-100 w-[80%] h-full" />
        </div>

        <div className="small:hidden flex flex-row gap-2">
          <div className="relative aspect-[29/34] bg-gray-100 w-[100%] h-[320px]" />
        </div>

        <div className="small:top-20 py-8 small:py-0 flex flex-col gap-y-12">
          <div>
            <div className="flex flex-col gap-y-12 mx-auto">
              <div>
                <div className="flex flex-col gap-y-2">
                  <div className="h-4 w-32 bg-gray-100"></div>
                  <div className="h-12 w-52 bg-gray-100"></div>

                  <div className="flex flex-col gap-y-2 mt-4">
                    {repeat(1).map((index) => (
                      <div key={index} className="h-4 w-62 bg-gray-100"></div>
                    ))}
                  </div>

                  <div className="my-8 flex flex-col gap-y-6">
                    <div className="bg-gray-100 h-6 w-16"></div>
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                      {repeat(1).map((v) => {
                        return (
                          <div
                            key={v}
                            className="bg-gray-100 w-[50px] h-[50px]"
                          ></div>
                        )
                      })}
                    </div>
                  </div>
                  <SkeletonButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SkeletonProductTabs />
    </div>
  )
}

export default SkeletonProductPage
