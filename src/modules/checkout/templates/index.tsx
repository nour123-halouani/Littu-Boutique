import { CheckoutProvider } from "@lib/context/checkout-context"
import ChevronDown from "@modules/common/icons/chevron-down"
import Link from "next/link"
import CheckoutLoader from "../components/checkout-loader"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import Logo from "@modules/common/icons/logo"

const CheckoutTemplate = () => {
  return (
    <CheckoutProvider>
      <div className="h-16 sticky top-0 inset-x-0 z-50 group border-b-[1px] border-gray-200 small:content-container content-container-mobile medium:content-container">
        <nav className="flex items-center h-full justify-between bg-white">
          <Link
            href="/cart"
            className="flex items-center gap-x-2 flex-1 basis-0"
          >
            <div className="flex justify-center items-center gap-4">
              <ChevronDown className="rotate-90" size={20} />
              <span className="hidden small:flex uppercase text-[12px] tracking-wider">
                Back to shopping cart
              </span>
            </div>
          </Link>
          <Link href="/">
            <Logo size={60} />
          </Link>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="small:content-container content-container-mobile medium:content-container">
        <CheckoutLoader />
        <div className="grid small:grid-cols-12 grid-cols-1 my-14 gap-8">
          <div className="small:col-span-8">
            <CheckoutForm />
          </div>
          <div className="small:col-span-4">
            <CheckoutSummary />
          </div>
        </div>
      </div>
    </CheckoutProvider>
  )
}

export default CheckoutTemplate
