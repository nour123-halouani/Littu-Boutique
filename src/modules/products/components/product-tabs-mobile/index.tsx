"use client"
import AngleDown from "@modules/common/icons/angle-down"
import { useMemo, useState } from "react"
import { ProductAdditionalDetails } from "../product-additional-details"
import { ShippingInfoTab } from "../shipping-info"
import { ReviewSection } from "../review-section"
import Close from "@modules/common/icons/close"
import Open from "@modules/common/icons/open"

const ProductTabsMobile = ({ product, reviews }: any) => {
  const tabs = useMemo(() => {
    return [
      {
        label: "Description",
        component: <p>{product.description && product.description}</p>,
      },
      {
        label: "Additionnal details",
        component: <ProductAdditionalDetails product={product} />,
      },
      {
        label: "shipping and returns",
        component: <ShippingInfoTab />,
      },
      {
        label: `Reviews (${reviews.length})`,
        component: <ReviewSection reviews={reviews} />,
      },
    ]
  }, [product])

  const [open, setOpen] = useState(Array(tabs?.length).fill(false))

  const handleClick = (index: any) => {
    const updatedOpen = [...open]
    updatedOpen[index] = !updatedOpen[index]
    setOpen(updatedOpen)
  }

  return (
    <div className="min-w-full">
      <ul className="divide-y border-b w-full">
        {tabs.map((tab: any, index: number) => (
          <li key={index}>
            <div
              className="flex flex-row gap-2 justify-between items-center py-3"
              onClick={() => handleClick(index)}
            >
              <div
                className={`font-medium text-[14px] uppercase tracking-[0.9px] ${
                  open[index] && "text-theme"
                }`}
              >
                {tab.label}
              </div>
              {open[index] ? <Close /> : <Open />}
            </div>
            {open[index] && (
              <div className="text-[14px] font-light pb-10 pt-3">
                {tab.component}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductTabsMobile
