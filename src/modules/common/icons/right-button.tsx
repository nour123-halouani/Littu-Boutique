import React from "react"
import { IconProps } from "types/icon"

const RightButton: React.FC<IconProps> = ({
  size = "40",
  color = "white",
  opacity = 1,
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height="46"
      viewBox="0 0 53 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        id="Vector 1"
        d="M3.67176e-06 23L50 23M50 23L30.2441 2.00001M50 23L30.2441 44"
        stroke={color}
        strokeWidth="3"
        opacity={opacity}
      />
    </svg>
  )
}

export default RightButton
