import { useStore } from "@lib/context/store-context"
import { LineItem, Region } from "@medusajs/medusa"
import LineItemOptions from "@modules/common/components/line-item-options"
import LineItemPrice from "@modules/common/components/line-item-price"
import NativeSelect from "@modules/common/components/native-select"
import Trash from "@modules/common/icons/trash"
import X from "@modules/common/icons/x"
import Thumbnail from "@modules/products/components/thumbnail"
import Link from "next/link"

type ItemProps = {
  item: Omit<LineItem, "beforeInsert">
  region: Region
}

const Item = ({ item, region }: ItemProps) => {
  const { updateItem, deleteItem } = useStore()

  return (
    <div className="grid grid-cols-[122px_1fr] gap-x-4 border-t border-gray-200 pt-8">
      <div className="w-[122px]">
        <Thumbnail thumbnail={item.thumbnail} size="xsmall" id={item.id} />
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="flex items-start justify-between max-w-full">
          <div className="flex flex-col">
            <Link
              href={`/products/${item.variant.product.handle}`}
              className="uppercase cursor-pointer tracking-wider font-normal xsmall:text-[16px] text-[13px] hover:underline xsmall:mt-0 mt-3"
            >
              {item.title}
            </Link>
            <LineItemOptions variant={item.variant} />
          </div>
          <X className="cursor-pointer"
            onClick={() => deleteItem(item.id)}
          />
        </div>
        <div className="flex xsmall:items-end xsmall:h-full max-h-full xsmall:justify-between xsmall:flex-row flex-col-reverse gap-y-3">
          <div className="flex flex-row font-light">
            <span className="border-l-[1px] border-t-[1px] border-b-[1px] border-gray-200 w-[50px] flex justify-center items-center">
              {item.quantity}
            </span>
            <div className="flex flex-col">
              <span
                className={`${"cursor-pointer hover:border-theme hover:text-theme"} border-[1px] border-gray-200 w-7 flex items-center justify-center `}
                onClick={() =>
                  updateItem({
                    lineId: item.id,
                    quantity: item.quantity + 1,
                  })
                }
              >
                +
              </span>
              <span
                className={`${
                  item.quantity !== 1 &&
                  "cursor-pointer hover:border-theme hover:text-theme"
                } border-[1px] border-gray-200 w-7 flex items-center justify-center `}
                onClick={() =>
                  updateItem({
                    lineId: item.id,
                    quantity: item.quantity - 1,
                  })
                }
              >
                -
              </span>
            </div>
          </div>
          <div>
            <LineItemPrice item={item} region={region} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
