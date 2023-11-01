import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import ButtonBlack from "@modules/common/components/button-black"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: string) => {
    setAuthError(e)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then((res) => {
        refetchCustomer()
        router.push("/account")
      })
      .catch((error) => {
        if (error.response) {
          const networkErrorMessage = error.response.data.message
          handleError(networkErrorMessage)
        } else if (error.request) {
          handleError("No response received from the serve 2")
        } else {
          handleError(error.message)
        }
      })
  })

  return (
    <div className="max-w-xl w-full flex flex-col items-center">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h4 className="text-theme-dark xsmall:text-[26px] text-[20px] uppercase tracking-[1.36px] self-start xsmall:pb-[22px] pb-[20px]	">
        sign-up
      </h4>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-[17px]">
          <div>
            <label className="text-theme-dark font-light tracking-[0.18px] text-[13px] xsmall:text-[15px]">
              First Name
            </label>
            <Input
              label="First name"
              {...register("first_name", {
                required: "First name is required",
              })}
              autoComplete="given-name"
              errors={errors}
            />
          </div>
          <div>
            <label className="text-theme-dark font-light tracking-[0.18px] text-[13px] xsmall:text-[15px]">
              Last Name
            </label>
            <Input
              label="Last name"
              {...register("last_name", { required: "Last name is required" })}
              autoComplete="family-name"
              errors={errors}
            />
          </div>
          <div>
            <label className="text-theme-dark font-light tracking-[0.18px] text-[13px] xsmall:text-[15px]">
              Email
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
              Phone
            </label>
            <Input
              label="Phone"
              {...register("phone")}
              autoComplete="tel"
              errors={errors}
            />
          </div>
          <div>
            <label className="text-theme-dark font-light tracking-[0.18px] text-[13px] xsmall:text-[15px]">
              Password
            </label>
            <Input
              label="Password"
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              autoComplete="new-password"
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
        <div className="self-start text-theme-dark font-light xsmall:text-[14px] text-[12px] mt-4">
          By creating an account, you agree to Littu Boutique&apos;s{" "}
          <Link href="/content/privacy-policy" className="underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/content/terms-of-use" className="underline">
            Terms of Use
          </Link>
          .
        </div>

        <ButtonBlack className="mt-6">Prihlásiť Se</ButtonBlack>
      </form>
      <span className="self-start text-theme-dark font-light xsmall:text-[14px] text-[12px] mt-6">
        <div>
          Already a member?
          <button
            onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
            className="underline font-medium ml-1"
          >
            Sign up
          </button>
          .
        </div>
      </span>
    </div>
  )
}

export default Register
