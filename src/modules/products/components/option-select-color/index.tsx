import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import React  from "react"
var convertCssColorNameToHex = require("convert-css-color-name-to-hex")

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelectColor: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)


  return (
    <div className="flex flex-col gap-2">
      <span className="font-light text-[15px] ">
        {title} {current ? ": " + current : ""}
      </span>
      <div className="flex flex-row gap-2 items-center">
        {filteredOptions.map((v) => (
          <div
            key={v}
            onClick={() => updateOption({ [option.id]: v })}
            className={`rounded-full p-[2.5px] cursor-pointer ${
              v === current && "border-theme-light border-solid border-[0.5px]"
            }`}
          >
            <div
              className="p-[10px] rounded-full border border-black max-w-[100%] max-h-[100%]"
              style={{
                backgroundColor: convertCssColorNameToHex(v),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OptionSelectColor
