"use client"

import { useAccount } from "@lib/context/account-context"
import Register from "@modules/account/components/register"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Login from "../components/login"
import Breadcrumbs from "@modules/common/components/breadcrumbs"

const LoginTemplate = () => {
  const { loginView, customer, retrievingCustomer } = useAccount()
  const [currentView, _] = loginView

  const router = useRouter()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push("/account")
    }
  }, [customer, retrievingCustomer, router])

  return (
    <div className="w-full pb-4 border-b-[1px] mb-20">
      {currentView === "sign-in" ? (
        <Breadcrumbs path="Domov / Prihlásiť sa" />
      ) : (
        <Breadcrumbs path="Domov / Prihlásiť Se" />
      )}
      <div className="w-full flex justify-center py-[50px] xsmall:py-[90px] px-[5%]">
        {currentView === "sign-in" ? <Login /> : <Register />}
      </div>
    </div>
  )
}

export default LoginTemplate
