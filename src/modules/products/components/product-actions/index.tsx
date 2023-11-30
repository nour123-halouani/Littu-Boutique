import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Button from "@modules/common/components/button-black"
import Rating from "@modules/common/components/star-rating"
import LogoFacebook from "@modules/common/icons/facebook"
import Favorite from "@modules/common/icons/favorite"
import LogoInstagram from "@modules/common/icons/instagram"
import OptionSelectColor from "@modules/products/components/option-select-color"
import OptionSelectSize from "@modules/products/components/option-select-size"
import Link from "next/link"
import React, { useMemo, useState } from "react"

type ProductActionsProps = {
  product: PricedProduct
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const {
    updateOptions,
    addToCart,
    options,
    inStock,
    variant,
    maxQuantity,
    quantity,
    decreaseQuantity,
    increaseQuantity,
  } = useProductActions()

  const productPrice = useProductPrice({
    id: product.id!,
    variantId: variant?.id,
  })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = productPrice

    return variantPrice || cheapestPrice || null
  }, [productPrice])

  const productDetails = productPrice.product

  const [, setIsFavorite] = useState(false)
  let storedArrayString = localStorage.getItem("wishlist")
  let storedArray = JSON.parse(storedArrayString ? storedArrayString : "")

  const addToWishlist = () => {
    setIsFavorite(true)
    storedArray.push(product.id)
    let updatedArrayString = JSON.stringify(storedArray)
    localStorage.setItem("wishlist", updatedArrayString)
  }

  const removeFromWishlist = () => {
    setIsFavorite(false)
    let indexToRemove = storedArray.indexOf(product.id)
    if (indexToRemove !== -1) storedArray.splice(indexToRemove, 1)
    let updatedArrayString = JSON.stringify(storedArray)
    localStorage.setItem("wishlist", updatedArrayString)
  }

  return (
    <div className="flex flex-col gap-y-2 small:px-0 content-container-mobile">
      {/* {price.collection && (
        <Link
          href={`/collections/${product.collection.handle}`}
          className="text-small-regular text-gray-700"
        >
           {product.collection.title} 
          test
        </Link>
      )} */}
      <h3 className="small:text-[22px] text-[24px] tracking-[1.04px] uppercase">
        {product.title}
      </h3>
      <Rating rat={3.5} readOnly={true} />

      <div>
        {selectedPrice ? (
          <div className="flex flex-row font-light gap-2 items-center">
            <span className="text-[20px] small:text-[24px] font-normal tracking-[1.12px]">
              {selectedPrice.calculated_price !== "€NaN"
                ? selectedPrice.calculated_price
                : "0€"}
            </span>
            {selectedPrice.price_type === "sale" && (
              <span className="line-through text-typography-light tracking-[0.64px] font-normal text-[13px]">
                {selectedPrice.original_price}
              </span>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>

      <p className="font-light text-[15px] tracking-[0.18px] border-b-[1px] border-gray-200 pb-[20px]">
        {productDetails?.subtitle}
      </p>

      {product.variants.length > 1 && (
        <div className="mt-2 flex flex-col gap-4">
          {(product.options || []).map(
            (option) =>
              option.title.toLowerCase() === "color" && (
                <div key={option.id}>
                  <OptionSelectColor
                    option={option}
                    current={options[option.id]}
                    updateOption={updateOptions}
                    title={option.title}
                  />
                </div>
              )
          )}

          {(product.options || []).map(
            (option) =>
              option.title.toLowerCase() === "size" && (
                <div key={option.id}>
                  <OptionSelectSize
                    option={option}
                    current={options[option.id]}
                    updateOption={updateOptions}
                    title={option.title}
                  />
                </div>
              )
          )}

          {(product.options || []).map(
            (option) =>
              option.title.toLowerCase() === "test" && (
                <div key={option.id}>
                  <OptionSelectSize
                    option={option}
                    current={options[option.id]}
                    updateOption={updateOptions}
                    title={option.title}
                  />
                </div>
              )
          )}
        </div>
      )}

      <p className="font-light">
        {variant !== undefined && product.variants.length > 1
          ? maxQuantity + " in stock"
          : product.variants.length === 1
          ? variant?.inventory_quantity + " in stock"
          : ""}
      </p>

      <div className="flex uxsmall:flex-row flex-col gap-3">
        <div className="flex flex-row font-light">
          <span className="border-l-[1px] border-t-[1px] border-b-[1px] border-gray-200 w-[50px] flex justify-center items-center">
            {quantity}
          </span>
          <div className="flex flex-col">
            <span
              className={`${
                variant !== undefined &&
                "cursor-pointer hover:border-theme hover:text-theme"
              } border-[1px] border-gray-200 w-7 flex items-center justify-center `}
              onClick={increaseQuantity}
            >
              +
            </span>
            <span
              className={`${
                variant !== undefined &&
                quantity !== 1 &&
                "cursor-pointer hover:border-theme hover:text-theme"
              } border-[1px] border-gray-200 w-7 flex items-center justify-center `}
              onClick={decreaseQuantity}
            >
              -
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Button
            onClick={addToCart}
            disabled={maxQuantity === 0 && true}
            className="tracking-[1.5px] uxsmall:h-auto small:w-52 w-44 h-14"
          >
            Add to cart
            {/* {maxQuantity === 0 ? "No stock" : "Add to cart"} */}
          </Button>

          {storedArray.includes(product.id) ? (
            <div
              className="bg-theme w-14 h-auto flex items-center justify-center cursor-pointer"
              onClick={() => removeFromWishlist()}
            >
              <Favorite color="white" />
            </div>
          ) : (
            <div
              className="bg-theme-dark w-14 h-auto flex items-center justify-center cursor-pointer"
              onClick={() => addToWishlist()}
            >
              <Favorite color="white" />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between border-t-[1px] border-gray-200 py-[10px] mt-2">
        <p className="font-light text-[15px] tracking-[0.18px] ">
          Categories: {product.categories}
        </p>
        <div className="font-light text-[15px] tracking-[0.18px] uxsmall:flex hidden gap-3 items-center">
          <span>Share</span>
          <Link href="/fb">
            <LogoFacebook size={6} />
          </Link>
          <Link href="/insta">
            <LogoInstagram size={10} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductActions
