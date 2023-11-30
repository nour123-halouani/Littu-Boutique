import React from "react"
import { IconProps } from "types/icon"

const Close: React.FC<IconProps> = ({
  size = "22",
  color = "#000",
  ...attributes
}) => {
  return (
    <svg
      width="18"
      height="3"
      viewBox="0 0 18 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        id="Vector"
        d="M0.8125 0.9375V2.5H18V0.9375H0.8125Z"
        fill="#D3B9A2"
      />
    </svg>
  )
}

export default Close
