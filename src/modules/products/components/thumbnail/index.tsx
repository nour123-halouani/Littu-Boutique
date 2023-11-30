import { Image as MedusaImage } from "@medusajs/medusa"
import Favorite from "@modules/common/icons/favorite"
import PlaceholderImage from "@modules/common/icons/placeholder-image"
import SeeDetails from "@modules/common/icons/see-details"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"

type ThumbnailProps = {
  id: any
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full" | "xsmall"
  link?: string | null
  inCard?: boolean
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  id,
  thumbnail,
  images,
  size = "small",
  link,
  inCard = false,
}) => {
  const initialImage = thumbnail || images?.[0]?.url

  return (
    <div
      className={clsx("relative aspect-[29/42]", {
        "w-[120px] ": size === "xsmall",
        "w-[180px] ": size === "small",
        "w-[290px] ": size === "medium",
        "w-[440px] ": size === "large",
        "w-full aspect-w-29 aspect-h-42": size === "full",
      })}
    >
      <ImageOrPlaceholder
        image={initialImage}
        size={size}
        link={link}
        inCard={inCard}
        id={id}
      />
    </div>
  )
}

const ImageOrPlaceholder = ({ image, size, link, inCard, id }: any) => {
  const [hovered, setHovered] = useState(false)
  const [, setIsFavorite] = useState(false)
  const pathname = usePathname()
  let storedArrayString = localStorage.getItem("wishlist")
  let storedArray = JSON.parse(storedArrayString ? storedArrayString : "")

  const addToWishlist = () => {
    setIsFavorite(true)
    storedArray.push(id)
    let updatedArrayString = JSON.stringify(storedArray)
    localStorage.setItem("wishlist", updatedArrayString)
  }

  const removeFromWishlist = () => {
    setIsFavorite(false)
    let indexToRemove = storedArray.indexOf(id)
    if (indexToRemove !== -1) storedArray.splice(indexToRemove, 1)
    let updatedArrayString = JSON.stringify(storedArray)
    localStorage.setItem("wishlist", updatedArrayString)
  }

  const mouseEnter = () => {
    if (
      pathname !== "/cart" &&
      pathname !== "/wishlist" &&
      pathname !== "/account" &&
      pathname !== "/account/orders" &&
      !pathname.startsWith("/order/details/") &&
      !pathname.startsWith("/order/confirmed/") &&
      !inCard
    ) {
      setHovered(true)
    }
  }

  const mouseLeave = () => {
    if (
      pathname !== "/cart" &&
      pathname !== "/wishlist" &&
      pathname !== "/account" &&
      pathname !== "/account/orders" &&
      !pathname.startsWith("/order/details/") &&
      !pathname.startsWith("/order/confirmed/") &&
      !inCard
    ) {
      setHovered(false)
    }
  }

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {image && (
        <img
          src={image}
          alt="Thumbnail"
          className="absolute inset-0 h-full object-cover object-center"
          draggable={false}
        />
      )}
      {hovered && (
        <div className="absolute inset-0 flex items-end justify-center mb-4">
          <div className="flex items-center justify-center gap-3 max-w-[90%]">
            <button
              className="uppercase px-6 py-2 text-[11px] 
          transition-colors duration-200 disabled:opacity-50
           tracking-[1.4px] font-medium bg-white hover:bg-typography
            hover:text-white hover:font-light"
            >
              Add To Card
            </button>
            <div className="bg-white p-1.5 rounded-full">
              {storedArray.includes(id) ? (
                <Favorite
                  color="#D3B9A2"
                  className="cursor-pointer"
                  onClick={() => removeFromWishlist()}
                />
              ) : (
                <Favorite
                  color="#000"
                  className="cursor-pointer"
                  onClick={() => addToWishlist()}
                />
              )}
            </div>
            <Link href={link} className="bg-white p-1.5 rounded-full">
              <SeeDetails />
            </Link>
          </div>
        </div>
      )}
      {!image && (
        <div className="w-full h-full absolute inset-0 bg-gray-100 flex items-center justify-center">
          <PlaceholderImage size={size === "small" ? 16 : 24} />
        </div>
      )}
    </div>
  )
}

export default Thumbnail
