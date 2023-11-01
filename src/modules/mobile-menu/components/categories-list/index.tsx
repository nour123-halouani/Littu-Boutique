"use client"
import AngleDown from "@modules/common/icons/angle-down"
import { useState } from "react"

const CategoriesList = () => {
  const [open, setOpen] = useState(Array(testList?.length).fill(false))

  const handleClick = (index: any) => {
    const updatedOpen = [...open]
    updatedOpen[index] = !updatedOpen[index]
    setOpen(updatedOpen)
  }

  return (
    <div className="min-w-full px-5 pt-5 pb-24 max-w-xs bg-white">
      <ul className="divide-y border-b w-full">
        {testList.map((category: any, index: any) => (
          <li key={index}>
            {category?.subCat !== undefined ? (
              <div
                className="flex flex-row gap-2 items-center py-2"
                onClick={() => handleClick(index)}
              >
                <div className="font-normal text-[12.5px] uppercase tracking-[0.9px]">
                  {category.cat}
                </div>
                <AngleDown />
              </div>
            ) : (
              <div className="font-normal text-[12.5px] uppercase tracking-[0.9px] py-2">
                {category.cat}
              </div>
            )}
            {open[index] && (
              <ul className="mb-2">
                {category.subCat.map((subCategory: any, subIndex: number) => (
                  <li className="p-[1.75px]" key={subIndex}>
                    <div className="capitalize font-light hover:underline">
                      {subCategory.subCatName}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesList

const testList = [
  { cat: "home" },
  {
    cat: "women",
    subCat: [
      {
        subCatName: "category #01",
        subsubCat: ["Subcategory Name", "Subcategory Name"],
      },
      {
        subCatName: "category #02",
        subsubCat: ["Subcategory Name", "Subcategory Name", "Subcategory Name"],
      },
      {
        subCatName: "category #03",
        subsubCat: [
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
        ],
      },
      {
        subCatName: "category #04",
        subsubCat: [
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
        ],
      },
    ],
  },
  {
    cat: "Men",
    subCat: [
      {
        subCatName: "category #01",
        subsubCat: ["Subcategory Name", "Subcategory Name"],
      },
      {
        subCatName: "category #02",
        subsubCat: ["Subcategory Name", "Subcategory Name", "Subcategory Name"],
      },
      {
        subCatName: "category #03",
        subsubCat: [
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
        ],
      },
      {
        subCatName: "category #04",
        subsubCat: [
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
        ],
      },
      {
        subCatName: "category #05",
        subsubCat: [
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
        ],
      },
      {
        subCatName: "category #06",
        subsubCat: [
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
        ],
      },
    ],
  },
  {
    cat: "Kids",
    subCat: [
      {
        subCatName: "category #01",
        subsubCat: ["Subcategory Name", "Subcategory Name"],
      },
      {
        subCatName: "category #02",
        subsubCat: ["Subcategory Name", "Subcategory Name", "Subcategory Name"],
      },
      {
        subCatName: "category #03",
        subsubCat: [
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
        ],
      },
      {
        subCatName: "category #04",
        subsubCat: [
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
          "Subcategory Name",
        ],
      },
    ],
  },
  { cat: "contact us" },
]
