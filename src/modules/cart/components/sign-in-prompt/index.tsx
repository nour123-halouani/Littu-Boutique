import Button from "@modules/common/components/button-black"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-start flex-col xsmall:flex-row xsmall:justify-between mb-3">
      <div>
        <h2 className="uppercase text-[20px] tracking-wide font-medium">Already have an account?</h2>
        <p className="font-light text-[14px] my-2">
          Sign in for a better experience.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <Button>Sign in</Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
