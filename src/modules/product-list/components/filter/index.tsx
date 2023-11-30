"use client"
import React, { useState } from "react"
import Close from "@modules/common/icons/close"
import Open from "@modules/common/icons/open"
var convertCssColorNameToHex = require("convert-css-color-name-to-hex")

interface ColorSelectProps {
  selectedColor: string
  setSelectedColor: (color: string) => void
}

interface SizeSelectProps {
  selectedSize: string
  setSelectedSize: (size: string) => void
}

interface PriceSelectProps {
  selectedPrice: string
  setSelectedPrice: (price: string) => void
}

const ProductFilter = () => {
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedPrice, setSelectedPrice] = useState("")

  const tabs = [
    {
      label: "Color",
      component: (
        <ColorSelect
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      ),
    },
    {
      label: "Size",
      component: (
        <SizeSelect
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
      ),
    },
    {
      label: "Price",
      component: (
        <PriceSelect
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      ),
    },
    {
      label: "Brand",
      component: <></>,
    },
    {
      label: `Availability`,
      component: <></>,
    },
  ]

  const [open, setOpen] = useState(Array(tabs.length).fill(false))

  const handleClick = (index: number) => {
    const updatedOpen = [...open]
    updatedOpen[index] = !updatedOpen[index]
    setOpen(updatedOpen)
  }

  const reset = () => {
    setSelectedColor("")
    setSelectedSize("")
    setSelectedPrice("")
    // setOpen(Array(tabs.length).fill(false))
  }

  return (
    <div className="w-full">
      <ul className="divide-y border-b w-full">
        {tabs.map((tab, index) => (
          <li key={index} className="cursor-pointer">
            <div
              className="flex flex-row gap-2 justify-between items-center py-3"
              onClick={() => handleClick(index)}
            >
              <div
                className={`font-light text-[17px] tracking-[0.9px] ${
                  open[index] && "text-theme"
                }`}
              >
                {tab.label}
              </div>
              {open[index] ? <Close /> : <Open />}
            </div>
            {open[index] && (
              <div className="text-[14px] font-light pb-10 pt-3">
                {tab.component}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div
        onClick={() => reset()}
        className="text-zinc-800 text-[14px] font-light leading-normal tracking-tight mt-4 cursor-pointer"
      >
        Reset All Filter
      </div>
    </div>
  )
}

const ColorSelect = ({ selectedColor, setSelectedColor }: ColorSelectProps) => {
  const testColorList = [
    { name: "red", length: 12 },
    { name: "gray", length: 8 },
    { name: "green", length: 2 },
  ]

  return (
    <>
      {testColorList.map((color, index) => (
        <div
          key={index}
          className={`w-full px-[24px] py-[13px] bg-white border-gray-200 border-[1px] flex-col justify-start items-start gap-2.5 inline-flex mb-3 first-letter ${
            selectedColor === color.name && "border-theme border-[1px]"
          }`}
          onClick={() => setSelectedColor(color.name)}
        >
          <div className="justify-start items-center gap-2.5 inline-flex">
            <div
              className="w-[18px] h-[18px] rounded-full border border-neutral-800"
              style={{
                backgroundColor: convertCssColorNameToHex(color.name),
              }}
            />
            <p
              className={`font-light leading-normal tracking-tight text-[15px] ${
                selectedColor === color.name && "text-theme"
              }`}
            >
              {color.name} ( {color.length} )
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

const SizeSelect = ({ selectedSize, setSelectedSize }: SizeSelectProps) => {
  const testSizeList = [
    { name: "XS", length: 12 },
    { name: "S", length: 8 },
    { name: "XXS", length: 2 },
    { name: "M", length: 24 },
    { name: "L", length: 9 },
  ]

  return (
    <>
      {testSizeList.map((size, index) => (
        <div
          key={index}
          className={`w-full px-[24px] py-[13px] bg-white border-gray-200 border-[1px] flex-col justify-start items-start gap-2.5 inline-flex mb-3 first-letter ${
            selectedSize === size.name && "border-theme border-[1px]"
          }`}
          onClick={() => setSelectedSize(size.name)}
        >
          <p
            className={`font-light leading-normal tracking-tight text-[15px]  ${
              selectedSize === size.name && "text-theme"
            }`}
          >
            {size.name} ( {size.length} )
          </p>
        </div>
      ))}
    </>
  )
}

const PriceSelect = ({ selectedPrice, setSelectedPrice }: PriceSelectProps) => {
  const testPriceList = [
    { name: "Less than 20€", length: 8 },
    { name: "20 - 40€", length: 24 },
    { name: "50 - 60€", length: 30 },
  ]

  return (
    <>
      {testPriceList.map((price, index) => (
        <div
          key={index}
          className={`w-full px-[24px] py-[13px] bg-white border-gray-200 border-[1px] flex-col justify-start items-start gap-2.5 inline-flex mb-3 first-letter ${
            selectedPrice === price.name && "border-theme border-[1px]"
          }`}
          onClick={() => setSelectedPrice(price.name)}
        >
          <p
            className={`font-light leading-normal tracking-tight text-[15px]  ${
              selectedPrice === price.name && "text-theme"
            }`}
          >
            {price.name} ( {price.length} )
          </p>
        </div>
      ))}
    </>
  )
}

export default ProductFilter
