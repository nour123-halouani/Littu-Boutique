import React from "react"
import { IconProps } from "types/icon"

const X: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 35 35"
      fill="none"
      {...attributes}
    >
      <path
        d="M7.89617 6.32287L6.32227 7.89678L15.9287 17.4999L6.32227 27.1041L7.89727 28.678L17.5004 19.0716L27.1046 28.6769L28.6774 27.1041L19.0721 17.4999L28.6774 7.89568L27.1035 6.32178L17.5004 15.9282L7.89617 6.32287Z"
        fill="#232323"
      />
    </svg>
  )
}

export default X
