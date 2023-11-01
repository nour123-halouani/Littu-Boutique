import React from "react"
import { IconProps } from "types/icon"

const AngleDown: React.FC<IconProps> = ({
  size = "22",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        id="Vector"
        d="M1.8491 3.86914L1.39941 4.31883L5.30566 8.22508L5.53035 8.43977L5.75504 8.22508L9.66129 4.31883L9.21191 3.86945L5.53066 7.5507L1.8491 3.86914Z"
        fill={color}
      />
    </svg>
  )
}

export default AngleDown
