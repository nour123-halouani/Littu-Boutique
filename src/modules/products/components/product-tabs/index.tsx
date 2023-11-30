import { Tab } from "@headlessui/react"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { useMemo } from "react"
import clsx from "clsx"
import { ProductAdditionalDetails } from "../product-additional-details"
import { ShippingInfoTab } from "../shipping-info"
import { ReviewSection } from "../review-section"

type ProductTabsProps = {
  product: PricedProduct
}

const ProductTabs = ({ product, reviews }: any) => {
  const tabs = useMemo(() => {
    return [
      {
        label: "Description",
        component: (
          <Tab.Panel className="text-[14px] font-light py-8 small:px-14">
            {product.description && product.description}
          </Tab.Panel>
        ),
      },
      {
        label: "Additionnal details",
        component: (
          <Tab.Panel className="text-[14px] font-light py-10 small:px-14">
            <ProductAdditionalDetails product={product} />
          </Tab.Panel>
        ),
      },
      {
        label: "shipping and returns",
        component: (
          <Tab.Panel className="text-[14px] font-light py-10 small:px-14">
            <ShippingInfoTab />
          </Tab.Panel>
        ),
      },
      {
        label: `Reviews (${reviews.length})`,
        component: (
          <Tab.Panel className="text-[14px] font-light py-10 small:px-14">
            <ReviewSection reviews={reviews} />
          </Tab.Panel>
        ),
      },
    ]
  }, [product])

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="border-b border-gray-200 box-border grid grid-cols-4 items-center px-10">
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={i}
                className={({ selected }) =>
                  clsx(
                    "text-center uppercase tracking-widest font-medium border-b border-gray-200 transition-color duration-150 ease-in-out",
                    {
                      "text-theme border-b-[1px] border-solid border-theme box-border h-full":
                        selected,
                    }
                  )
                }
              >
                {tab.label}
              </Tab>
            )
          })}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab, j) => {
            return <div key={j}>{tab.component}</div>
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default ProductTabs
