import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"
import { emailRegex, phoneRegex } from "@lib/util/regex"

const BillingAddress = () => {
  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-1 gap-y-4">
          <div className="grid xsmall:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="font-light text-[14px]">First Name*</label>
              <Input
                label="First name"
                {...register("shipping_address.first_name", {
                  required: "First name is required",
                })}
                // autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">Last Name *</label>
              <Input
                label="Last name"
                {...register("shipping_address.last_name", {
                  required: "Last name is required",
                })}
                // autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid xsmall:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="font-light text-[14px]">Email *</label>
              <Input
                label="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: emailRegex,
                })}
                // autoComplete="email"
                errors={errors}
                touched={touchedFields}
                placeholder="Email"
              />
            </div>
            <div>
              <label className="font-light text-[14px] mt-3">Phone *</label>
              <Input
                label="Phone"
                {...register("shipping_address.phone", {
                  required: "phone is required",
                  pattern: phoneRegex,
                })}
                // autoComplete="tel"
                errors={errors}
                touched={touchedFields}
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="grid xsmall:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="font-light text-[14px]">Address 1 *</label>
              <Input
                label="Address"
                {...register("shipping_address.address_1", {
                  required: "Address is required",
                })}
                // autoComplete="address-line1"
                errors={errors}
                touched={touchedFields}
                placeholder="Address 1"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">Address 2</label>
              <Input
                label="Apartments, suite, etc."
                {...register("shipping_address.address_2")}
                // autoComplete="address-line2"
                errors={errors}
                touched={touchedFields}
                placeholder="Address 2"
              />
            </div>
          </div>
          <div className="grid xsmall:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="font-light text-[14px]">Country *</label>
              <CountrySelect
                {...register("shipping_address.country_code", {
                  required: "Country is required",
                })}
                // autoComplete="country"
                errors={errors}
                touched={touchedFields}
                placeholder="Country"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">State *</label>
              <Input
                label="State / Province"
                {...register("shipping_address.province", {
                  required: "state is required",
                })}
                // autoComplete="address-level1"
                errors={errors}
                touched={touchedFields}
                placeholder="State"
              />
            </div>
          </div>
          <div className="grid xsmall:grid-cols-[122px_1fr] grid-cols-1 gap-4">
            <div>
              <label className="font-light text-[14px]">Postal Code *</label>
              <Input
                label="Postal code"
                {...register("shipping_address.postal_code", {
                  required: "Postal code is required",
                })}
                // autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
                placeholder="Postal Code"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">City *</label>
              <Input
                label="City"
                {...register("shipping_address.city", {
                  required: "City is required",
                })}
                // autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
                placeholder="City"
              />
            </div>
          </div>
        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
