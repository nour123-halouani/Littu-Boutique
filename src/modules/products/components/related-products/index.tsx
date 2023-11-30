import usePreviews from "@lib/hooks/use-previews"
import { StoreGetProductsParams } from "@medusajs/medusa"
import { useCart } from "medusa-react"
import { useMemo, useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import ProductPreview from "../product-preview"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { getProductsList } from "@lib/data"
import { useKeenSlider } from "keen-slider/react"
import LeftButton from "@modules/common/icons/left-button"
import RightButton from "@modules/common/icons/right-button"
import "keen-slider/keen-slider.min.css"

type RelatedProductsProps = {
  product: PricedProduct
}

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  const { cart } = useCart()

  const queryParams: StoreGetProductsParams = useMemo(() => {
    const params: StoreGetProductsParams = {}

    if (cart?.id) {
      params.cart_id = cart.id
    }

    if (product.collection_id) {
      params.collection_id = [product.collection_id]
    }

    if (product.tags) {
      params.tags = product.tags.map((t) => t.value)
    }

    params.is_giftcard = false

    return params
  }, [product, cart?.id])

  const { data } = useInfiniteQuery(
    [`infinite-products-${product.id}`, queryParams, cart],
    ({ pageParam }) => getProductsList({ pageParam, queryParams }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )

  const previews = usePreviews({ pages: data?.pages, region: cart?.region })
  const [currentSlideRelatedProduct, setCurrentSlideRelatedProduct] =
    useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRefRelated, instanceRefRelated] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 13,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlideRelatedProduct(slider?.track?.details?.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="relative small:flex-col gap-6 medium:content-container flex-col small:flex hidden small:content-container-tablet content-container-mobile max-w-[100vw]">
      <div className="uppercase text-[28px] text-typography-dark tracking-wide">
        From collection
      </div>
      {previews.length !== 0 ? (
        <div ref={sliderRefRelated} className="keen-slider">
          {previews?.map((product, index: number) => (
            <div key={index} className="keen-slider__slide">
                <ProductPreview {...product} />
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

      {loaded && instanceRefRelated?.current && (
        <>
          {currentSlideRelatedProduct !== 0 ? (
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer">
              <LeftButton
                className="medium:ml-28 small:ml-16"
                color="black"
                size="22"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRefRelated?.current?.prev()
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
          {currentSlideRelatedProduct !==
          instanceRefRelated.current.track?.details?.slides?.length - 4 ? (
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer">
              <RightButton
                color="black"
                size="22"
                className="medium:mr-28 small:mr-16"
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRefRelated?.current?.next()
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

export default RelatedProducts
