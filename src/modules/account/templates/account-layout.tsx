"use client"
import { useAccount } from "@lib/context/account-context"
import Spinner from "@modules/common/icons/spinner"
import React, { useEffect } from "react"
import AccountNav from "../components/account-nav"

const AccountLayout: React.FC = ({ children }) => {
  const { customer, retrievingCustomer, checkSession } = useAccount()

  useEffect(() => {
    checkSession()
  }, [checkSession])

  if (retrievingCustomer || !customer) {
    return (
      <div className="flex items-center justify-center w-full min-h-[640px] h-full text-gray-900">
        <Spinner size={36} />
      </div>
    )
  }

  return (
    <div className="small:content-container content-container-mobile medium:content-container flex flex-col my-20">
      <div className="grid grid-cols-1 small:grid-cols-12 small:px-8 py-6 small:py-12 border-[1px] border-gray-200 gap-16">
        <div className="small:col-span-2 hidden small:block">
          <AccountNav />
        </div>
        <div className="small:col-span-8 medium:col-span-10">{children}</div>
      </div>
    </div>
  )
}

export default AccountLayout
