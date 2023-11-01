"use client"
import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import ButtonBlack from "@modules/common/components/button-black"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import "../../../../styles/common/customCheckbox.css"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: string) => {
    setAuthError(e || "Incorrect credentials")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch((error) => {
        if (error.response) {
          const networkErrorMessage = error.response.data.message
          handleError(networkErrorMessage)
        }
      })
  })

  const [remember, setRemember] = useState(false)

  const handleRememberCheckboxChange = () => {
    setRemember(!remember)
  }

  return (
    <div className="max-w-xl w-full flex flex-col items-center">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h4 className="text-theme-dark xsmall:text-[26px] text-[20px] uppercase tracking-[1.36px] self-start xsmall:pb-[22px] pb-[20px]	">
        sign-in
      </h4>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-[20px]">
          <div>
            <label className="text-theme-dark font-light tracking-[0.18px] text-[13px] xsmall:text-[15px]">
              E-mail address
            </label>
            <Input
              label="Email"
              {...register("email", { required: "Email is required" })}
              autoComplete="email"
              errors={errors}
            />
          </div>
          <div>
            <label className="text-theme-dark font-light tracking-[0.18px] text-[13px] xsmall:text-[15px]">
              Password
            </label>
            <Input
              label="Password"
              {...register("password", { required: "Password is required" })}
              type="password"
              autoComplete="current-password"
              errors={errors}
            />
          </div>
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              {authError}
            </span>
          </div>
        )}

        <label className="inline-flex items-center mt-4 container">
          <span className="text-theme-dark font-light tracking-[0.18px] text-[13px] xsmall:text-[15px] mt-[-2.5px] xsmall:mt-[-2px]">
            Remember me
          </span>
          <input
            type="checkbox"
            checked={remember}
            onChange={handleRememberCheckboxChange}
          />
          <span className="checkmark"></span>
        </label>
        <ButtonBlack className="mt-6">Prihlásiť sa</ButtonBlack>
      </form>
      <span className="self-start text-theme-dark font-light xsmall:text-[14px] text-[12px] mt-6">
        <button className="underline mr-2 ">Forgot password ?</button>
        Not a member?
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline font-medium ml-1"
        >
          Join us
        </button>
        .
      </span>
    </div>
  )
}

export default Login
