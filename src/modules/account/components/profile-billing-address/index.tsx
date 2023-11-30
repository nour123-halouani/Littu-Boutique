import { useAccount } from "@lib/context/account-context"
import { Customer, StorePostCustomersCustomerReq } from "@medusajs/medusa"
import Input from "@modules/common/components/input"
import NativeSelect from "@modules/common/components/native-select"
import { useRegions, useUpdateMe } from "medusa-react"
import React, { useEffect, useMemo } from "react"
import { useForm, useWatch } from "react-hook-form"
import AccountInfo from "../account-info"
import { emailRegex, phoneRegex } from "@lib/util/regex"
import CountrySelect from "@modules/checkout/components/country-select"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

type UpdateCustomerNameFormData = Pick<
  StorePostCustomersCustomerReq,
  "billing_address"
>

const ProfileBillingAddress: React.FC<MyInformationProps> = ({ customer }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<UpdateCustomerNameFormData>({
    defaultValues: {
      ...mapBillingAddressToFormData({ customer }),
    },
  })

  const {
    mutate: update,
    isLoading,
    isSuccess,
    isError,
    reset: clearState,
  } = useUpdateMe()

  const { regions } = useRegions()

  const regionOptions = useMemo(() => {
    return (
      regions
        ?.map((region) => {
          return region.countries.map((country) => ({
            value: country.iso_2,
            label: country.display_name,
          }))
        })
        .flat() || []
    )
  }, [regions])

  useEffect(() => {
    reset({
      ...mapBillingAddressToFormData({ customer }),
    })
  }, [customer, reset])

  const { refetchCustomer } = useAccount()

  const [
    firstName,
    lastName,
    // company,
    address1,
    address2,
    city,
    province,
    postalCode,
    countryCode,
  ] = useWatch({
    control,
    name: [
      "billing_address.first_name",
      "billing_address.last_name",
      // "billing_address.company",
      "billing_address.address_1",
      "billing_address.address_2",
      "billing_address.city",
      "billing_address.province",
      "billing_address.postal_code",
      "billing_address.country_code",
    ],
  })

  const updateBillingAddress = (data: UpdateCustomerNameFormData) => {
    return update(
      {
        id: customer.id,
        ...data,
      },
      {
        onSuccess: () => {
          refetchCustomer()
        },
      }
    )
  }

  const currentInfo = useMemo(() => {
    if (!customer.billing_address) {
      return "No billing address"
    }

    const country =
      regionOptions?.find(
        (country) => country.value === customer.billing_address.country_code
      )?.label || customer.billing_address.country_code?.toUpperCase()

    return (
      <ul className="flex flex-col font-light">
        <li>
          {customer.billing_address.first_name}
          {customer.billing_address.last_name}
        </li>
        <li>{customer.billing_address.company}</li>
        <li>
          {customer.billing_address.address_1}
          {customer.billing_address.address_2
            ? `, ${customer.billing_address.address_2}`
            : ""}
        </li>
        <li>
          {customer.billing_address.postal_code},
          {customer.billing_address.city}
        </li>
        <li>{country}</li>
      </ul>
    )
  }, [customer, regionOptions])

  return (
    <form
      onSubmit={handleSubmit(updateBillingAddress)}
      onReset={() => reset(mapBillingAddressToFormData({ customer }))}
      className="w-full"
    >
      <AccountInfo
        label="Billing address"
        currentInfo={currentInfo}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        clearState={clearState}
      >
        <div className="grid grid-cols-1 gap-y-4">
          <div className="grid xsmall:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="font-light text-[14px]">First Name*</label>
              <Input
                label="First name"
                {...register("billing_address.first_name", {
                  required: "First name is required",
                })}
                errors={errors}
                placeholder="First Name"
                defaultValue={firstName}
              />
            </div>
            <div>
              <label className="font-light text-[14px]">Last Name *</label>
              <Input
                label="Last name"
                {...register("billing_address.last_name", {
                  required: "Last name is required",
                })}
                errors={errors}
                placeholder="Last Name"
                defaultValue={lastName}
              />
            </div>
          </div>
          <div className="grid xsmall:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="font-light text-[14px]">Address 1 *</label>
              <Input
                label="Address"
                {...register("billing_address.address_1", { required: true })}
                errors={errors}
                placeholder="Address 1"
                defaultValue={address1}
              />
            </div>
            <div>
              <label className="font-light text-[14px]">Address 2</label>
              <Input
                label="Apartments, suite, etc."
                {...register("billing_address.address_2")}
                errors={errors}
                placeholder="Address 2"
                defaultValue={address2}
              />
            </div>
          </div>
          <div className="grid xsmall:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label className="font-light text-[14px]">Country *</label>
              <CountrySelect
                {...register("billing_address.country_code", {
                  required: "Country is required",
                })}
                errors={errors}
                placeholder="Country"
                defaultValue={countryCode}
              />
            </div>
            <div>
              <label className="font-light text-[14px]">State *</label>
              <Input
                label="State / Province"
                {...register("billing_address.province", {
                  required: "state is required",
                })}
                errors={errors}
                placeholder="State"
                defaultValue={province}
              />
            </div>
          </div>
          <div className="grid xsmall:grid-cols-[122px_1fr] grid-cols-1 gap-4">
            <div>
              <label className="font-light text-[14px]">Postal Code *</label>
              <Input
                label="Postal code"
                {...register("billing_address.postal_code", {
                  required: "Postal code is required",
                })}
                errors={errors}
                placeholder="Postal Code"
                defaultValue={postalCode}
              />
            </div>
            <div>
              <label className="font-light text-[14px]">City *</label>
              <Input
                label="City"
                {...register("billing_address.city", {
                  required: "City is required",
                })}
                errors={errors}
                placeholder="City"
                defaultValue={city}
              />
            </div>
          </div>
        </div>
      </AccountInfo>
    </form>
  )
}

const mapBillingAddressToFormData = ({ customer }: MyInformationProps) => {
  return {
    billing_address: {
      first_name: customer.billing_address?.first_name || undefined,
      last_name: customer.billing_address?.last_name || undefined,
      company: customer.billing_address?.company || undefined,
      address_1: customer.billing_address?.address_1 || undefined,
      address_2: customer.billing_address?.address_2 || undefined,
      city: customer.billing_address?.city || undefined,
      province: customer.billing_address?.province || undefined,
      postal_code: customer.billing_address?.postal_code || undefined,
      country_code: customer.billing_address?.country_code || undefined,
    },
  }
}

export default ProfileBillingAddress
