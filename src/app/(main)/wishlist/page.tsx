"use client"
import { getProductById } from "@lib/data/product-by-id"
import Breadcrumbs from "@modules/common/components/breadcrumbs"
import ButtonBlack from "@modules/common/components/button-black"
import Thumbnail from "@modules/products/components/thumbnail"
import { Metadata } from "next"
import { useEffect, useState } from "react"
import { formatAmount } from "medusa-react"
import X from "@modules/common/icons/x"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Your wishlist",
}

export default function Wishlist() {
  const [productResponses, setProductResponses] = useState<any[]>([])
  const columns = ["product", "price", "availbility", ""]
  useEffect(() => {
    const storedArrayString = localStorage.getItem("wishlist")
    let storedArray = JSON.parse(storedArrayString ? storedArrayString : "")
    const fetchProducts = async () => {
      const responses: any[] = []

      for (const arrayItem of storedArray) {
        try {
          const product = await getProductById(arrayItem)
          responses.push(product)
        } catch (error) {
          console.error(`Error fetching product with ID ${arrayItem}:`, error)
        }
      }
      setProductResponses(responses)
    }

    fetchProducts()
  }, [])

  const getCheapestPriceUSD = (variants: any) => {
    const usdVariants = variants.filter((variant: any) =>
      variant.prices.some((price: any) => price.currency_code === "usd")
    )

    if (usdVariants.length === 0) {
      return "N/A"
    }

    const cheapestVariantUSD = usdVariants.reduce(
      (minVariant: any, currentVariant: any) => {
        const minPrice = minVariant.prices.find(
          (price: any) => price.currency_code === "usd"
        ).amount
        const currentPrice = currentVariant.prices.find(
          (price: any) => price.currency_code === "usd"
        ).amount
        return currentPrice < minPrice ? currentVariant : minVariant
      },
      usdVariants[0]
    )

    return cheapestVariantUSD.prices.find(
      (price: any) => price.currency_code === "usd"
    ).amount
  }

  const removeFromWishlist = (id: string) => {
    let storedArrayString = localStorage.getItem("wishlist")
    let storedArray = JSON.parse(storedArrayString ? storedArrayString : "")
    let indexToRemove = storedArray.indexOf(id)
    if (indexToRemove !== -1) storedArray.splice(indexToRemove, 1)
    let updatedArrayString = JSON.stringify(storedArray)
    localStorage.setItem("wishlist", updatedArrayString)
    const updatedProducts = productResponses.filter(
      (product) => product.id !== id
    )
    setProductResponses(updatedProducts)
  }

  return (
    <>
      <Breadcrumbs path={"Domov / Wishlist"} />
      {productResponses.length !== 0 ? (
        <div className="my-16 small:content-container-tablet medium:content-container content-container-mobile pb-12">
          <table className="min-w-full border-b border-gray-300 hidden small:table">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className={`py-8 uppercase font-medium tracking-widest text-left border-b ${
                      index === 0
                        ? "w-2/5"
                        : index === 1
                        ? "w-1/7"
                        : index === 2
                        ? "w-1/5"
                        : "w-1/4"
                    }`}
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productResponses?.map((product, rowIndex) => (
                <tr key={rowIndex} className="border-b">
                  <td className="py-6">
                    <div className="flex flex-row gap-10 items-center">
                      <Thumbnail
                        thumbnail={product.thumbnail}
                        inCard={true}
                        id={product.id}
                        size="xsmall"
                      />
                      <p className="uppercase tracking-wider">
                        {product.title}
                      </p>
                    </div>
                  </td>
                  <td>
                    {product.variants &&
                      product.variants.some((variant: any) =>
                        variant.prices.some(
                          (price: any) => price.currency_code === "usd"
                        )
                      ) && (
                        <span className="tracking-[0.72px]">
                          {"€" +
                            formatAmount({
                              amount: getCheapestPriceUSD(product.variants),
                              region: "" as any,
                              includeTaxes: false,
                            })}
                        </span>
                      )}
                  </td>
                  <td>
                    {product.variants &&
                    product.variants.reduce(
                      (sum: any, variant: any) =>
                        sum + (variant.inventory_quantity || 0),
                      0
                    ) > 0 ? (
                      <span className="font-light">In Stock</span>
                    ) : (
                      <span className="font-light">No Available</span>
                    )}
                  </td>
                  <td>
                    <div className="flex flex-row gap-8 items-center">
                      <Link
                        href={`/products/${product.handle}`}
                        className="uppercase tracking-widest flex items-center justify-center h-[45px] w-full py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 font-light  text-white bg-theme-dark  hover:bg-theme hover:p-[-1px] disabled:hover:bg-theme-dark disabled:hover:text-white"
                      >
                        ADD TO CARD
                      </Link>
                      <X
                        className="cursor-pointer"
                        onClick={() => removeFromWishlist(product.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col gap-2 small:hidden">
            {productResponses?.map((product, rowIndex) => (
              <div
                key={rowIndex}
                className="border-b border-gray-300 py-6 flex items-start justify-between gap-4"
              >
                <div className="flex flex-row gap-4">
                  <Thumbnail
                    thumbnail={product.thumbnail}
                    inCard={true}
                    id={product.id}
                    size="xsmall"
                    // className="ml-auto"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="uppercase tracking-wider">{product.title}</p>
                    <p>
                      {product.variants &&
                        product.variants.some((variant: any) =>
                          variant.prices.some(
                            (price: any) => price.currency_code === "usd"
                          )
                        ) && (
                          <span className="tracking-[0.72px]">
                            {formatAmount({
                              amount: getCheapestPriceUSD(product.variants),
                              region: "" as any,
                              includeTaxes: false,
                            }) + "$"}
                          </span>
                        )}
                    </p>
                    <p>
                      {product.variants &&
                      product.variants.reduce(
                        (sum: any, variant: any) =>
                          sum + (variant.inventory_quantity || 0),
                        0
                      ) > 0 ? (
                        <span className="font-light">In Stock</span>
                      ) : (
                        <span className="font-light">No Available</span>
                      )}
                    </p>
                    <Link
                      href={`/products/${product.handle}`}
                      className="uppercase tracking-widest flex items-center justify-center h-[35px] w-full py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 font-light  text-white bg-theme-dark  hover:bg-theme hover:p-[-1px] disabled:hover:bg-theme-dark disabled:hover:text-white"
                    >
                      ADD TO CARD
                    </Link>
                  </div>
                </div>
                <div>
                  <X
                    className="cursor-pointer self-start"
                    onClick={() => removeFromWishlist(product.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="small:content-container-tablet medium:content-container content-container-mobile py-20">
          <div className="bg-theme-light px-8 py-24 flex flex-col justify-center items-center text-center">
            <h1 className="font-normal text-4xl uppercase">
              Your Wishlist is empty
            </h1>
            <p className="font-light text-[14px] mt-4 mb-6 max-w-[32rem]">
              You don&apos;t have anything in your wishlist. Let&apos;s change
              that, use the link below to start browsing our products.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
