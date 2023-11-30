"use client"
import { Metadata } from "next"
import Image from "next/image"
import sliderOne from "../../../../public/images/hero_slider_two.png"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import { useState } from "react"
import ListPagination from "@modules/product-list/components/list-pagination"
import ProductPreview from "@modules/products/components/product-preview"
import Newsletter from "@modules/common/components/newsletter"
import ProductFilter from "@modules/product-list/components/filter"

export const metadata: Metadata = {
  title: "list",
  description: "Explore all of our products.",
}

export default function ProductsList() {
  const { data } = useFeaturedProductsQuery()
  const myList = data?.concat(data)
  const twoList = myList?.concat(myList)
  const threeList = twoList?.concat(twoList)
  const itemsPerPage = 12
  const totalItems = threeList?.length || 0
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const itemsToDisplay = threeList?.slice(startIndex, endIndex)

  const startProductNumber = startIndex + 1
  const endProductNumber = Math.min(endIndex, totalItems)

  const [selectedCatgory, setSelectedCategory] = useState<string>("All")

  interface Categories {
    value: string
    label: string
  }
  const categories: Categories[] = [
    { value: "All", label: "All" },
    { value: "Women", label: "Women" },
    { value: "Men", label: "Men" },
    { value: "Kids", label: "Kids" },
    { value: "Shoes", label: "Shoes" },
  ]

  const handleSelectChange = (category: any) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <div className="relative mt-[60px] small:mt-[0px]">
        <Image
          src={sliderOne}
          alt="slide"
          priority
          className="max-h-[500px] w-[100vw] h-[80vh] object-fill"
        />
        <div className="absolute inset-0">
          <div className="flex text-white items-center justify-center text-[40px] h-full tracking-[3.28px] uppercase small:text-[60px]">
            clothing
          </div>
        </div>
      </div>

      <div className="small:content-container content-container-mobile medium:content-container grid small:grid-cols-12 my-20 small:gap-9">
      <div className="small:col-span-3 col-span-12 small:hidden block mb-6">
          <p className="uppercase mb-2 divide-y border-b tracking-[2.52px] font-medium">
            Categories
          </p>
          <ul className="font-light">
            {categories.map((category) => (
              <li
                key={category.value}
                onClick={() => handleSelectChange(category.value)}
                value={category.value}
                className={`cursor-pointer mb-2 text-[14px]
                  ${selectedCatgory === category.value && "text-theme"}`}
              >
                {category.label}
              </li>
            ))}
          </ul>
          <p className="uppercase mb-2 divide-y border-b tracking-[2.52px] font-medium mt-4">
            Filter
          </p>
          <ProductFilter />
        </div>

        <div className="small:col-span-9 col-span-12 max-w-full">
          <div className="flex flex-row justify-between font-light">
            <p className="text-[12px] small:text-[16px] mb-3">
              Showing {startProductNumber} - {endProductNumber} of{" "}
              {threeList?.length} products
            </p>
            <p className="text-[12px] small:text-[16px]">Default View</p>
          </div>
          <ul className="grid small:grid-cols-3 col-span-12 grid-cols-2 gap-3">
            {itemsToDisplay?.map((item, index) => (
              <li key={index}>
                <ProductPreview {...item} />
              </li>
            ))}
          </ul>

          <ListPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="small:col-span-3 col-span-12 small:block hidden">
          <p className="uppercase mb-2 divide-y border-b tracking-[2.52px] font-medium">
            Categories
          </p>
          <ul className="font-light">
            {categories.map((category) => (
              <li
                key={category.value}
                onClick={() => handleSelectChange(category.value)}
                value={category.value}
                className={`cursor-pointer mb-1 text-[14px]
                  ${selectedCatgory === category.value && "text-theme"}`}
              >
                {category.label}
              </li>
            ))}
          </ul>
          <p className="uppercase mb-2 divide-y border-b tracking-[2.52px] font-medium mt-4">
            Filter
          </p>
          <ProductFilter />
        </div>
      </div>
      <Newsletter />
    </>
  )
}
