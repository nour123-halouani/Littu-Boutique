import React from "react"
import { IconProps } from "types/icon"

const Calendar: React.FC<IconProps> = ({
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
          d="M41 6H11C5.47715 6 1 10.4772 1 16V41C1 46.5228 5.47715 51 11 51H41C46.5229 51 51 46.5228 51 41V16C51 10.4772 46.5229 6 41 6Z"
          stroke="#A8A9A5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M1 21H51M16 1V11V1ZM36 1V11V1Z"
          stroke="#A8A9A5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default Calendar
