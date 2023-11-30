"use client"
import useEnrichedLineItems from "@lib/hooks/use-enrich-line-items"
import DiscountCode from "@modules/checkout/components/discount-code"
import SkeletonCartPage from "@modules/skeletons/templates/skeleton-cart-page"
import { useCart, useMeCustomer } from "medusa-react"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import ItemsTemplate from "./items"
import Summary from "./summary"
import Breadcrumbs from "@modules/common/components/breadcrumbs"
import Newsletter from "@modules/common/components/newsletter"

const CartTemplate = () => {
  const { cart } = useCart()
  const { customer, isLoading } = useMeCustomer()
  const items = useEnrichedLineItems()

  if (!cart || !cart?.id?.length || isLoading) {
    return <SkeletonCartPage />
  }

  return (
    <>
      <Breadcrumbs path={"Domov / Cart"} />
      <div className="py-14">
        <div className="small:content-container content-container-mobile medium:content-container">
          {cart.items.length ? (
            <div className="grid grid-cols-1 small:grid-cols-12 gap-8">
              <div className="flex flex-col bg-white p-6 gap-y-6 border-[1px] border-gray-200 small:col-span-8">
                {!customer && <SignInPrompt />}
                <ItemsTemplate region={cart?.region} items={items} />
              </div>
              <div className="small:col-span-4">
                <div className="flex flex-col gap-y-8 sticky top-12">
                  {cart && cart.region && (
                    <>
                      <div className="bg-white p-6 border-[1px] border-gray-200">
                        <Summary cart={cart} />
                      </div>
                      <div className="bg-white p-6 border-[1px] border-gray-200">
                        <DiscountCode cart={cart} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {!customer && <SignInPrompt />}
              <EmptyCartMessage />
            </div>
          )}
        </div>
      </div>
      <Newsletter/>
    </>
  )
}

export default CartTemplate
