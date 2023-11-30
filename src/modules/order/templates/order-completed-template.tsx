"use client"

import { Order } from "@medusajs/medusa"
import Help from "@modules/order/components/help"
import Items from "@modules/order/components/items"
import OrderDetails from "@modules/order/components/order-details"
import OrderSummary from "@modules/order/components/order-summary"
import ShippingDetails from "@modules/order/components/shipping-details"
import OnboardingCta from "@modules/order/components/onboarding-cta"
import React, { useEffect, useState } from "react"

type OrderCompletedTemplateProps = {
  order: Order
}

const OrderCompletedTemplate: React.FC<OrderCompletedTemplateProps> = ({
  order,
}) => {
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false)

  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding")
    setIsOnboarding(onboarding === "true")
  }, [])

  return (
      <div className="small:content-container content-container-mobile medium:content-container flex flex-col justify-center items-center">
        {isOnboarding && <OnboardingCta orderId={order.id} />}
        <div className="max-w-4xl h-full bg-white w-full border-[1px] border-gray-200 p-4 my-12">
          <OrderDetails order={order} />
          <Items
            items={order.items}
            region={order.region}
            cartId={order.cart_id}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 ">
            <ShippingDetails
              shippingMethods={order.shipping_methods}
              address={order.shipping_address}
            />
            <OrderSummary order={order} />
          </div>
        </div>
      </div>
  )
}

export default OrderCompletedTemplate
