import React from "react"
import { IconProps } from "types/icon"

const MenuIcon: React.FC<IconProps> = ({
  size = "30",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      {...attributes}
    >
      <path
        d="M4.375 7.65625V9.84375H30.625V7.65625H4.375ZM4.375 16.4062V18.5938H30.625V16.4062H4.375ZM4.375 25.1562V27.3438H30.625V25.1562H4.375Z"
        fill={color}
      />
    </svg>
  )
}

export default MenuIcon
