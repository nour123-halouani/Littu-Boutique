import LeftButton from "@modules/common/icons/left-button"
import RightButton from "@modules/common/icons/right-button"
import clsx from "clsx"
import React from "react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const ListPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPages = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={clsx("inline-block p-2 cursor-pointer", {
            "text-theme ": i === currentPage,
          })}
          onClick={() => onPageChange(i)}
        >
          {i}
        </li>
      )
    }
    return pages
  }

  return (
    <ul className="flex justify-center  items-center mt-4 font-medium">
      <li
        className={clsx("inline-block mx-1 p-2 cursor-pointer", {
          "opacity-50 pointer-events-none": currentPage === 1,
        })}
        onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}
      >
        <LeftButton color="black" size="18" className="font-medium"/>
      </li>

      {renderPages()}

      <li
        className={clsx("inline-block mx-1 p-2 cursor-pointer", {
          "opacity-50 pointer-events-none": currentPage === totalPages,
        })}
        onClick={() =>
          currentPage !== totalPages && onPageChange(currentPage + 1)
        }
      >
        <RightButton color="black" size="18" className="font-medium" />
      </li>
    </ul>
  )
}

export default ListPagination
