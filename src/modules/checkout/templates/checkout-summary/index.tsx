"use client"

import DiscountCode from "@modules/checkout/components/discount-code"
import GiftCard from "@modules/checkout/components/gift-card"
import PaymentButton from "@modules/checkout/components/payment-button"
import CartTotals from "@modules/common/components/cart-totals"
import { useCart } from "medusa-react"

const CheckoutSummary = () => {
  const { cart } = useCart()

  if (!cart?.id) {
    return null
  }

  return (
    <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8">
      <div className="w-full bg-white p-6 flex flex-col gap-y-6 border-[1px] border-gray-200">
        <CartTotals cart={cart} />
        <PaymentButton paymentSession={cart?.payment_session} />
      </div>
      <div className="p-6 bg-white border-[1px] border-gray-200">
        <DiscountCode cart={cart} />
      </div>
      <div className="border-[1px] border-gray-200">
        <GiftCard cart={cart} />
      </div>
    </div>
  )
}

export default CheckoutSummary
