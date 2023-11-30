import clsx from "clsx"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  id,
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <div>
      <Thumbnail
        thumbnail={thumbnail}
        id={id}
        size="full"
        link={`/products/${handle}`}
      />
      <div className="leading-6 uppercase mt-2 tracking-[0.8px] small:text-[15px]">
        <span>{title}</span>
        <div className="flex items-center gap-x-2 mt-[-5px]">
          {price ? (
            <>
              {price.price_type === "sale" && (
                <span className="line-through text-gray-500">
                  {price.original_price}
                </span>
              )}
              <span
                className={clsx("text-[14px] tracking-[0.72px]", {
                  "text-rose-500": price.price_type === "sale",
                })}
              >
                {price.calculated_price}
              </span>
            </>
          ) : (
            <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductPreview
