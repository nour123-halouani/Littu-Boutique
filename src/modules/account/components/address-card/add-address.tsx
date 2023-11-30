import { medusaClient } from "@lib/config"
import { useAccount } from "@lib/context/account-context"
import useToggleState from "@lib/hooks/use-toggle-state"
import { emailRegex, phoneRegex } from "@lib/util/regex"
import CountrySelect from "@modules/checkout/components/country-select"
import Button from "@modules/common/components/button-black"
import Input from "@modules/common/components/input"
import Modal from "@modules/common/components/modal"
import Open from "@modules/common/icons/open"
import Spinner from "@modules/common/icons/spinner"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  first_name: string
  last_name: string
  city: string
  country_code: string
  postal_code: string
  province?: string
  address_1: string
  address_2?: string
  phone?: string
  company?: string
}

const AddAddress: React.FC = () => {
  const { state, open, close } = useToggleState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const { refetchCustomer } = useAccount()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const handleClose = () => {
    reset({
      first_name: "",
      last_name: "",
      city: "",
      country_code: "",
      postal_code: "",
      address_1: "",
      address_2: "",
      company: "",
      phone: "",
      province: "",
    })
    close()
  }

  const submit = handleSubmit(async (data: FormValues) => {
    setSubmitting(true)
    setError(undefined)

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      company: "",
      address_1: data.address_1,
      address_2: data.address_2 || "",
      city: data.city,
      country_code: data.country_code,
      province: data.province || "",
      postal_code: data.postal_code,
      phone: data.phone || "",
      metadata: {},
    }

    medusaClient.customers.addresses
      .addAddress({ address: payload })
      .then(() => {
        setSubmitting(false)
        refetchCustomer()
        handleClose()
      })
      .catch(() => {
        setSubmitting(false)
        setError("Failed to add address, please try again.")
      })
  })

  return (
    <>
      <div
        className="border border-gray-200 p-5 flex flex-col justify-center items-center cursor-pointer"
        onClick={open}
      >
        <Open size={40} />
      </div>

      <Modal isOpen={state} close={handleClose}>
        <Modal.Title>Add Adress</Modal.Title>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-y-2">
            <div>
              <label className="font-light text-[14px]">First Name *</label>
              <Input
                label="First name"
                {...register("first_name", {
                  required: "First name is required",
                })}
                required
                errors={errors}
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">Last Name *</label>
              <Input
                label="Last name"
                {...register("last_name", {
                  required: "Last name is required",
                })}
                required
                errors={errors}
                placeholder="Last Name"
              />
            </div>
            {/* <div>
              <label className="font-light text-[14px]">Last Name *</label>
              <Input label="Company" {...register("company")} errors={errors} />
            </div> */}
            <div>
              <label className="font-light text-[14px]">Address 1 *</label>
              <Input
                label="Address"
                {...register("address_1", {
                  required: "Address is required",
                })}
                required
                errors={errors}
                placeholder="Address 1"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">Address 2</label>
              <Input
                label="Apartment, suite, etc."
                {...register("address_2")}
                errors={errors}
                placeholder="Address 2"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">Postal Code *</label>
              <Input
                label="Postal code"
                {...register("postal_code", {
                  required: "Postal code is required",
                })}
                required
                errors={errors}
                placeholder="Postal Code"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">City *</label>
              <Input
                label="City"
                {...register("city", {
                  required: "City is required",
                })}
                errors={errors}
                required
                placeholder="City"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">State *</label>
              <Input
                label="Province / State"
                {...register("province")}
                errors={errors}
                placeholder="State"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">Country *</label>
              <CountrySelect
                {...register("country_code", { required: true })}
                placeholder="Country"
              />
            </div>
            <div>
              <label className="font-light text-[14px]">Phone *</label>
              <Input
                label="Phone"
                {...register("phone", {
                  pattern: phoneRegex,
                })}
                errors={errors}
                placeholder="Phone"
              />
            </div>
          </div>
          {error && (
            <div className="text-rose-500 text-small-regular py-2">{error}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="mt-5 flex flex-row gap-4">
            <Button
              className="!bg-gray-200 !text-gray-900 !border-gray-200 min-h-0"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button className="min-h-0" onClick={submit} disabled={submitting}>
              Save
              {submitting && <Spinner />}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddAddress
