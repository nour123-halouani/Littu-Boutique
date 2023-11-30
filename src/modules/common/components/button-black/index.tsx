import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonBlack = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "uppercase flex items-center justify-center h-[40px] px-6 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 font-light  text-white bg-theme-dark border-theme-dark hover:bg-theme hover:border-[1px] hover:p-[-1px] disabled:hover:bg-theme-dark disabled:hover:text-white",
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default ButtonBlack
