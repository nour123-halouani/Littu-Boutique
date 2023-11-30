"use client"

import { useAccount } from "@lib/context/account-context"
import AddressBook from "../components/address-book"

const AddressesTemplate = () => {
  const { customer, retrievingCustomer } = useAccount()

  if (retrievingCustomer || !customer) {
    return null
  }

  return (
    <div className="w-full smal::px-0 px-2">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="small:text-[27px] text-[22px] uppercase font-medium tracking-wider">Shipping Addresses</h1>
        <p className="font-light text-[12px] small:text-[14px]">
          View and update your shipping addresses, you can add as many as you
          like. Saving your addresses will make them available during checkout.
        </p>
      </div>
      <AddressBook customer={customer} />
    </div>
  )
}

export default AddressesTemplate
