"use client"
import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import React, { useRef } from "react"
import ImageGallery from "../components/image-gallary"
import MobileActions from "../components/mobile-actions"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Breadcrumbs from "@modules/common/components/breadcrumbs"
import ImageGalleryMobile from "../components/image-gallary-mobile"
import Newsletter from "@modules/common/components/newsletter"
import ProductTabsMobile from "../components/product-tabs-mobile"
import rev1 from "./../../../../public/images/rating_one.png"
import rev2 from "./../../../../public/images/rating_two.png"
import rev3 from "./../../../../public/images/rating_three.png"
import rev4 from "./../../../../public/images/rating_four.png"
import rev5 from "./../../../../public/images/rating_five.png"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const info = useRef<HTMLDivElement>(null)
  const inView = useIntersection(info, "0px")

  const reviews: any = [
    {
      imgSrc: rev1,
      rating: 3,
      name: "Jenny Willis",
      date: "07/05/2023",
      content:
        "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis",
    },
    {
      imgSrc: rev2,
      rating: 5,
      name: "Jenny Willis",
      date: "07/05/2023",
      content:
        "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis ",
    },
    {
      imgSrc: rev3,
      rating: 2.5,
      name: "Jenny Willis",
      date: "07/05/2023",
      content:
        "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis ",
    },
    {
      imgSrc: rev4,
      rating: 3.5,
      name: "Jenny Willis",
      date: "07/05/2023",
      content:
        "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis",
    },
    {
      imgSrc: rev5,
      rating: 4,
      name: "Jenny Willis",
      date: "07/05/2023",
      content:
        "Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis convallis ",
    },
  ]

  return (
    <ProductProvider product={product}>
      <Breadcrumbs path={"Products / " + product.title} />
      <div className="medium:content-container small:content-container-tablet grid small:grid-cols-2 small:flex-row small:items-start py-6 relative small:gap-10 medium:gap-16 mt-6 small:mt-14 h-full">
        <div className="flex flex-col gap-y-8 w-[100%]">
          <ImageGallery images={product?.images || []} />
          <ImageGalleryMobile images={product.images} />
        </div>
        <div
          className="small:top-20 py-8 small:py-0 w-[100%] flex flex-col gap-y-12"
          ref={info}
        >
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="medium:content-container small:content-container-tablet content-container-mobile my-16 small:my-32 uxsmall:flex hidden">
        <ProductTabs product={product} reviews={reviews} />
      </div>
      <div className="medium:content-container small:content-container-tablet content-container-mobile my-16 small:my-32 uxsmall:hidden flex">
        <ProductTabsMobile product={product} reviews={reviews} />
      </div>
      <div className="my-16 small:my-32">
        <RelatedProducts product={product} />
      </div>
      <Newsletter />
      <MobileActions product={product} show={!inView} />
    </ProductProvider>
  )
}

export default ProductTemplate
