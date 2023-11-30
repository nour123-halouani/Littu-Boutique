import React, { useState } from "react"

interface IReview {
  readOnly?: boolean
  rat?: number
}

const Star = ({ type, onClick, onMouseOver, onMouseOut, readOnly }: any) => {
  let svgContent
  switch (type) {
    case "half":
      svgContent = (
        <svg
          className={`mr-1 ${!readOnly && "cursor-pointer"}`}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="la:star-half-alt">
            <path
              id="Vector"
              d="M8.00013 1.1875L7.54713 2.203L5.92213 5.8595L1.95313 6.2655L0.828125 6.3905L1.67213 7.1405L4.62513 9.8125L3.79713 13.719L3.56263 14.8125H3.57813L4.54713 14.25L8.00013 12.2655L11.4531 14.25L12.4376 14.8125L12.2031 13.7185L11.3751 9.8125L14.3281 7.1405L15.1721 6.3905L14.0471 6.2655L10.0781 5.8595L8.45313 2.203L8.00013 1.1875ZM8.00013 3.6405L9.28163 6.5315L9.40663 6.7815L9.68763 6.8125L12.8441 7.1405L10.4841 9.2655L10.2656 9.453L10.3281 9.7345L10.9846 12.828L8.25013 11.25L8.00013 11.1095V3.6405Z"
              fill="#232323"
            />
          </g>
        </svg>
      )
      break
    case "full":
      svgContent = (
        <svg
          className={`mr-1 ${!readOnly && "cursor-pointer"}`}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="la:star-solid">
            <path
              id="Vector"
              d="M15.168 6.27341L10.082 5.73641L8.00003 1.06641L5.91803 5.73641L0.832031 6.27341L4.63103 9.69741L3.57003 14.6989L8.00003 12.1449L12.43 14.6999L11.369 9.69791L15.168 6.27341Z"
              fill="#232323"
            />
          </g>
        </svg>
      )
      break
    case "empty":
      svgContent = (
        <svg
          className={`mr-1 ${!readOnly && "cursor-pointer"}`}
          onClick={onClick}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="la:star">
            <path
              id="Vector"
              d="M8.00013 1.0625L7.54713 2.094L5.92213 5.734L1.95313 6.1565L0.828125 6.2815L1.67213 7.0315L4.62513 9.703L3.79713 13.6095L3.56263 14.703L4.54713 14.1405L8.00013 12.1405L11.4531 14.1405L12.4376 14.703L12.2031 13.6095L11.3751 9.703L14.3281 7.0315L15.1721 6.2815L14.0471 6.1565L10.0781 5.7345L8.45313 2.094L8.00013 1.0625ZM8.00013 3.5155L9.28163 6.4065L9.40663 6.6715L9.68763 6.703L12.8281 7.031L10.4846 9.141L10.2656 9.3435L10.3281 9.625L10.9846 12.703L8.25013 11.1405L8.00013 10.9845L7.75013 11.1405L5.01563 12.703L5.67213 9.625L5.73463 9.3435L5.51563 9.1405L3.17213 7.0315L6.31263 6.703L6.59413 6.672L6.71913 6.4065L8.00013 3.5155Z"
              fill="#232323"
            />
          </g>
        </svg>
      )
      break
    default:
      svgContent = null
  }

  return svgContent
}

const Rating = ({ rat, readOnly }: IReview) => {
  const [rating, setRating] = useState<number>(rat ? rat : 0)

  const handleStarClick = (event: any, index: number) => {
    const rect = event.target.getBoundingClientRect()
    const starWidth = rect.width / 2

    const offsetX = event.clientX - rect.left

    const isLeftHalf = offsetX < starWidth
    const isRightHalf = offsetX >= starWidth

    if (isLeftHalf) {
      setRating(index - 0.5)
    } else if (isRightHalf) {
      setRating(index)
    }
  }

  const handleStarHover = (event: any, index: number) => {
    const rect = event.target.getBoundingClientRect()
    const starWidth = rect.width / 2

    const offsetX = event.clientX - rect.left

    const isLeftHalf = offsetX < starWidth
    const isRightHalf = offsetX >= starWidth

    if (isLeftHalf) {
      setRating(index - 0.5)
    } else if (isRightHalf) {
      setRating(index)
    }
  }

  const handleStarMouseOut = () => {
    setRating(rating)
  }

  return (
    <div className="flex items-center align-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          type={
            index <= rating
              ? "full"
              : index === Math.ceil(rating) && !Number.isInteger(rating)
              ? "half"
              : "empty"
          }
          onMouseOver={(e: any) => !readOnly && handleStarHover(e, index)}
          onMouseOut={() => !readOnly && handleStarMouseOut()}
          onClick={(e: any) => !readOnly && handleStarClick(e, index)}
          readOnly={readOnly}
        />
      ))}
      <span className="font-light ml-1">({rating})</span>
    </div>
  )
}

export default Rating
