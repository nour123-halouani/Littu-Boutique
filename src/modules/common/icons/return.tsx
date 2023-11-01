import React from "react"
import { IconProps } from "types/icon"

const Return: React.FC<IconProps> = ({
  size = "22",
  color = "#000",
  ...attributes
}) => {
  return (
    <svg
      width="40"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M51 26C51 41 40.025 51 26.485 51C15.48 51 6.6 45.1625 3.5 36M1 26C1 11 11.975 1 25.515 1C36.5225 1 45.4 6.8375 48.5 16"
          stroke="#A8A9A5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M13.5 38.5L3.5 36L1 46M38.5 13.5L48.5 16L51 6"
          stroke="#A8A9A5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default Return
