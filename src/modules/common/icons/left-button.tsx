import React from "react"
import { IconProps } from "types/icon"

const LeftButton: React.FC<IconProps> = ({
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
        d="M53 23H3M3 23L22.7559 44M3 23L22.7559 2"
        stroke={color}
        strokeWidth="3"
        opacity={opacity}
      />
    </svg>
  )
}

export default LeftButton
