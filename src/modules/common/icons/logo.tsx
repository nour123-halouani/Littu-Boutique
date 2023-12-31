'use client'
import React, { useEffect, useState } from "react"
import { IconProps } from "types/icon"

const Logo: React.FC<IconProps> = ({
  size = "16",
  color = "currentColor",
  ...attributes
}) => {
  const [isViewportUnder1024px, setIsViewportUnder1024px] = useState(false);

  useEffect(() => {
    const checkViewportWidth = () => {
      setIsViewportUnder1024px(window.innerWidth <= 1024);
    };
    checkViewportWidth();

    window.addEventListener("resize", checkViewportWidth);

    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, []);

  const svgColor = isViewportUnder1024px ? "black" : color;

  return (
    <svg
      width={size}
      height="33"
      viewBox="0 0 72 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <rect width={size} height="33" fill="transparent" />
      <rect
        width="2676"
        height="3657"
        transform="translate(-50 -306)"
        fill="transparent"
      />
      <g filter="url(#filter0_d_3_2)">
        <rect
          width="1907.06"
          height="73"
          transform="translate(-50 -20)"
          fill="transparent"
        />
        <path d="M4.92227 0H0V32.4107H4.92227V0Z" fill={svgColor} />
        <path
          d="M13.1376 7.90336H8.66597V32.3761H13.1376V7.90336Z"
          fill={svgColor}
        />
        <path
          d="M10.9191 5.30357C12.375 5.30357 13.5882 4.125 13.5882 2.63445C13.5882 1.14391 12.375 0 10.9191 0C9.46324 0 8.25 1.17857 8.25 2.66912C8.25 4.15966 9.46324 5.30357 10.9191 5.30357Z"
          fill={svgColor}
        />
        <path
          d="M66.5893 7.90336V21.1103C66.5893 21.9422 66.52 22.7048 66.3813 23.3981C66.2427 24.0914 66.0347 24.75 65.7227 25.3393C65.4454 25.9286 65.0987 26.4139 64.6828 26.8645C64.2668 27.3151 63.7815 27.6964 63.2616 27.9737C62.7416 28.2857 62.1523 28.4937 61.4937 28.667C60.8351 28.8403 60.1418 28.9097 59.4139 28.9097C58.374 28.9097 57.438 28.771 56.6754 28.459C55.8782 28.1471 55.2542 27.6964 54.6996 27.0725C54.1796 26.4485 53.7983 25.6859 53.521 24.7847C53.2784 23.8834 53.1397 22.8088 53.1397 21.5609V7.90336H48.6681V21.5609C48.6681 23.3288 48.8761 24.9233 49.292 26.3445C49.708 27.7658 50.2973 28.9443 51.0252 29.9496C51.7878 30.9202 52.7237 31.6828 53.7983 32.2027C54.9076 32.7227 56.1555 33 57.542 33C58.6859 33 59.7605 32.8267 60.7311 32.4454C61.7017 32.0987 62.6029 31.5788 63.3656 30.8855C64.1282 30.2269 64.8214 29.395 65.3414 28.4244C65.8614 27.4884 66.2773 26.4139 66.5546 25.27V32.3414H71.0609V7.90336H66.5893Z"
          fill={svgColor}
        />
        <path
          d="M48.2868 30.8855V30.9548C47.2469 31.7521 45.2017 32.584 44.0924 32.7227C43.2605 32.8613 42.4632 32.9307 41.7353 32.9307C40.5221 32.9307 39.4475 32.7574 38.5116 32.3761C37.5756 31.9948 36.813 31.4401 36.1544 30.7122C35.5305 29.9842 35.0452 29.0483 34.6985 27.9737C34.3866 26.8992 34.2132 25.6166 34.2132 24.1954V11.6817H23.4674V24.23C23.4674 25.062 23.5368 25.7553 23.6754 26.3445C23.8141 26.9338 24.0567 27.4191 24.3687 27.8004C24.6807 28.1817 25.062 28.4937 25.5473 28.667C26.0326 28.875 26.5872 28.9443 27.2458 28.9443C27.7658 28.9443 28.355 28.875 29.083 28.771C29.7416 28.667 30.5389 28.3897 31.7174 27.7658C32.0294 28.9097 32.2374 29.7069 32.8267 31.0242L32.2721 31.4401C31.0935 32.1681 29.9496 32.5494 28.875 32.7227C28.0431 32.8613 27.2458 32.9307 26.5179 32.9307C25.3046 32.9307 24.23 32.7574 23.2941 32.3761C22.3582 31.9948 21.5609 31.4401 20.937 30.7122C20.313 29.9842 19.8277 29.0483 19.4811 27.9737C19.1345 26.8992 18.9958 25.6166 18.9958 24.1954V11.6817H15.6681V7.90336H18.9958V2.28782H23.4674V7.90336H34.2132V2.28782H38.6849V7.90336H46.1376V11.6471H38.6849V24.1954C38.6849 25.0273 38.7542 25.7206 38.9275 26.3099C39.0662 26.8992 39.3088 27.3845 39.6208 27.7658C39.9328 28.1471 40.3141 28.459 40.7994 28.6324C41.2847 28.8403 41.8393 28.9097 42.4979 28.9097C43.0179 28.9097 43.6071 28.8403 44.3351 28.7363C44.9937 28.6324 45.687 28.4244 46.8655 27.8004C47.2122 28.979 47.6975 29.9842 48.2868 30.8855Z"
          fill={svgColor}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3_2"
          x="-64"
          y="-34"
          width="1935.06"
          height="101"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Logo
