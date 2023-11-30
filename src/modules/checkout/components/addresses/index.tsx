import { useCheckout } from "@lib/context/checkout-context"
import Button from "@modules/common/components/button-black"
import "../../../../styles/common/customCheckbox.css"
import Spinner from "@modules/common/icons/spinner"
import BillingAddress from "../billing_address"
import ShippingAddress from "../shipping-address"

const Addresses = () => {
  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isEdit, toggle: setEdit },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()
  return (
    <div className="bg-white">
      <div className="flex items-center gap-x-4 px-9 pb-6 pt-9">
        <div className="xsmall:text-[28px] text-[20px] font-medium">1</div>
        <h2 className="xsmall:text-[25px] text-[20px] tracking-wider font-normal uppercase">
          Shipping address
        </h2>
      </div>
      {isEdit ? (
        <div className="px-8 pb-8">
          <ShippingAddress />
          <div className="mt-6">
            <label className="inline-flex items-center mt-4 container cursor-pointer">
              <span className="text-theme-dark font-light tracking-[0.18px] text-[13px] xsmall:text-[15px] mt-[-2.5px] xsmall:mt-[-2px]">
                Same as billing address
              </span>
              <input type="checkbox" checked={checked} onChange={onChange} />
              <span className="checkmark"></span>
            </label>
          </div>
          {!checked && (
            <div>
              <div className="flex items-center gap-x-4 pl-1 pb-6 pt-9">
                <div className="xsmall:text-[28px] text-[20px] font-medium">
                  2
                </div>
                <h2 className="xsmall:text-[25px] text-[20px] tracking-wider font-normal uppercase">
                  Billing address
                </h2>
              </div>
              <BillingAddress />
            </div>
          )}
          <Button
            className="max-w-[200px] mt-6"
            onClick={handleSubmit(setAddresses)}
          >
            Continue to delivery
          </Button>
        </div>
      ) : (
        <div>
          <div className="bg-theme-light px-8 py-6 text-small-regular">
            {cart && cart.shipping_address ? (
              <div className="flex items-start gap-x-8">
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col">
                    <span>
                      {cart.shipping_address.first_name}{" "}
                      {cart.shipping_address.last_name}
                    </span>
                    <span>
                      {cart.shipping_address.address_1}{" "}
                      {cart.shipping_address.address_2}
                    </span>
                    <span>
                      {cart.shipping_address.postal_code},{" "}
                      {cart.shipping_address.city}
                    </span>
                    <span>
                      {cart.shipping_address.country_code?.toUpperCase()}
                    </span>
                    <div className="mt-4 flex flex-col">
                      <span>{cart.shipping_address.phone}</span>
                      <span>{cart.email}</span>
                    </div>
                    {checked && (
                        <span className="font-semibold text-[12px] tracking-wider mt-5 uppercase">Same as billing address</span>
                    )}
                  </div>
                  <div>
                    <button className="underline uppercase tracking-wide" onClick={setEdit}>Edit</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="">
                <Spinner />
              </div>
            )}
          </div>
          {!checked && (
            <div>
              <div className="flex items-center gap-x-4 px-9 pb-6 pt-9">
                <div className="xsmall:text-[25px] text-[20px] font-medium">
                  2
                </div>
                <h2 className="xsmall:text-[25px] text-[20px] tracking-wider font-normal uppercase">
                  Billing address
                </h2>
              </div>
              <div className="bg-theme-light px-8 py-6 text-small-regular">
                {cart && cart.billing_address ? (
                  <div className="flex items-start gap-x-8">
                    <div className="flex items-start justify-between w-full">
                      <div className="flex flex-col">
                        <span>
                          {cart.billing_address.first_name}{" "}
                          {cart.billing_address.last_name}
                        </span>
                        <span>
                          {cart.billing_address.address_1}{" "}
                          {cart.billing_address.address_2}
                        </span>
                        <span>
                          {cart.billing_address.postal_code},{" "}
                          {cart.billing_address.city}
                        </span>
                        <span>
                          {cart.billing_address.country_code?.toUpperCase()}
                        </span>

                        <div className="mt-4 flex flex-col">
                          <span>{cart.billing_address.phone}</span>
                        </div>
                      </div>
                      <div>
                      <button className="underline uppercase tracking-wide" onClick={setEdit}>Edit</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="">
                    <Spinner />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Addresses
