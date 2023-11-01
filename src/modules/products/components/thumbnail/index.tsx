import { useProductActions } from "@lib/context/product-context"
import { Image as MedusaImage } from "@medusajs/medusa"
import Favorite from "@modules/common/icons/favorite"
import PlaceholderImage from "@modules/common/icons/placeholder-image"
import SeeDetails from "@modules/common/icons/see-details"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

type ThumbnailProps = {
  thumbnail?: string | null
  images?: MedusaImage[] | null
  size?: "small" | "medium" | "large" | "full"
  link?: string | null
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
  link,
}) => {
  const initialImage = thumbnail || images?.[0]?.url
  return (
    <div
      className={clsx("relative aspect-[29/42]", {
        "w-[180px] ": size === "small",
        "w-[290px] ": size === "medium",
        "w-[440px] ": size === "large",
        "w-full aspect-w-29 aspect-h-42": size === "full",
      })}
    >
      <ImageOrPlaceholder image={initialImage} size={size} link={link} />
    </div>
  )
}

const ImageOrPlaceholder = ({ image, size, link }: any) => {
  const [hovered, setHovered] = useState(false)
  const [isFvaorite, setIsFavorite] = useState(false)

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {image && (
        <Image
          src={image}
          alt="Thumbnail"
          className="absolute inset-0"
          draggable={false}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
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
              {isFvaorite ? (
                <Favorite
                  color="#D3B9A2"
                  className="cursor-pointer"
                  onClick={() => setIsFavorite(false)}
                />
              ) : (
                <Favorite
                  color="#000"
                  className="cursor-pointer"
                  onClick={() => setIsFavorite(true)}
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
