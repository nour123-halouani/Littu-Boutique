import React from "react"
import { IconProps } from "types/icon"

const Open: React.FC<IconProps> = ({
  size = "18",
  color = "#000",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        id="Vector"
        d="M8.625 0.75V8.5625H0.8125V10.125H8.625V17.9375H10.1875V10.125H18V8.5625H10.1875V0.75H8.625Z"
        fill="#111111"
      />
    </svg>
  )
}

export default Open
