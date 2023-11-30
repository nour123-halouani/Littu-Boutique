import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import React from "react"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelectSize: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)

  return (
    <div className="flex flex-col gap-2">
      <span className="font-light text-[15px]">
        {title} {current ? ": " + current : ""}
      </span>
      <div className="inline-block items-center">
        {filteredOptions.map((v) => (
          <button
            key={v}
            onClick={() => updateOption({ [option.id]: v })}
            className={`border-[#EBEBEA] min-w-[32px] h-[32px] border-solid border-[1px] font-light transition-all duration-200 mr-[8px] mb-[8px] p-[2.5px] text-[15px] ${
              v === current &&
              "text-theme border-theme-light border-solid border-[0.5px]"
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  )
}

export default OptionSelectSize
