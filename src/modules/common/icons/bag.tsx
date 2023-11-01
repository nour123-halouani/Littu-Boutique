import React from "react"
import { IconProps } from "types/icon"

const Bag: React.FC<IconProps> = ({
  size = "22",
  color = "#000",
  ...attributes
}) => {
  return (
    <svg
      width="40"
      height="52"
      viewBox="0 0 48 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M3.94247 20.6C4.04303 19.347 4.61186 18.1779 5.53566 17.3254C6.45946 16.473 7.67046 15.9997 8.92747 16H39.0725C40.3295 15.9997 41.5405 16.473 42.4643 17.3254C43.3881 18.1779 43.9569 19.347 44.0575 20.6L46.065 45.6C46.1202 46.288 46.0324 46.9799 45.8071 47.6323C45.5817 48.2847 45.2238 48.8834 44.7557 49.3906C44.2877 49.8979 43.7197 50.3027 43.0875 50.5797C42.4553 50.8567 41.7727 50.9998 41.0825 51H6.91747C6.22728 50.9998 5.5446 50.8567 4.91242 50.5797C4.28024 50.3027 3.71225 49.8979 3.24421 49.3906C2.77617 48.8834 2.41822 48.2847 2.1929 47.6323C1.96757 46.9799 1.87976 46.288 1.93497 45.6L3.94247 20.6V20.6Z"
          stroke="#A8A9A5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M34 23.5V11C34 8.34784 32.9464 5.8043 31.0711 3.92893C29.1957 2.05357 26.6522 1 24 1C21.3478 1 18.8043 2.05357 16.9289 3.92893C15.0536 5.8043 14 8.34784 14 11V23.5"
          stroke="#A8A9A5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default Bag
