import React, { useState } from "react"
import { IconProps } from "types/icon"

const LogoFacebook: React.FC<IconProps> = ({
  size = "11",
  color = "currentColor",
  ...attributes
}) => {
  const [isHovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const fillColor = isHovered ? "#D3B9A2" : "#A8A9A5"

  return (
    <svg
      width={size}
      height="20"
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...attributes}
    >
      <path
        id="Vector"
        d="M8.25293 0C5.36213 0 3.66667 1.48714 3.66667 4.87571V7.85714H0V11.4286H3.66667V20H7.33333V11.4286H10.2667L11 7.85714H7.33333V5.48C7.33333 4.20357 7.76087 3.57143 8.99067 3.57143H11V0.146429C10.6524 0.100714 9.63967 0 8.25293 0Z"
        fill={fillColor}
      />
    </svg>
  )
}

export default LogoFacebook
