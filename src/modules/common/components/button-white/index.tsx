import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonWhite = ({
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
        "uppercase flex items-center justify-center min-h-[40px] px-8 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 font-medium hover:font-light",
        {
          "text-typography bg-white border-white hover:border-typography hover:bg-typography hover:text-white disabled:hover:bg-white disabled:hover:text-white":
            variant === "primary",
          "text-theme-dark bg-transparent border-icons-dark hover:bg-icons-light":
            variant === "secondary",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default ButtonWhite
