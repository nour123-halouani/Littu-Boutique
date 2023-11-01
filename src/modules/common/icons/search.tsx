import React from "react"
import { IconProps } from "types/icon"

const Search: React.FC<IconProps> = ({
  size = "22",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        id="Vector"
        d="M12.8395 3.5C9.4104 3.5 6.61838 6.29191 6.61838 9.72084C6.61838 11.2107 7.14095 12.5762 8.01813 13.6481L3.06055 18.6042L3.95576 19.5L8.91272 14.5426C10.0198 15.4502 11.4079 15.9448 12.8395 15.9417C16.2685 15.9417 19.0605 13.1498 19.0605 9.72084C19.0605 6.29191 16.2685 3.5 12.8395 3.5ZM12.8395 4.74417C15.5954 4.74417 17.8163 6.96501 17.8163 9.72084C17.8163 12.4767 15.5954 14.6975 12.8395 14.6975C10.0835 14.6975 7.8626 12.4767 7.8626 9.72084C7.8626 6.96501 10.0835 4.74417 12.8395 4.74417Z"
        fill={color}
      />
    </svg>
  )
}

export default Search
